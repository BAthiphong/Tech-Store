import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl = 'http://localhost:3000/cart'; // เปลี่ยน URL ให้ตรงกับ Backend

  constructor(private http: HttpClient) {}

  getCart(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  addToCart(
    userId: string,
    data: {
      productId: string;
      images: string;
      name: string;
      quantity: number;
      price: number;
    }
  ): Observable<any> {
    return this.http.post(`${this.baseUrl}/${userId}`, data);
  }

  // addToCart(userId: string, productId: string, quantity: number): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/${userId}`, { productId, quantity });
  // }

  updateCartItem(
    userId: string,
    productId: string,
    quantity: number
  ): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${userId}/${productId}`, {
      quantity,
    });
  }

  removeCartItem(userId: string, productId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${userId}/${productId}`);
  }

  checkout(userId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/checkout/${userId}`, {});
  }
}
