import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-list-all-students',
  templateUrl: './list-all-students.component.html',
  styleUrls: ['./list-all-students.component.css'],
})
export class ListAllStudentsComponent {
  AllStudents!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authAdmin();
    this.__HttpClient
      .get('http://localhost:80/api/accounts/students/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.AllStudents = data.results;
      });
  }
  deleteStudent(id: any) {
    this.__HttpClient
      .delete(`http://localhost:80/api/accounts/students/${id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        setTimeout(() => {
          window.location.reload();
        }, 250);
      });
  }
}
