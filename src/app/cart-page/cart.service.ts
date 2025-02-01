import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl = 'http://localhost:3000/cart'; // URL ของ backend

  constructor(private http: HttpClient) {}

  addToCart(
    userId: string,
    data: { productId: string; name: string; quantity: number; price: number }
  ): Observable<any> {
    return this.http.post(`${this.baseUrl}/${userId}`, data);
  }

  getCart(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

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
