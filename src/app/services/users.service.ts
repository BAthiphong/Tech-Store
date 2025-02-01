import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserData() {
    // const userData = localStorage.getItem('user');
    // return userData ? JSON.parse(userData) : null;
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }
}
