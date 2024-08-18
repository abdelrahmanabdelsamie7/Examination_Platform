import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-add-choice',
  templateUrl: './add-choice.component.html',
  styleUrls: ['./add-choice.component.css'],
})
export class AddChoiceComponent {
  question!: any;
  text!: any;
  is_correct!: any;
  AllQuestions!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __Router: Router,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authInstructor() ; 
    this.__HttpClient
      .get('http://localhost:80/api/exams/questions', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        console.log(data);
        this.AllQuestions = data.results;
      });
  }
  addChoice() {
    this.__HttpClient
      .post(
        'http://localhost:80/api/exams/choices/',
        {
          question: this.question,
          text: this.text,
          is_correct: JSON.parse(this.is_correct),
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
