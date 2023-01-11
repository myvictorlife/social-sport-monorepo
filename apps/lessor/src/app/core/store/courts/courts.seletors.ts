import * as fromCourts from './courts.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Court } from 'entity-lib';

export const selectCourtState =
    createFeatureSelector<fromCourts.State>('courts');

export const selectCourts = createSelector(
    selectCourtState,
    (state): Court[] => state?.courts ?? []
);

export const selectCourtSelected = createSelector(
    selectCourtState,
    (state) => state.courtSelected
  );
