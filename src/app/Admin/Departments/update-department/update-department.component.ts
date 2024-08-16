import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css'],
})
export class UpdateDepartmentComponent {
  id!: any;
  title!: any;
  DepartmentTitle!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute,
    private __Router: Router
  ) {
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`http://localhost:80/api/levels/departments/${this.id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        this.DepartmentTitle = data.title;
      });
  }
  updateDepartment() {
    this.__HttpClient
      .put(
        `http://localhost:80/api/levels/departments/${this.id}`,
        {
          title: this.title,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        console.log(data);
        this.__Router.navigateByUrl('/Departments');
      });
  }
}
