import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/service-auth.service';

@Component({
  selector: 'app-list-all-levels',
  templateUrl: './list-all-levels.component.html',
  styleUrls: ['./list-all-levels.component.css'],
})
export class ListAllLevelsComponent {
  AllLevels!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __Router: Router,
    private __ServiceAuthService: ServiceAuthService
  ) {
    this.__ServiceAuthService.authAdmin();
    this.__HttpClient
      .get('http://localhost:80/api/levels/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        this.AllLevels = data.results;
      });
  }
  deleteLevel(id: any) {
    this.__HttpClient
      .delete(`http://localhost:80/api/levels/${id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        setTimeout(() => {
          window.location.reload();
        }, 250);
      });
  }
}
