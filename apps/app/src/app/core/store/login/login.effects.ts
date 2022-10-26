
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';


import * as fromLogin from './login.actions';

@Injectable()
export class LoginEffects {

    // doLogin$ = createEffect(() => this.actions$
    //     .pipe(
    //         ofType(fromLogin.doLogin),
    //         switchMap((value) => this.loginService.doLogin(value.loginRequest)
    //             .pipe(
    //                 map(loginResponse => fromLogin.loggedSuccessfully({ loginResponse })),
    //                 catchError(() => EMPTY)))
    //     ));
    constructor(private actions$: Actions) { }
}
