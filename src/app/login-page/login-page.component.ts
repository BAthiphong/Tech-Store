import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  loginObj: any = {
    usernameOrEmail: '',
    password: '',
  };

  registerObj: any = {
    username: '',
    password: '',
    email: '',
  };

  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  // Login
  onLogin() {
    this.http.post('http://localhost:3000/auth/login', this.loginObj).subscribe(
      (res: any) => {
        if (res.result) {
          // Save the token to localStorage
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          // Navigate to the dashboard
          this.router.navigateByUrl('profile');
        } else {
          // Show alert if login fails
          alert('Check User Name or Password');
        }
      },
      () => {
        // Handle any HTTP errors
        alert('Check User Name or Password');
      }
    );
  }

  private apiUrl = 'http://localhost:3000/users/register';
  // register
  onRegister() {
    if (
      this.registerObj.username &&
      this.registerObj.password &&
      this.registerObj.email
    ) {
      this.http.post(this.apiUrl, this.registerObj).subscribe(
        (res: any) => {
          debugger;
          if (res) {
            alert('register successful');
            window.location.reload(); // รีเฟรชหน้าเว็บ
          } else {
            alert('User already exists');
          }
        },
        () => {
          // Handle any HTTP errors
          alert('User already exists');
        }
      );
    } else {
      this.errorMessage = 'All fields are required.';
      this.successMessage = null;
    }
  }

  @ViewChild('container', { static: true }) container!: ElementRef;

  toggleRegister(): void {
    this.container.nativeElement.classList.add('active');
  }

  toggleLogin(): void {
    this.container.nativeElement.classList.remove('active');
  }
}
