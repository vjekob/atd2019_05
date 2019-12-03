export const ACTIONS = {
    COUNTER: {
        INCREASE: "INCREASE",
        DECREASE: "DECREASE"
    }
};

export const increase = () => ({ type: ACTIONS.COUNTER.INCREASE });
export const decrease = () => ({ type: ACTIONS.COUNTER.DECREASE });
