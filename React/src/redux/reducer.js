import { ACTIONS } from "./actions";

export function counter(state = 0, action) {
    switch (action.type) {
        case ACTIONS.COUNTER.INCREASE:
            return state + 1;
        case ACTIONS.COUNTER.DECREASE:
            return state - 1;
        default:
            return state;
    }
}
