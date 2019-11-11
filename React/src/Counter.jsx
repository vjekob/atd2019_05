import React, { Component } from "react";
import styles from "./Counter.module.css";
import { connectToCounter } from "./redux/store";

class CounterDisconnected extends Component {
    render() {
        return (
            <div className={styles.control}>
                <div className={styles.counter}>{this.props.counter}</div>
                <div className={styles.buttons}>
                    <div onClick={() => this.props.increase()}>+</div>
                    <div onClick={() => this.props.decrease()}>-</div>
                </div>
            </div>
        )
    }
}

export const Counter = connectToCounter(CounterDisconnected);