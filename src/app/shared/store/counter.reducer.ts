import { createReducer, on } from "@ngrx/store"
import { initialState } from "./counter.state"
import { caustomeIncrement, changeUserName, decrement, increment, reset } from "./counter.actions"

const _conterRducer = createReducer(initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset,(state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(caustomeIncrement,(state,action) => {
        return {
            ...state,
            counter: action.action == 'add' ? state.counter + action.value :  state.counter - action.value
        }
    }),
    on(changeUserName, (state,action) => {
        return {
            ...state,
            userName: action.userName
        }
    })
)

export function counterReducer(state:any, action:any) {
    return _conterRducer(state,action)
}