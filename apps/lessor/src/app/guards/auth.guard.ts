import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { isLoggedIn } from '../core/store/login/login.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLoggedIn$ = this.store.select(isLoggedIn);
  constructor(private router: Router, private store: Store) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
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
