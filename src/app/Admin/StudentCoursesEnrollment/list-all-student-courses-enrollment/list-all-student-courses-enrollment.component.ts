import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-all-student-courses-enrollment',
  templateUrl: './list-all-student-courses-enrollment.component.html',
  styleUrls: ['./list-all-student-courses-enrollment.component.css'],
})
export class ListAllStudentCoursesEnrollmentComponent {
  AllStudentCoursesEnrollment!: any;
  constructor(private __HttpClient: HttpClient) {
    this.__HttpClient
      .get('http://localhost:80/api/levels/enrollments/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.AllStudentCoursesEnrollment = data.results;
      });
  }
  deleteCourseFromStudent(id: any) {
    this.__HttpClient
      .delete(`http://localhost:80/api/levels/enrollments/${id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        setTimeout(() => {
          window.location.reload();
        }, 250);
      });
  }
}
