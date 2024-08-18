import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-show-choice',
  templateUrl: './show-choice.component.html',
  styleUrls: ['./show-choice.component.css'],
})
export class ShowChoiceComponent {
  id!: any;
  ChoiceData!: any;
  constructor(
    private __HttpClient: HttpClient,
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
        console.log(data);
        this.ChoiceData = data;
      });
  }
}
