import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css'],
})
export class UpdateAdminComponent {
  id!: any;
  username!: any;
  email!: any;
  phone!: any;
  address!: any;
  city!: any;
  AdminData!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute,
    private __ServiceAuthService: ServiceAuthService,
    private __Router: Router
  ) {
    this.__ServiceAuthService.authAdmin();
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`http://localhost:80/api/accounts/admins/${this.id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        console.log(data);
        this.AdminData = data;
      });
  }
  updateAdmin() {
    this.__HttpClient
      .put(
        `http://localhost:80/api/accounts/admins/${this.id}`,
        {
          username: this.username,
          phone: this.phone,
          email: this.email,
          address: this.address,
          city: this.city,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        console.log(data);
        this.__Router.navigateByUrl('/Admin_Profile');
      });
  }
}
