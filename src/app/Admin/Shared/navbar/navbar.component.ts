import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  name = localStorage.getItem('username');
  email = localStorage.getItem('email');
  constructor(private __Router: Router) {}
  signOut() {
    localStorage.clear();
    this.__Router.navigateByUrl('/Login');
  }
}
