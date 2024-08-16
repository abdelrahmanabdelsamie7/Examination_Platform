import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent {
  title!: any;
  constructor(private __HttpClient: HttpClient, private __Router: Router) {
    
  }
  addDepartment() {
    this.__HttpClient
      .post(
        'http://localhost:80/api/levels/departments/',
        {
          title: this.title,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        // console.log(data);
        this.__Router.navigateByUrl('/Departments');
      });
  }
}