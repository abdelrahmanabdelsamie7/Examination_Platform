import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-update-choice',
  templateUrl: './update-choice.component.html',
  styleUrls: ['./update-choice.component.css'],
})
export class UpdateChoiceComponent {
  id!: any;
  question!: any;
  text!: any;
  is_correct!: any;
  AllQuestions!: any;
  ChoiceData!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __Router: Router,
    private __ActivatedRoute: ActivatedRoute,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authInstructor();
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`http://localhost:80/api/exams/choices/${this.id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.ChoiceData = data;
      });
    this.__HttpClient
      .get('http://localhost:80/api/exams/questions', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.AllQuestions = data.results;
      });
  }
  updateChoice() {
    this.__HttpClient
      .put(
        `http://localhost:80/api/exams/choices/${this.id}`,
        {
          question: this.question,
          text: this.text,
          is_correct: this.is_correct,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        this.__Router.navigateByUrl('/Choices');
      });
  }
}
