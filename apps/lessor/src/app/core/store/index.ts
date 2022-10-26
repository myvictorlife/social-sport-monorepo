import { ActionReducerMap } from '@ngrx/store';

import { MetaReducer } from '@ngrx/store';
import { environment } from '@lessor-environment';
import * as fromLogin from './login/login.reducer';

export interface State {
  tokenResponse: fromLogin.State;
}

export const reducers: ActionReducerMap<State> = {
  tokenResponse: fromLogin.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
