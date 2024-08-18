import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css'],
})
export class AddInstructorComponent {
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
  specialized_in!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __Router: Router,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authAdmin();
  }
  addInstructor() {
    this.__HttpClient
      .post(
        'http://localhost:80/api/accounts/instructors/',
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
          user_type: 2,
          specialized_in: this.specialized_in,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        // console.log(data);
        this.__Router.navigateByUrl('/Instructors');
      });
  }
}
