import * as fromCourts from './courts.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Court } from 'entity-lib';

export const selectCitiesState =
    createFeatureSelector<fromCourts.State>('courts');

export const selectCourts = createSelector(
    selectCitiesState,
    (state): Court[] => state?.courts ?? []
);