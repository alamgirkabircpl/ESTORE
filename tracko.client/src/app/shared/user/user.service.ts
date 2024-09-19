import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user.moodel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly rootUrl = 'https://localhost:44329';
  constructor(private http: HttpClient) {}
  registerUser(user: User) {
    const body = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    console.log({ body, headers });
    return this.http.post<any>(
      'https://localhost:44329/api/ApplicationUser/CreateApplicationUser',
      body,
      {
        headers,
      }
    );
  }
  userAuthentication(email: any, password: any) {
    var data =
      'email=' + email + '&password=' + password + '&grant_type=password';
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/x-www-urlencoded',
      'No-Auth': 'True',
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(
      'https://localhost:44329/api/ApplicationUser/authenticate',
      data,
      {
        headers,
      }
    );
  }

  roleMatch(): boolean {
    var isMatch = false;
    var role = localStorage.getItem('userRoles');

    if (role == 'admin') {
      isMatch = true;
      return false;
    }

    return isMatch;
  }
}
