import { Component } from "react";
import { connectToCounter } from "../redux/counter.state";

class CounterLabelDisconnected extends Component {
    render() {
        return this.props.counter;
    }
}

export const CounterLabel = connectToCounter(CounterLabelDisconnected);