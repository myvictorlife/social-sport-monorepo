import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { isLoggedIn } from '../core/store/login/login.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLoggedIn$ = this.store.select(isLoggedIn);
  constructor(private router: Router, private store: Store) { }

  canActivate(): boolean | Observable<boolean> {
    return localStorage.getItem('token') ? true :
      this.isLoggedIn$.pipe(
        tap((isLogged) => {
          if (!isLogged) {
            this.router.navigateByUrl('/auth');
          }
        })
      );
  }

}
