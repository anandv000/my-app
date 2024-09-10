import { createAction, props } from "@ngrx/store";

export const SHOW_NOTIFICATIONS = 'showNotifications';
export const EMPTY_NOTIFICATIONS = 'emptyNotifications';

export const showNotifications = createAction(SHOW_NOTIFICATIONS,props<{message:string}>());

export const emptyNotifications = createAction(EMPTY_NOTIFICATIONS);

