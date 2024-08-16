import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
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
  department!: any;
  level!: any;
  courses!: any[];

  Levels!: any;
  Departments!: any;
  Courses!: any;
  constructor(private __HttpClient: HttpClient, private __Router: Router) {
    // Get Levels
    this.__HttpClient
      .get('http://localhost:80/api/levels', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        this.Levels = data.results;
      });
    // Get Departments
    this.__HttpClient
      .get('http://localhost:80/api/levels/departments', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        this.Departments = data.results;
      });
    // Get Courses
    this.__HttpClient
      .get('http://localhost:80/api/levels/courses', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        this.Courses = data.results;
      });
  }
  addStudent() {
    this.__HttpClient
      .post(
        'http://localhost:80/api/accounts/students/',
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
          department: this.department,
          level: this.level,
          user_type: 3,
          courses: this.courses,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        console.log(data);
        this.__Router.navigateByUrl('/Students');
      });
  }
}
