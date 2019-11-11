import { connect } from "react-redux";
import { mapDispatchToCounterProps } from "./counter.actions";

const mapStateToProps = state => ({ counter: state.counter });

export const connectToCounter = component => connect(mapStateToProps, mapDispatchToCounterProps)(component);
