
import { createReducer, on } from '@ngrx/store';
import { LoginResponse } from 'entity-lib';
import * as fromLogin from './login.actions';

export interface State {
    loading: boolean;
    loginResponse: LoginResponse | null;
    error: any | null;
}

export const initialState: State = {
    loading: false,
    loginResponse: null,
    error: null
};

export const reducer = createReducer(
  initialState,
  on(fromLogin.loggedSuccessfully, (state, { loginResponse }) => ({ ...state, loginResponse, loading: false })),
  on(fromLogin.loggedFailed, (state, { error }) => ({ ...state, error, loading: false })),
);
