import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterandUserModel } from "./counter.model";

// const getCounterState = createFeatureSelector<CounterandUserModel>('counter');
const getCounterState =  createFeatureSelector<CounterandUserModel>('counter');

export const getCounter = createSelector(getCounterState,(state)=> {
    return state.counter
});

export const getUserName = createSelector(getCounterState,(state)=> {
    return state.userName
});