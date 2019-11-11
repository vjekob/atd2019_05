import { COUNTER_ACTIONS } from "./counter.actions";

export const counter = (state = 0, action) => {
    switch (action.type) {
        case COUNTER_ACTIONS.INCREMENT:
            return state + 1;
        case COUNTER_ACTIONS.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};
