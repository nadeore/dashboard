import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser: any;
  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  isLoggedIn(): boolean {
    try {
      const User: any = JSON.parse(localStorage.getItem('User'));
      if (User) {
        this.currentUser = User.user;
      }
    } catch (e) {
      return false;
    }
    return !!this.currentUser;
  }
  loginUser(user) {
    return this.http.post<any>(`${(this.apiUrl)}/api/loginAuth`, user)
      .pipe(
        map(result => {
          localStorage.setItem('user', JSON.stringify(result.user));
          return result;
        })
      );
  }
}
