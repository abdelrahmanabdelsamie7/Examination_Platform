import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css'],
})
export class UpdateExamComponent {
  id!: any;
  ExamData!: any;
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
    private __ActivatedRoute: ActivatedRoute,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authInstructor();
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`http://localhost:80/api/exams/${this.id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.ExamData = data;
      });

    this.__HttpClient
      .get('http://localhost:80/api/levels/courses/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        this.AllCourses = data.results;
        // console.log(data);
      });
  }
  updateExam() {
    this.__HttpClient
      .put(
        `http://localhost:80/api/exams/${this.id}`,
        {
          title: this.title,
          instructor: localStorage.getItem('userId'),
          start_date: this.start_date,
          end_date: this.end_date,
          course: this.course,
          exam_score: this.exam_score,
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
