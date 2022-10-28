import { ActionReducerMap } from '@ngrx/store';

import { MetaReducer } from '@ngrx/store';
import { environment } from '@lessor-environment';
import * as fromLogin from './login/login.reducer';
import * as fromCourts from './courts/courts.reducer';
import * as fromProfile from './profile/profile.reducer';

export interface State {
  tokenResponse: fromLogin.State;
  courts: fromCourts.State;
  profile: fromProfile.State;
}

export const reducers: ActionReducerMap<State> = {
  tokenResponse: fromLogin.reducer,
  courts: fromCourts.reducer,
  profile: fromProfile.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
