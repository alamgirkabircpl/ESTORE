import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  isLoginError: boolean = false;
  readonly rootUrl = 'https://localhost:44329';

  constructor(
    private authService: AuthServiceService,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  OnSubmit(email: any, password: any) {
    this.authService.OnSubmit(email, password);
  }

  getUser(data: any) {
    var reqHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(
      this.rootUrl + '/api/ApplicationUser/authenticate',
      data,
      reqHeader
    );
  }
}
