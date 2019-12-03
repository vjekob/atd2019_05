import { createStore, combineReducers } from "redux";
import { counter } from "./counter.reducer";
import { todo } from "./todo.reducer";

export function createReducer(initialState, handlers) {
    return (state = initialState, action) => {
        const { type, payload } = action;
        return handlers[type]
            ? handlers[type](state, payload)
            : state;
    }
};

export const store = createStore(
    combineReducers({
        counter,
        todo
    })
);
