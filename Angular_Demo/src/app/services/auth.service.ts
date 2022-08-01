import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(private api : ApiService,private router: Router) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login(): Observable<any> {

      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Pratibha Gupta', email: 'admin@gmail.com' });
  }
}

