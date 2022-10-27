import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginResponse } from 'entity-lib';
import { environment } from '@lessor-environment';
import * as fromLogin from '../core/store/login/login.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  url = environment.baseUrl + environment.paths.login;
  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
  }

  doLogin(loginResponse: LoginResponse) {
    if (!loginResponse?.error) {
      this.store.dispatch(fromLogin.loggedSuccessfully({ loginResponse }));
      localStorage.setItem('token', loginResponse.accessToken);
      this.router.navigate(['home']);
    } else {
      this.store.dispatch(fromLogin.loggedFailed({ error: loginResponse.error }));
    }
  }

}
