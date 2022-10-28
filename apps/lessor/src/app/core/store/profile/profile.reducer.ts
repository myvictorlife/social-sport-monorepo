
import { createReducer, on } from '@ngrx/store';
import { LessorUser } from 'entity-lib';
import * as fromProfile from './profile.actions';

export interface State {
    loading: boolean;
    user: LessorUser | null;
    error: any | null;
}

export const initialState: State = {
    loading: false,
    user: null,
    error: null
};

export const reducer = createReducer(
  initialState,
  on(fromProfile.addOrUpdateProfile, (state, { lessorUser }) => ({ ...state, user: lessorUser })),
  on(fromProfile.fetchProfileFailed, (state, { error }) => ({ ...state, error })),
);
