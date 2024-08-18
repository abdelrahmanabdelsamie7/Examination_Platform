import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-list-choices',
  templateUrl: './list-choices.component.html',
  styleUrls: ['./list-choices.component.css'],
})
export class ListChoicesComponent {
  AllChoices!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authInstructor();
    this.__HttpClient
      .get('http://localhost:80/api/exams/choices/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        console.log(data);
        this.AllChoices = data.results;
      });
  }
  deleteChoice(id: any) {
    this.__HttpClient
      .delete(`http://localhost:80/api/exams/choices/${id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        setTimeout(() => {
          window.location.reload();
        }, 250);
      });
  }
}
