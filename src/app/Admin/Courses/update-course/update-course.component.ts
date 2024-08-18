import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent {
  id!: any;
  title!: any;
  description!: any;
  duration!: any;
  course_code!: any;
  level!: any;
  instructor!: any;
  CourseDataTitle!: any;
  CourseDataDescription!: any;
  CourseDataDuration!: any;
  CourseDataCourse_code!: any;
  CourseDataLevel!: any;
  CourseDataInstructor!: any;
  Instructors!: any;
  Departments!: any;
  Levels!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute,
    private __Router: Router,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authAdmin();
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`http://localhost:80/api/levels/courses/${this.id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.CourseDataTitle = data.title;
        this.CourseDataDescription = data.description;
        this.CourseDataCourse_code = data.course_code;
        this.CourseDataInstructor = data.instructor.username;
        this.CourseDataLevel = data.level;
        this.CourseDataDuration = data.duration;
      });
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
  updateCourse() {
    this.__HttpClient
      .put(
        `http://localhost:80/api/levels/courses/${this.id}`,
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
