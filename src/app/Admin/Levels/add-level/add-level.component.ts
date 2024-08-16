import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.css'],
})
export class AddLevelComponent {
  level_number!: any;
  constructor(private __HttpClient: HttpClient, private __Router: Router) {}
  addLevel() {
    this.__HttpClient
      .post(
        'http://localhost:80/api/levels/',
        {
          level_number: this.level_number,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        console.log(data);
        this.__Router.navigateByUrl('/Levels');
      });
  }
}
