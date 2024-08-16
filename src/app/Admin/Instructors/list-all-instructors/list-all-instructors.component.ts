import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-all-instructors',
  templateUrl: './list-all-instructors.component.html',
  styleUrls: ['./list-all-instructors.component.css'],
})
export class ListAllInstructorsComponent {
  count!: any;
  AllInstructors!: any[];
  constructor(private __HttpClient: HttpClient) {
    this.__HttpClient
      .get('http://localhost:80/api/accounts/instructors/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        console.log(data);
        this.count = data.count;
        this.AllInstructors = data.results;
      });
  }
  deleteInstructor(id: any) {
    this.__HttpClient
      .delete(`http://localhost:80/api/accounts/instructors/${id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      });
  }
}
