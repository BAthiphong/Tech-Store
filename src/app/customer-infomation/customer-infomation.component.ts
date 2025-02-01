import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-infomation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-infomation.component.html',
  styleUrl: './customer-infomation.component.css',
})
export class CustomerInfomationComponent {
  // ใช้สำหรับจัดการสถานะ
  editInfomation = false;
  detailComplete = false;

  user: any;

  // ข้อมูลลูกค้า
  customerId: string | null = 'xxxx-xxx-xxx-xxx'; // กำหนดรหัสลูกค้าเริ่มต้น
  customer: any = null; // customer จะเป็น null ถ้ายังไม่มีข้อมูล
  originalCustomer: any = null; // เก็บข้อมูลเดิมไว้เมื่อยกเลิกการแก้ไข

  // สถานะแสดงผลกรณีไม่มีข้อมูล
  showForm = false;

  constructor(private http: HttpClient) {
    this.checkCustomerData();
  }

  getUserFromLocalStorage(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log(this.user);
    } else {
      this.user = null;
    }
  }

  // เช็คว่า customer มีข้อมูลหรือไม่
  checkCustomerData() {
    this.getUserFromLocalStorage(); // ดึงข้อมูลผู้ใช้จาก localStorage

    if (this.user && this.user._id) {
      // ถ้ามี _id ของ user
      const url = `http://localhost:3000/users/${this.user._id}`; // URL สำหรับดึงข้อมูลลูกค้า
      this.http.get(url).subscribe(
        (response: any) => {
          if (response && response.userInformationDetail) {
            // ถ้ามีข้อมูลใน userInformationDetail
            this.customer = response.userInformationDetail; // เก็บข้อมูลใน customer
            this.showForm = false; // ไม่ต้องแสดงฟอร์ม
            this.detailComplete = true; // ข้อมูลครบถ้วนแล้ว
          } else {
            // ถ้าไม่มีข้อมูลใน userInformationDetail
            this.showForm = true; // แสดงฟอร์มกรอกข้อมูล
            this.customer = null; // กำหนด customer เป็น null
          }
        },
        (error) => {
          console.error('Error fetching customer information:', error);
          this.showForm = true; // หากเกิดข้อผิดพลาดในการดึงข้อมูล ให้แสดงฟอร์มกรอกข้อมูล
          this.customer = null;
        }
      );
    } else {
      // หากไม่พบข้อมูลผู้ใช้ใน localStorage
      this.showForm = true; // แสดงฟอร์มกรอกข้อมูล
      this.customer = null;
    }
  }

  // เช็คว่า customer มีข้อมูลหรือไม่
  // checkCustomerData() {
  //   this.getUserFromLocalStorage();
  //   if (!this.customer) {
  //     this.showForm = true; // ถ้ายังไม่มีข้อมูล ให้แสดงฟอร์มกรอกข้อมูล
  //   } else {
  //     this.showForm = false; // ถ้ามีข้อมูลแล้ว ไม่ต้องแสดงฟอร์ม
  //   }
  // }

  // ฟังก์ชันสำหรับการเพิ่มข้อมูลใหม่
  toggleEditMode() {
    this.editInfomation = true;
    if (!this.customer) {
      this.customer = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        dateOfBirth: '',
      }; // เปลี่ยนชื่อตัวแปร
    }
    this.originalCustomer = { ...this.customer }; // เก็บข้อมูลเริ่มต้น
  }

  // ฟังก์ชันสำหรับการยกเลิกการแก้ไข
  cancelEdit() {
    if (this.originalCustomer) {
      this.customer = { ...this.originalCustomer }; // รีเซ็ตข้อมูลกลับไปยังค่าเดิม
    }
    this.editInfomation = false; // ปิดโหมดแก้ไข
  }

  // ฟังก์ชันสำหรับบันทึกข้อมูล
  saveChanges() {
    if (this.customer && this.user) {
      const url = `http://localhost:3000/users/${this.user._id}`; // เปลี่ยน URL ให้ตรงกับ Backend
      this.http
        .patch(url, {
          username: this.customer.username,
          email: this.customer.email,
          userInformationDetail: {
            firstName: this.customer.firstName,
            lastName: this.customer.lastName,
            phoneNumber: this.customer.phoneNumber,
            dateOfBirth: this.customer.dateOfBirth,
          },
        })
        .subscribe(
          (response: any) => {
            console.log('Updated Customer Information:', response);
            this.detailComplete = true; // แสดงข้อมูลหลังจากบันทึก
            this.editInfomation = false; // ปิดโหมดแก้ไข
            this.originalCustomer = { ...this.customer }; // เก็บข้อมูลล่าสุด
            this.showForm = false; // ปิดการแสดงฟอร์มกรอกข้อมูล
          },
          (error) => {
            console.error('Error updating customer information:', error);
          }
        );
    }
  }
}
