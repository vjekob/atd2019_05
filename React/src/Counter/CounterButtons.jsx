import React, { Component } from "react";
import styles from "./CounterButtons.module.css";
import { connectToCounterActions } from "../redux/counter.state";

class CounterButtonsDisconnected extends Component {
    render() {
        console.log("Render => CounterButtons")
        return (
            <div className={styles.buttons}>
                <div onClick={() => this.props.increase()}>+</div>
                <div onClick={() => this.props.decrease()}>-</div>
            </div>
        )
    }
}

export const CounterButtons = connectToCounterActions(CounterButtonsDisconnected);
