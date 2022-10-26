import * as fromLogin from './login.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectLoginState =
  createFeatureSelector<fromLogin.State>('tokenResponse');

export const getLoginResponse = createSelector(
  selectLoginState,
  (state) => state.loginResponse
);


export const getUsername = createSelector(
  getLoginResponse,
  (state) => state?.username
);

export const isLoggedIn = createSelector(
  getLoginResponse,
  (state): boolean => !!state?.username
);
