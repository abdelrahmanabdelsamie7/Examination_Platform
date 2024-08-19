import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css'],
})
export class ExamPageComponent {
  id!: any;
  title!: any;
  date!: any;
  ExamInfo!: any;
  ExamData!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authStudent();
    this.date = new Date();
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.title = this.__ActivatedRoute.snapshot.params?.['exam_title'];
    this.__HttpClient
      .get(
        `http://localhost:80/api/exams/questions/?exam_id=${this.id}&exam_title=${this.title}`,
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        // console.log(data.results);
        this.ExamData = data.results;
        this.ExamData.forEach((element: any) => {
          // console.log(element);
        });
      });
    this.__HttpClient
      .get(`http://localhost:80/api/exams/${this.id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        this.ExamInfo = data;
        console.log(this.ExamInfo);
      });
  }
  answer(ExamId: any, QuestionId: any, ChoiceId: any) {
    this.__HttpClient
      .post(
        `http://localhost:80/api/exams/answers/`,
        {
          student: localStorage.getItem('userId'),
          exam: ExamId,
          question: QuestionId,
          student_choice: ChoiceId,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {});
  }
}
