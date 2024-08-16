import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css'],
})
export class ListAllComponent {
  id!: any;
  AllAdmins!: any[];
  count!: any;
  constructor(private __HttpClient: HttpClient, private __Router: Router) {
  
    this.__HttpClient
      .get('http://localhost:80/api/accounts/admins/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        console.log(data);
        this.count = data.count;
        this.AllAdmins = data.results;
      });
  }
  deleteAdmin(id: any) {
    this.__HttpClient
      .delete(`http://localhost:80/api/accounts/admins/${id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        // console.log(data);
        window.location.reload();
      });
  }
}
