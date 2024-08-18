import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent {
  username!: string;
  email!: string;
  password!: string;
  first_name!: string;
  second_name!: string;
  third_name!: string;
  fourth_name!: string;
  last_name!: string;
  gender!: string;
  birth_date!: string;
  city!: string;
  address!: string;
  phone!: string;
  constructor(
    private __HttpClient: HttpClient,
    private __Router: Router,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authAdmin();
  }
  addAdmin() {
    this.__HttpClient
      .post(
        'http://localhost:80/api/accounts/admins/',
        {
          username: this.username,
          email: this.email,
          password: this.password,
          first_name: this.first_name,
          second_name: this.second_name,
          third_name: this.third_name,
          fourth_name: this.fourth_name,
          last_name: this.last_name,
          gender: this.gender,
          birth_date: this.birth_date,
          city: this.city,
          address: this.address,
          phone: this.phone,
          user_type: 1,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        // console.log(data);
        this.__Router.navigateByUrl('/Admins');
      });
  }
}
