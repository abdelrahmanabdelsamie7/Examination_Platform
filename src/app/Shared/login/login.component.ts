import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  token!: string;
  username!: string;
  password!: string;
  constructor(private __HttpClient: HttpClient, private __Router: Router) {}
  LogIn() {
    this.__HttpClient
      .post('http://localhost:80/api/auth/token/', {
        username: this.username,
        password: this.password,
      })
      .subscribe((data: any) => {
        this.token = data.access;
        this.hangleToken(this.token);
      });
  }
  hangleToken(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    const userId = JSON.parse(jsonPayload).user_id;
    const userRole = JSON.parse(jsonPayload).user_role;
    localStorage.setItem('UserType', userRole);
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', token);
    if (userRole == 'admin') {
      this.__Router.navigateByUrl('/Admin_Page');
    } else if (userRole == 'student') {
      this.__Router.navigateByUrl('/Student_Page');
    }
  }
}
