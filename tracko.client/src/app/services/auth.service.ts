import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  readonly rootUrl = 'https://localhost:44329'; // Replace with your API URL

  constructor(private http: HttpClient, private router: Router) {}

  OnSubmit(email: string, password: string) {
    this.getUser({ email, password }).subscribe(
      (data: any) => {
        let userData = data.data;
        console.log(userData.roles.length);
        if (userData.roles.length == 0) {
          // Change this condition as needed
          userData = {
            ...userData,
            roles: [...userData.roles, 'Abc'], // Spread existing roles and add "Abc"
          };
        }
        // Store JWT and roles in localStorage
        localStorage.setItem('userToken', userData.jwToken);
        localStorage.setItem('userRoles', JSON.stringify(userData.roles)); // Store as JSON string

        // Role-based redirection
        if (userData.roles.includes('Admin')) {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getUser(data: any): Observable<any> {
    const reqHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(
      `${this.rootUrl}/api/ApplicationUser/authenticate`,
      data,
      reqHeader
    );
  }

  // Additional helper method to check authentication status
  isAuthenticated(): boolean {
    const token = localStorage.getItem('userToken');
    return token != null; // Returns true if token exists, false otherwise
  }

  // Helper method to get user roles
  getUserRoles(): string[] {
    const roles = localStorage.getItem('userRoles');
    return roles ? JSON.parse(roles) : [];
  }

  // Sign out method
  signOut() {
    // Remove JWT token from localStorage or sessionStorage
    localStorage.removeItem('authToken');

    // Optionally, remove other session data
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRoles');

    // Navigate back to login
    this.router.navigate(['/home']);
  }
}
