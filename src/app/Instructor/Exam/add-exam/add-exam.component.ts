import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css'],
})
export class AddExamComponent {
  title!: any;
  start_date!: any;
  end_date!: any;
  exam_score!: any;
  course!: any;
  instructor!: any;
  AllCourses!: any; //All Coourses That presented
  constructor(
    private __HttpClient: HttpClient,
    private __Router: Router,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authInstructor();
    this.__HttpClient
      .get('http://localhost:80/api/levels/courses/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        this.AllCourses = data.results;
        // console.log(data);
      });
  }
  addExam() {
    this.__HttpClient
      .post(
        'http://localhost:80/api/exams/',
        {
          title: this.title,
          instructor: localStorage.getItem('userId'),
          start_date: this.start_date,
          end_date: this.end_date,
          exam_score: this.exam_score,
          course: this.course,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        // console.log(data);
        this.__Router.navigateByUrl('/Exams');
      });
  }
}
