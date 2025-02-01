import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductSlideComponent } from '../product-slide/product-slide.component';
import { ProductService } from '../services/product.service';
import { Product } from './headphone.models';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-headphone-detail-page',
  standalone: true,
  imports: [
    NavbarComponent,
    GalleriaModule,
    CommonModule,
    ProductSlideComponent,
    FooterComponent,
  ],
  templateUrl: './headphone-detail-page.component.html',
  styleUrl: './headphone-detail-page.component.css',
})
export class HeadphoneDetailPageComponent {
  images: any[] = [];
  responsiveOptions: any[];
  activeIndex: number = 0;
  isExpanded = false; // ใช้สำหรับควบคุมสถานะการแสดงข้อมูล

  productId: any;
  numOfProduct: number = 1;
  user: any;

  product: Product = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    images: [],
    type: '',
    details: {
      brands: '',
      warranty: '',
      dimension: '',

      color: '',
      connector: '',
      driverUnit: '',
      frequencyResponse: '',
      sensitivity: '',
      inputImpedance: '',
      micFrequencyResponse: '',
      micSensitivity: '',
      micImpedance: '',
      cordLenght: '',
    },
  };

  toggleContent(): void {
    this.isExpanded = !this.isExpanded; // สลับสถานะ
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }

  prev() {
    this.activeIndex =
      this.activeIndex === 0 ? this.images.length - 1 : this.activeIndex - 1;
  }

  next() {
    this.activeIndex =
      this.activeIndex === this.images.length - 1 ? 0 : this.activeIndex + 1;
  }

  ngOnInit() {
    this.getUserFromLocalStorage(); // ดึงข้อมูลผู้ใช้จาก localStorage
    console.log(this.user);

    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe(
        (data) => {
          if (data) {
            this.product = data; // รับข้อมูลสินค้าที่จะทำการแก้ไข
            this.images = this.product.images.map((img) => ({
              itemImageSrc: img, // Assuming each item is a URL to the image
              thumbnailImageSrc: img, // Use same URL or different if available
            }));
            // เลื่อนหน้าไปที่ด้านบนเมื่อโหลดหน้าเสร็จ
            this.viewportScroller.scrollToPosition([0, 0]);
            console.log('product detail: ', this.product.details);
            console.log('product img: ', this.product.images);
          } else {
            console.warn('Product not found or data is null');
          }
        },
        (error) => {
          console.error('Error fetching product data:', error);
        }
      );
    }
  }

  getUserFromLocalStorage(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.user = null;
    }
  }

  addToCart(): void {
    const userId = this.user._id; // ตรวจสอบ userId จาก localStorage
    if (!userId) {
      console.error('User ID not found. Please log in.');
      return;
    }

    if (!this.product.images || this.product.images.length === 0) {
      console.error('No product images available.');
      alert('ไม่สามารถเพิ่มสินค้าได้เนื่องจากไม่มีรูปภาพ');
      return;
    }

    const cartData = {
      productId: this.productId, // สมมติว่า `product._id` เป็น ID สินค้า
      images: this.product.images[0],
      name: this.product.name,
      quantity: this.numOfProduct,
      price: this.product.price,
    };

    this.cartService.addToCart(userId, cartData).subscribe(
      (response) => {
        console.log('Product added to cart successfully:', response);
        alert('สินค้าเพิ่มลงในตะกร้าสำเร็จ!');
      },
      (error) => {
        console.error('Error adding product to cart:', error);
        alert('เกิดข้อผิดพลาดในการเพิ่มสินค้า');
      }
    );
  }

  increaseQuantity(): void {
    if (this.numOfProduct < this.product.quantity) {
      this.numOfProduct++;
    }
  }

  decreaseQuantity(): void {
    if (this.numOfProduct > 1) {
      this.numOfProduct--;
    }
  }
}
