import * as fromProfile from './profile.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LessorUser } from 'entity-lib';

export const selectProfileState =
    createFeatureSelector<fromProfile.State>('profile');

export const selectProfile = createSelector(
    selectProfileState,
    (state): LessorUser | null => state?.user
);
