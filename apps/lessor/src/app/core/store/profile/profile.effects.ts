
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
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
                    catchError((error) => of(fromProfileActions.fetchProfileFailed({ error })))))
        ));
    constructor(private actions$: Actions, private profileService: ProfileService) { }
}
