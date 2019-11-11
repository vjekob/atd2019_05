import React, { Component } from "react";
import styles from "./Counter.module.css";

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    _increase() {
        this.setState({ counter: this.state.counter + 1 });
    }

    _decrease() {
        this.setState({ counter: this.state.counter - 1 });
    }

    render() {
        return (
            <div className={styles.control}>
                <div className={styles.counter}>{this.state.counter}</div>
                <div className={styles.buttons}>
                    <div onClick={() => this._increase()}>+</div>
                    <div onClick={() => this._decrease()}>-</div>
                </div>
            </div>
        )
    }
}
