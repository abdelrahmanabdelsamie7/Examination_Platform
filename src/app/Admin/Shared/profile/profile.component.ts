import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userId = Number(localStorage.getItem('userId'));
  token = localStorage.getItem('token');
  userType = localStorage.getItem('UserType');
  username!: string;
  email!: string;
  AdminData!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authAdmin();
    this.__HttpClient
      .get(
        `http://localhost:80/api/accounts/${this.userType}s/${this.userId}/`,
        {
          headers: { Authorization: 'Bearer ' + this.token },
        }
      )
      .subscribe((data: any) => {
        this.AdminData = data;
        this.username = data.username;
        this.email = data.email;
        localStorage.setItem('username', this.username);
        localStorage.setItem('email', this.email);
      });
  }
}
