import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-add-courses-to-student',
  templateUrl: './add-courses-to-student.component.html',
  styleUrls: ['./add-courses-to-student.component.css'],
})
export class AddCoursesToStudentComponent {
  student!: any;
  course!: any;
  status!: any;
  AllStudents!: any;
  AllCourses!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __Router: Router,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authAdmin();
    // Get Student To Get Id
    this.__HttpClient
      .get('http://localhost:80/api/accounts/students/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        this.AllStudents = data.results;
      });
    // Get Courses To Get Id
    this.__HttpClient
      .get('http://localhost:80/api/levels/courses/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        this.AllCourses = data.results;
      });
  }
  addCourseToStudent() {
    this.__HttpClient
      .post(
        'http://localhost:80/api/levels/enrollments/',
        {
          student: this.student,
          course: this.course,
          status: this.status,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        // console.log(data);
        this.__Router.navigateByUrl('/Student_Courses_Enrollment');
      });
  }
}
