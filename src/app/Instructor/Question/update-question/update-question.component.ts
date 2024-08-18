import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css'],
})
export class UpdateQuestionComponent {
  id!: any;
  exam!: any;
  text!: any;
  AllExams!: any;
  QuestionData!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __Router: Router,
    private __ActivatedRoute: ActivatedRoute,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authInstructor();
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`http://localhost:80/api/exams/questions/${this.id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.QuestionData = data;
      });
    this.__HttpClient
      .get('http://localhost:80/api/exams/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.AllExams = data.results;
      });
  }
  updateQuestion() {
    this.__HttpClient
      .put(
        `http://localhost:80/api/exams/questions/${this.id}`,
        {
          exam: this.exam,
          text: this.text,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        this.__Router.navigateByUrl('/Questions');
      });
  }
}
