
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CourtService } from '../../services/court/court.service';

import * as fromCourts from './courts.actions';

@Injectable()
export class CourtsEffects {

    loadCourts$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromCourts.fetchCourts),
            switchMap(() => this.courtService.fetchAll()
                .pipe(
                    map(courts => fromCourts.addOrUpdateCourts({ courts })),
                    catchError((error) => of(fromCourts.fetchCourtsFailed({ error })))))
        ));
    constructor(private actions$: Actions, private courtService: CourtService) { }
}