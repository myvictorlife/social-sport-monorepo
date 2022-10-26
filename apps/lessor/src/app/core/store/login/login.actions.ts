import { createAction, props } from '@ngrx/store';
import { LoginRequest, LoginResponse } from 'entity-lib';

export const doLogin = createAction(
    '[LOGIN] Log Into',
    props<{ loginRequest: LoginRequest }>()
);

export const loggedSuccessfully = createAction(
    '[LOGIN] Logged Successfully',
    props<{ loginResponse: LoginResponse }>()
);

export const loggedFailed = createAction(
    '[LOGIN] Logged Failed',
    props<{ error: any }>()
);
