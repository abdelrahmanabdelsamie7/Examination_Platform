import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-update-courses-of-student',
  templateUrl: './update-courses-of-student.component.html',
  styleUrls: ['./update-courses-of-student.component.css'],
})
export class UpdateCoursesOfStudentComponent {
  id!: any;
  student!: any;
  course!: any;
  status!: any;
  newStatus!: any;
  AllStudents!: any;
  AllCourses!: any;
  CourseOfStudentData!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __Router: Router,
    private __ActivatedRoute: ActivatedRoute,
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
    // Get Data Course Of Student
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`http://localhost:80/api/levels/enrollments/${this.id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.CourseOfStudentData = data;
      });
  }
  updateCourseOfStudent() {
    this.__HttpClient
      .put(
        `http://localhost:80/api/levels/enrollments/${this.id}`,
        {
          student: this.student,
          course: this.course,
          pass_status: JSON.parse(this.status),
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
