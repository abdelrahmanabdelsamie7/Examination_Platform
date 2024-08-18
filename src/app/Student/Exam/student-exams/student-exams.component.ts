import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-exams',
  templateUrl: './student-exams.component.html',
  styleUrls: ['./student-exams.component.css'],
})
export class StudentExamsComponent {
  AllExams!: any;
  constructor(private __HttpClient: HttpClient, private __Router: Router) {
    this.__HttpClient
      .get('http://localhost:80/api/exams/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        console.log(data);
        this.AllExams = data.results
      });
  }
}
