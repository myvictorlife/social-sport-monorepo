import { createAction, props } from "@ngrx/store";
import { LessorUser } from "entity-lib";


export const fetchProfile = createAction(
    '[PROFILE] Fetch Profile'
);

export const addOrUpdateProfile = createAction(
    '[PROFILE] Set Profile',
    props<{ lessorUser: LessorUser }>()
);

