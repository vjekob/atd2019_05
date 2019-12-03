import { connect} from "react-redux";
import { increase, decrease } from "./actions";

const mapStateToProps = state => ({ counter: state });
const mapDispatchToProps = dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
});

export const connectToCounter = component => connect(mapStateToProps, mapDispatchToProps)(component);
