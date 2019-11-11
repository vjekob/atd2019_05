import React, { Component } from "react";
import styles from "./Counter.module.css";

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    _increase(add) {
        if (add === 0)
            return;
        this.setState({ counter: this.state.counter + add});
    }

    render() {
        return (
            <div className={styles.control}>
                <div className={styles.counter}>{this.state.counter}</div>
                <div className={styles.buttons}>
                    <div onClick={() => this._increase(1)}>+</div>
                    <div onClick={() => this._increase(-1)}>-</div>
                </div>
            </div>
        )
    }
}
