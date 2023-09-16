import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/LogIn']);
  }
}