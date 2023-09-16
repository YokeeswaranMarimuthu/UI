import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (localStorage.getItem("accessToken")) {
    return true;
  } else {
    router.navigate(['LogIn']);
    return false
  }
};