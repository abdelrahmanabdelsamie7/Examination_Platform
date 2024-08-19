import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-results-of-students',
  templateUrl: './list-results-of-students.component.html',
  styleUrls: ['./list-results-of-students.component.css'],
})
export class ListResultsOfStudentsComponent {
  AllResults!: any;
  constructor(private __HttpClient: HttpClient) {
    this.__HttpClient
      .get(`http://localhost:80/api/exams/results/`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        console.log(data);
        this.AllResults = data.results;
      });
  }
  getResult(exam_id: any, exam_score: any) {
    this.__HttpClient
      .post(
        `http://localhost:80/api/exams/results/`,
        {
          student: localStorage.getItem('userId'),
          exam: exam_id,
          score: exam_score,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        console.log(data);
        this.AllResults = data.results;
      });
  }
  deleteResult(id: any) {
    this.__HttpClient
      .delete(`http://localhost:80/api/exams/results/${id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        setTimeout(() => {
          window.location.reload();
        }, 250);
      });
  }
}
