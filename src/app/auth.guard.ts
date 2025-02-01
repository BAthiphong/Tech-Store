import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/users.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const userService = inject(UserService)
  
  const localData = localStorage.getItem("token")
  if(localData != null){
    return true;
  }
  else {
    router.navigateByUrl("login");
    return false;
  }
};
