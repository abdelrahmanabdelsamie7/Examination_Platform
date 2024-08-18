import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-navbar-instructor',
  templateUrl: './navbar-instructor.component.html',
  styleUrls: ['./navbar-instructor.component.css'],
})
export class NavbarInstructorComponent {
  username!: any;
  email !:any ;
  InstructorData!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __Router: Router,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authInstructor();
    this.__HttpClient
      .get(
        `http://localhost:80/api/accounts/instructors/${localStorage.getItem(
          'userId'
        )}`,
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        // console.log(data);
        this.username = data.username;
        this.email = data.email;
        this.InstructorData = data;
      });
  }
  signOut() {
    localStorage.clear();
    this.__Router.navigateByUrl('Login');
  }
}
