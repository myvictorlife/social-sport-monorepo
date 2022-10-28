import { createAction, props } from '@ngrx/store';
import { Court } from 'entity-lib';


export const fetchCourts = createAction(
    '[COURTS] Get Courts'
);

export const addOrUpdateCourts = createAction(
    '[COURTS] Set Courts',
    props<{ courts: Court[] }>()
);

export const fetchCourtsFailed = createAction(
    '[COURTS] Fetch Courts Failed',
    props<{ error: any }>()
);

