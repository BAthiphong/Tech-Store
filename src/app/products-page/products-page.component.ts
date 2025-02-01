import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatSliderModule } from '@angular/material/slider';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatSliderModule,
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  numbers = Array(9)
    .fill(0)
    .map((x, i) => i);
  minPrice: number = 1000; // กำหนดราคาต่ำสุด
  maxPrice: number = 10000; // กำหนดราคาสูงสุด
  currentPrice: number = 1000; // ราคาที่เลือก
  tooltipPosition: number = 0; // ตำแหน่งของ tooltip
  productPrice: number = 5000; // ราคาเริ่มต้น

  products: any[] = [];
  paginatedProducts: any[] = []; // สำหรับเก็บสินค้าที่จะถูกแสดงในแต่ละหน้า
  pageSize: number = 12; // จำนวนสินค้าที่แสดงในแต่ละหน้า
  currentPage: number = 1; // หน้าที่กำลังแสดง
  totalPages: number = 1; // จำนวนหน้าทั้งหมด

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data; // ดึงข้อมูลสินค้าและเก็บไว้ในตัวแปร
      this.totalPages = Math.ceil(this.products.length / this.pageSize); // คำนวณจำนวนหน้าทั้งหมด
      this.updatePaginatedProducts();
    });
  }

  updatePaginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex); // ดึงสินค้าตามหน้า
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return; // ตรวจสอบว่า page อยู่ในช่วงที่ถูกต้อง
    this.currentPage = page;
    this.updatePaginatedProducts();
    
    // เลื่อนหน้าไปข้างบนสุดหลังจากเปลี่ยนหน้า
    window.scrollTo({ top: 0, behavior: 'smooth' }); // ใช้ scrollTo เพื่อเลื่อนหน้าไปที่ด้านบน
  }

  numbersToShow(): number[] {
    let startPage = Math.max(this.currentPage - 2, 1); // แสดงหน้าที่อยู่รอบๆ currentPage
    let endPage = Math.min(startPage + 4, this.totalPages); // ป้องกันไม่ให้แสดงหน้ามากเกินไป
  
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i); // สร้าง array ของตัวเลขหน้า
  }

  // Detail product
  productDetail(product: any) {
    if(product.type === 'CPU') {
      this.router.navigate(['/cpudetail', product._id]);
    }
    else if(product.type === 'Mainboard'){
      this.router.navigate(['/mainboarddetail', product._id]);
    }
    else if(product.type === 'GPU'){
      this.router.navigate(['/gpudetail', product._id]);
    }
    else if(product.type === 'Ram'){
      this.router.navigate(['/ramdetail', product._id]);
    }
    else if(product.type === 'Storage'){
      this.router.navigate(['/storagedetail', product._id]);
    }
    else if(product.type === 'Powersupply'){
      this.router.navigate(['/powersupplydetail', product._id]);
    }
    else if(product.type === 'Cooler'){
      this.router.navigate(['/coolerdetail', product._id]);
    }
    else if(product.type === 'Mouse'){
      this.router.navigate(['/mousedetail', product._id]);
    }
    else if(product.type === 'Keyboard'){
      this.router.navigate(['/keyboarddetail', product._id]);
    }
    else if(product.type === 'Monitor'){
      this.router.navigate(['/monitordetail', product._id]);
    }
    else if(product.type === 'Headphone'){
      this.router.navigate(['/headphonedetail', product._id]);
    }
    else if(product.type === 'Case'){
      this.router.navigate(['/casedetail', product._id]);
    }
    //this.router.navigate(['/productDetail', product._id]); // ส่ง ID ของสินค้าไปยังหน้าแก้ไข
  }

  // ฟังก์ชันเพื่ออัปเดตตำแหน่งของการ์ด (tooltip)
  updateCardPosition(event: Event): void {
    const input = event.target as HTMLInputElement;
    const sliderWidth = input.offsetWidth;
    const newPosition =
      (input.valueAsNumber - this.minPrice) / (this.maxPrice - this.minPrice);
    this.tooltipPosition = newPosition * sliderWidth;
  }
}
