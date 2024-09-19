import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.get('No-Auth') === 'True') {
      return next.handle(req.clone());
    }

    const token = localStorage.getItem('userToken');

    if (token) {
      const clonedreq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });

      return next.handle(clonedreq).pipe(
        tap(
          () => {},
          (err) => {
            if (err.status === 401 || err.status === 403) {
              localStorage.removeItem('userToken');
              localStorage.removeItem('userRoles');
              this.router.navigate(['/login']);
            }
          }
        )
      );
    } else {
      this.router.navigate(['/login']);
      return next.handle(req); // Ensure to return an observable
    }
  }
}
