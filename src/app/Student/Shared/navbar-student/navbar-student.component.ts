import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-navbar-student',
  templateUrl: './navbar-student.component.html',
  styleUrls: ['./navbar-student.component.css'],
})
export class NavbarStudentComponent {
  studentData!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __Router: Router,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authStudent();
    this.__HttpClient
      .get(
        `http://localhost:80/api/accounts/${localStorage.getItem(
          'UserType'
        )}s/${localStorage.getItem('userId')}`,
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        this.studentData = data;
      });
  }
  logOut() {
    localStorage.clear();
    this.__Router.navigateByUrl('/Login');
  }
}
