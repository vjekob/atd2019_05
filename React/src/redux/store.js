import { createStore } from "redux";
import { counter } from "./counter.reducer";

export const store = createStore(counter);
