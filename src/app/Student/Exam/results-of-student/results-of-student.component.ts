import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-results-of-student',
  templateUrl: './results-of-student.component.html',
  styleUrls: ['./results-of-student.component.css'],
})
export class ResultsOfStudentComponent {
  AllResults!: any;
  constructor(private __HttpClient: HttpClient) {
    this.__HttpClient
      .get('http://localhost:80/api/exams/results/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        console.log(data);
        this.AllResults = data.results;
      });
  }
}
