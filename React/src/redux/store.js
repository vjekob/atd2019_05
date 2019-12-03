import { createStore, combineReducers } from "redux";
import { counter } from "./counter.reducer";
import { todo } from "./todo.reducer";

export const store = createStore(
    combineReducers({
        counter,
        todo
    })
);
