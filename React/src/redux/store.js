import { createStore } from "redux";
import { connect} from "react-redux";

const ACTIONS = {
    COUNTER: {
        INCREASE: "INCREASE",
        DECREASE: "DECREASE"
    }
}

function counter(state = 0, action) {
    switch (action.type) {
        case ACTIONS.COUNTER.INCREASE:
            return state + 1;
        case ACTIONS.COUNTER.DECREASE:
            return state - 1;
        default:
            return state;
    }
}

export const store = createStore(counter);

const increase = () => ({ type: ACTIONS.COUNTER.INCREASE });
const decrease = () => ({ type: ACTIONS.COUNTER.DECREASE });

const mapStateToProps = state => ({ counter: state });
const mapDispatchToProps = dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
});

export const connectToCounter = component => connect(mapStateToProps, mapDispatchToProps)(component);
