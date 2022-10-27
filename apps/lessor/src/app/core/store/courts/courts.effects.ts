
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
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
                    catchError(() => EMPTY)))
        ));
    constructor(private actions$: Actions, private courtService: CourtService) { }
}