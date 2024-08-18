import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServiceAuthService {
  constructor(private __Router: Router) {}
  authAdmin() {
    if (localStorage.getItem('UserType') == 'admin') {
    } else {
      this.__Router.navigateByUrl('/Login');
    }
  }
  authInstructor() {
    if (localStorage.getItem('UserType') == 'instructor') {
    } else {
      this.__Router.navigateByUrl('/Login');
    }
  }
}
