import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-credit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-credit.component.html',
  styleUrl: './customer-credit.component.css',
})
export class CustomerCreditComponent {
  // สถานะการแสดงผล
  editInfomation = false;
  detailComplete = false;
  showForm = false;

  // ข้อมูลช่องทางการชำระเงิน
  paymentMethod: any = null;
  originalPaymentMethod: any = null;

  user: any;

  constructor(private http: HttpClient) {
    this.checkPaymentMethod();
  }

  // ดีงข้อมูลจาก localstorage
  getUserFromLocalStorage(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log(this.user);
    } else {
      this.user = null;
    }
  }

  // ตรวจสอบว่ามีช่องทางการชำระเงินหรือไม่
  checkPaymentMethod() {
    this.getUserFromLocalStorage(); // ดึงข้อมูลผู้ใช้จาก localStorage

    if (this.user && this.user._id) {
      // ถ้ามี _id ของ user
      const url = `http://localhost:3000/users/${this.user._id}`; // URL สำหรับดึงข้อมูลลูกค้า
      this.http.get(url).subscribe(
        (response: any) => {
          if (response && response.userCreditDetail) {
            // ถ้ามีข้อมูลใน userCreditDetail
            this.paymentMethod = response.userCreditDetail; // เก็บข้อมูลใน paymentMethod
            this.showForm = false; // ไม่ต้องแสดงฟอร์ม
            this.detailComplete = true; // ข้อมูลครบถ้วนแล้ว
          } else {
            // ถ้าไม่มีข้อมูลใน userCreditDetail
            this.showForm = true; // แสดงฟอร์มกรอกข้อมูล
            this.paymentMethod = null; // กำหนด paymentMethod เป็น null
          }
        },
        (error) => {
          console.error('Error fetching paymentMethod information:', error);
          this.showForm = true; // หากเกิดข้อผิดพลาดในการดึงข้อมูล ให้แสดงฟอร์มกรอกข้อมูล
          this.paymentMethod = null;
        }
      );
    } else {
      // หากไม่พบข้อมูลผู้ใช้ใน localStorage
      this.showForm = true; // แสดงฟอร์มกรอกข้อมูล
      this.paymentMethod = null;
    }
  }

  // สลับโหมดแก้ไข
  toggleEditMode() {
    this.editInfomation = true;
    if (!this.paymentMethod) {
      this.paymentMethod = {
        cardNumber: Number,
        cardholderName: '',
        month: Number,
        year: Number,
        cvv: Number,
      };
    }
    this.originalPaymentMethod = { ...this.paymentMethod }; // เก็บข้อมูลเริ่มต้น
  }

  // ยกเลิกการแก้ไข
  cancelEdit() {
    if (this.originalPaymentMethod) {
      this.paymentMethod = { ...this.originalPaymentMethod }; // คืนค่าข้อมูลเดิม
    }
    this.editInfomation = false;
  }

  saveChanges() {
    if (this.paymentMethod && this.user) {
      const url = `http://localhost:3000/users/${this.user._id}`; // เปลี่ยน URL ให้ตรงกับ Backend
      this.http
        .patch(url, {
          userCreditDetail: {
            cardNumber: this.paymentMethod.cardNumber,
            cardholderName: this.paymentMethod.cardholderName,
            month: this.paymentMethod.month,
            year: this.paymentMethod.year,
            cvv: this.paymentMethod.cvv,
          },
        })
        .subscribe(
          (response: any) => {
            console.log('Updated paymentMethod Information:', response);
            this.detailComplete = true; // แสดงข้อมูลหลังจากบันทึก
            this.editInfomation = false; // ปิดโหมดแก้ไข
            this.originalPaymentMethod = { ...this.paymentMethod }; // เก็บข้อมูลล่าสุด
            this.showForm = false; // ปิดการแสดงฟอร์มกรอกข้อมูล
          },
          (error) => {
            console.error('Error updating customer information:', error);
          }
        );
    }
  }

  // บันทึกข้อมูล
  // saveChanges() {
  //   if (this.paymentMethod) {
  //     this.detailComplete = true; // ข้อมูลเสร็จสมบูรณ์
  //     this.editInfomation = false;
  //     this.originalPaymentMethod = { ...this.paymentMethod }; // เก็บข้อมูลล่าสุด
  //     this.showForm = false;
  //     console.log('Updated Payment Method:', this.paymentMethod);
  //   }
  // }
}
