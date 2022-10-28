
import { createReducer, on } from '@ngrx/store';
import { Court } from 'entity-lib';
import * as fromCourts from './courts.actions';

export interface State {
    loading: boolean;
    courts: Court[];
    error: any | null;
}

export const initialState: State = {
    loading: false,
    courts: [],
    error: null
}

export const reducer = createReducer(
  initialState,
  on(fromCourts.addOrUpdateCourts, (state, { courts }) => ({ ...state, courts })),
  on(fromCourts.fetchCourtsFailed, (state, { error }) => ({ ...state, error, courts: [], loading: false })),
);
