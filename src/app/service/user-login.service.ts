import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/User';
@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8000/api/login';

  addUser(user: { email: string; password: string }) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    console.log(user);

    return this.http.post<User>(this.url, user, { headers: headers }).pipe();
  }
}
