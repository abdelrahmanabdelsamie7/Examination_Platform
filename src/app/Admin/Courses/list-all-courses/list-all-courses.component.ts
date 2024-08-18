import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-list-all-courses',
  templateUrl: './list-all-courses.component.html',
  styleUrls: ['./list-all-courses.component.css'],
})
export class ListAllCoursesComponent {
  AllCourses!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __Router: Router,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authAdmin();
    this.__HttpClient
      .get('http://localhost:80/api/levels/courses/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.AllCourses = data.results;
      });
  }
  deleteCourse(id: any) {
    this.__HttpClient
      .delete(`http://localhost:80/api/levels/courses/${id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        setTimeout(() => {
          window.location.reload();
        }, 250);
      });
  }
}
