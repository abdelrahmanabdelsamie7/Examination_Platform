import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-courses-of-student',
  templateUrl: './show-courses-of-student.component.html',
  styleUrls: ['./show-courses-of-student.component.css'],
})
export class ShowCoursesOfStudentComponent {
  id!: any;
  CourseStudentData!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute
  ) {
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`http://localhost:80/api/levels/enrollments/${this.id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        console.log(data);
        this.CourseStudentData = data ; 
      });
  }
}
