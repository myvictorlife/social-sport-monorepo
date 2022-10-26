import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { isLoggedIn } from '../core/store/login/login.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  isLoggedIn$ = this.store.select(isLoggedIn);
  constructor(private router: Router, private store: Store) { }

}
