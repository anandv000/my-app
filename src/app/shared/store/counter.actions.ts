import { createAction, props } from "@ngrx/store";
 
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const caustomeincrement = createAction('caustomeincrement',props<{value:any,action:any}>());

export const changeUserName = createAction('changeUserName', props<{userName:string}>());