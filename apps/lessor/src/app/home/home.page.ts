import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromLogin from '../core/store/login/login.actions';
import { LoginResponse, LoginRequest } from 'entity-lib';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private store: Store) {
    const loginResponse = {
      id: '1', email: 'victor@gmail,com',
      accessToken: '21331', roles: [], tokenType: '', username: 'myvictorlife'} as LoginResponse;
    this.store.dispatch(fromLogin.loggedSuccessfully({ loginResponse }));
  }
}
