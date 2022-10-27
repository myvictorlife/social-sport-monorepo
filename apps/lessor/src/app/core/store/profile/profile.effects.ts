
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { ProfileService } from '../../services/profile/profile.service';

import * as fromProfileActions from './profile.actions';

@Injectable()
export class ProfileEffects {

    loadProfile$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromProfileActions.fetchProfile),
            switchMap(() => this.profileService.fetch()
                .pipe(
                    map(lessorUser => fromProfileActions.addOrUpdateProfile({ lessorUser })),
                    catchError(() => EMPTY)))
        ));
    constructor(private actions$: Actions, private profileService: ProfileService) { }
}