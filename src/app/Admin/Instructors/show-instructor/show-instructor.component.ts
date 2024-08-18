import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-show-instructor',
  templateUrl: './show-instructor.component.html',
  styleUrls: ['./show-instructor.component.css'],
})
export class ShowInstructorComponent {
  id: any;
  Instructor!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authAdmin();
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`http://localhost:80/api/accounts/instructors/${this.id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.Instructor = data;
      });
  }
}
