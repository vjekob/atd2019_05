import { createStore, combineReducers } from "redux";
import { counter } from "./counter.reducer";
import { todo } from "./todo.reducer";

export const store = createStore(
    combineReducers({
        counter,
        todo
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
