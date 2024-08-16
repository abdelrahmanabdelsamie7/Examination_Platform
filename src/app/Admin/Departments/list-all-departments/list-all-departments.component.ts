import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-all-departments',
  templateUrl: './list-all-departments.component.html',
  styleUrls: ['./list-all-departments.component.css'],
})
export class ListAllDepartmentsComponent {
  AllDepartments!: any;
  constructor(private __HttpClient: HttpClient, private __Router: Router) {

    this.__HttpClient
      .get('http://localhost:80/api/levels/departments/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.AllDepartments = data.results;
      });
  }
  deleteDepartment(id: any) {
    this.__HttpClient
      .delete(`http://localhost:80/api/levels/departments/${id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        setTimeout(() => {
          window.location.reload();
        }, 250);
      });
  }
}
