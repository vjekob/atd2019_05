import { createStore, combineReducers } from "redux";
import { counter } from "./counter.reducer";
import { todo } from "./todo.reducer";

export function createReducer(initialState, handlers) {
    return (state = initialState, action) => {
        const { type, payload, ...middleware } = action;
        return typeof handlers[type] === "function"
            ? handlers[type](state, payload, middleware)
            : state;
    }
};

export const store = createStore(
    combineReducers({
        counter,
        todo
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
