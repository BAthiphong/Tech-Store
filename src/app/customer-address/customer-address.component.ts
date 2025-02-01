import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-address',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-address.component.html',
  styleUrl: './customer-address.component.css',
})
export class CustomerAddressComponent {
  // ใช้สำหรับจัดการสถานะ
  editInfomation = false;
  detailComplete = false;

  // ข้อมูลที่อยู่การจัดส่ง
  shippingAddress: any = null;
  originalShippingAddress: any = null;

  // สถานะแสดงผลกรณีไม่มีข้อมูล
  showForm = true;

  user: any;

  constructor(private http: HttpClient) {
    this.checkShippingAddress();
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

  // เช็คว่า shippingAddress มีข้อมูลหรือไม่
  checkShippingAddress() {
    this.getUserFromLocalStorage(); // ดึงข้อมูลผู้ใช้จาก localStorage

    if (this.user && this.user._id) {
      // ถ้ามี _id ของ user
      const url = `http://localhost:3000/users/${this.user._id}`; // URL สำหรับดึงข้อมูลลูกค้า
      this.http.get(url).subscribe(
        (response: any) => {
          if (response && response.userAddressDetail) {
            // ถ้ามีข้อมูลใน userAddressDetail
            this.shippingAddress = response.userAddressDetail; // เก็บข้อมูลใน shippingAddress
            this.showForm = false; // ไม่ต้องแสดงฟอร์ม
            this.detailComplete = true; // ข้อมูลครบถ้วนแล้ว
          } else {
            // ถ้าไม่มีข้อมูลใน userAddressDetail
            this.showForm = true; // แสดงฟอร์มกรอกข้อมูล
            this.shippingAddress = null; // กำหนด shippingAddress เป็น null
          }
        },
        (error) => {
          console.error('Error fetching shippingAddress information:', error);
          this.showForm = true; // หากเกิดข้อผิดพลาดในการดึงข้อมูล ให้แสดงฟอร์มกรอกข้อมูล
          this.shippingAddress = null;
        }
      );
    } else {
      // หากไม่พบข้อมูลผู้ใช้ใน localStorage
      this.showForm = true; // แสดงฟอร์มกรอกข้อมูล
      this.shippingAddress = null;
    }
  }

  // ฟังก์ชันสำหรับการเพิ่มหรือแก้ไขข้อมูล
  toggleEditMode() {
    this.editInfomation = true;
    if (!this.shippingAddress) {
      this.shippingAddress = {
        fullName: '',
        phoneNumber: '',
        subDistrict: '',
        district: '',
        province: '',
        zipCode: '',
      };
    }
    this.originalShippingAddress = { ...this.shippingAddress }; // เก็บข้อมูลเริ่มต้น
  }

  // ฟังก์ชันสำหรับการยกเลิกการแก้ไข
  cancelEdit() {
    if (this.originalShippingAddress) {
      this.shippingAddress = { ...this.originalShippingAddress }; // รีเซ็ตข้อมูลกลับไปยังค่าเดิม
    }
    this.editInfomation = false; // ปิดโหมดแก้ไข
  }

  // ฟังก์ชันสำหรับบันทึกข้อมูล

  saveChanges() {
    if (this.shippingAddress && this.user) {
      const url = `http://localhost:3000/users/${this.user._id}`; // เปลี่ยน URL ให้ตรงกับ Backend
      this.http
        .patch(url, {
          userAddressDetail: {
            fullName: this.shippingAddress.fullName,
            phoneNumber: this.shippingAddress.phoneNumber,
            subDistrict: this.shippingAddress.subDistrict,
            district: this.shippingAddress.district,
            province: this.shippingAddress.province,
            zipCode: this.shippingAddress.zipCode,
          },
        })
        .subscribe(
          (response: any) => {
            console.log('Updated shippingAddress Information:', response);
            this.detailComplete = true; // แสดงข้อมูลหลังจากบันทึก
            this.editInfomation = false; // ปิดโหมดแก้ไข
            this.originalShippingAddress = { ...this.shippingAddress }; // เก็บข้อมูลล่าสุด
            this.showForm = false; // ปิดการแสดงฟอร์มกรอกข้อมูล
          },
          (error) => {
            console.error('Error updating shippingAddress information:', error);
          }
        );
    }
  }

  // saveChanges() {
  //   if (this.shippingAddress) {
  //     this.detailComplete = true; // แสดงข้อมูลหลังจากบันทึก
  //     this.editInfomation = false; // ปิดโหมดแก้ไข
  //     this.originalShippingAddress = { ...this.shippingAddress }; // เก็บข้อมูลล่าสุด
  //     this.showForm = false; // ปิดการแสดงฟอร์มกรอกข้อมูล
  //     console.log('Updated Shipping Address:', this.shippingAddress);
  //   }
  // }
}
