import { createStore } from "redux";
import { connect} from "react-redux";

const ACTIONS = {
    COUNTER: {
        INCREMENT: "INCREMENT",
        DECREMENT: "DECREMENT"
    }
}

function counter(state = 0, action) {
    switch (action.type) {
        case ACTIONS.COUNTER.INCREMENT:
            return state + 1;
        case ACTIONS.COUNTER.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export const store = createStore(counter);

const increase = () => ({ type: ACTIONS.COUNTER.INCREMENT });
const decrease = () => ({ type: ACTIONS.COUNTER.DECREMENT });

const mapStateToProps = state => ({ counter: state });
const mapDispatchToProps = dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
});

export const connectToCounter = component => connect(mapStateToProps, mapDispatchToProps)(component);
