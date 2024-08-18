import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  title!: any;
  description!: any;
  duration!: any;
  course_code!: any;
  level!: any;
  instructor!: any;

  Instructors!: any;
  Departments!: any;
  Levels!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __Router: Router,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authAdmin();
    // Start Get Departments
    this.__HttpClient
      .get('http://localhost:80/api/levels/departments/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        this.Departments = data.results;
      });
    // End Get Departments

    // Start Get Levels
    this.__HttpClient
      .get('http://localhost:80/api/levels/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        this.Levels = data.results;
      });
    // End Get Levels

    // Start Get Instructors
    this.__HttpClient
      .get('http://localhost:80/api/accounts/instructors/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        this.Instructors = data.results;
      });
    // End Get Instructors
  }
  addCourse() {
    this.__HttpClient
      .post(
        'http://localhost:80/api/levels/courses/',
        {
          course_code: this.course_code,
          title: this.title,
          description: this.description,
          duration: this.duration,
          level: this.level,
          instructor: this.instructor,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        // console.log(data);
        this.__Router.navigateByUrl('/Courses');
      });
  }
}
