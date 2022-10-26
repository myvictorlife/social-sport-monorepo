import * as fromLogin from './login.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCitiesState =
  createFeatureSelector<fromLogin.State>('tokenResponse');

export const isLoggedin = createSelector(
  selectCitiesState,
  (state) => state.loginResponse
);


export const getUsername = createSelector(
  isLoggedin,
  (state) => state?.username
);
