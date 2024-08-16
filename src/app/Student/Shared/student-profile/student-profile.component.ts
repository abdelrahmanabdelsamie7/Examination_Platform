import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
})
export class StudentProfileComponent {
  studentData!: any;
  constructor(private __HttpClient: HttpClient) {
    this.__HttpClient
      .get(
        `http://localhost:80/api/accounts/${localStorage.getItem(
          'UserType'
        )}s/${localStorage.getItem('userId')}`,
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        console.log(data);
        this.studentData = data;
      });
  }
}
