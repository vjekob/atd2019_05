import { connect } from "react-redux";
import { mapDispatchToCounterProps } from "./counter.actions";

const mapStateToProps = state => ({ counter: state.counter });

export const connectToCounter = component => connect(mapStateToProps)(component);
export const connectToCounterActions = component => connect(null, mapDispatchToCounterProps)(component);
