import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FooterComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  cartItem = true;
  user: any;

  cartItemss: any[] = [];

  totalAmount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUserFromLocalStorage();

    if (this.user && this.user._id) {
      this.cartService.getCart(this.user._id).subscribe(
        (data) => {
          this.cartItemss = data.items.map((item: any) => {
            return {
              ...item,
              totalPrice: item.price * item.quantity, // เพิ่มราคารวมต่อชิ้น
            };
          }); // เก็บข้อมูลรถเข็นใน cartItemss
          this.calculateTotal(); // เรียกคำนวณราคารวมเมื่อข้อมูลถูกโหลดแล้ว
          console.log('Cart items:', this.cartItemss);
        },
        (error) => {
          console.error('Error fetching cart data:', error);
        }
      );
    } else {
      console.error('User not found in local storage');
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

  calculateTotal() {
    this.totalAmount = this.cartItemss.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  updateQuantity(productId: string, newQuantity: number) {
    if (newQuantity < 0) {
      return; // ป้องกันไม่ให้จำนวนติดลบ
    }

    const product = this.cartItemss.find(
      (item) => item.productId === productId
    );
    if (product) {
      // อัปเดตใน frontend เพื่อแสดงผลทันที
      product.quantity = newQuantity;
      product.totalPrice = product.price * newQuantity;
      this.calculateTotal();

      // เรียก API เพื่ออัปเดต backend
      this.cartService
        .updateCartItem(this.user._id, productId, newQuantity)
        .subscribe(
          (response) => {
            console.log('Updated cart item successfully:', response);
          },
          (error) => {
            console.error('Error updating cart item:', error);
          }
        );
    }
  }

  removeItem(productId: string) {
    this.cartItemss = this.cartItemss.filter(
      (item) => item.productId !== productId
    );
    this.calculateTotal();

    // เรียก API เพื่ออัปเดต backend
    this.cartService.removeCartItem(this.user._id, productId).subscribe(
      (response) => {
        console.log('Removed item successfully:', response);
      },
      (error) => {
        console.error('Error removing cart item:', error);
      }
    );
  }

  checkout() {
    console.log('ดำเนินการชำระเงิน:', this.cartItemss);
  }
}
