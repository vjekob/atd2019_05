import { COUNTER_ACTIONS } from "./counter.actions";
import { createReducer } from "./store";

export const counter = createReducer(0, {
    [COUNTER_ACTIONS.INCREMENT]: state => state + 1,
    [COUNTER_ACTIONS.DECREMENT]: state => state -1,
});
