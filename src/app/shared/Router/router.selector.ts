import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateModel } from "./customSerializer";
import { RouterReducerState } from "@ngrx/router-store";

const _routerData  = createFeatureSelector<RouterReducerState<RouterStateModel>>('router');

export const routerData = createSelector(_routerData,(state) => {
    return state.state.params;
});