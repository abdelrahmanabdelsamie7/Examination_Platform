import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css'],
})
export class ShowDepartmentComponent {
  id!: any;
  DepartmentTitle!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authAdmin();
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`http://localhost:80/api/levels/departments/${this.id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.DepartmentTitle = data.title;
      });
  }
}
