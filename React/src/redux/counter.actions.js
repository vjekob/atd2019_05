import { bindActionCreators } from "redux";

export const COUNTER_ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT"
};

const increase = () => ({ type: COUNTER_ACTIONS.INCREMENT });
const decrease = () => ({ type: COUNTER_ACTIONS.DECREMENT });

export const mapDispatchToCounterProps = dispatch => bindActionCreators(
    {
        increase,
        decrease
    },
    dispatch
);
