import React, { Component } from "react";
import styles from "./Counter.module.css";
import { CounterLabel } from "./CounterLabel";
import { CounterButtons } from "./CounterButtons";

export class Counter extends Component {
    render() {
        return (
            <div className={styles.control}>
                <div className={styles.counter}><CounterLabel /></div>
                <CounterButtons />
            </div>
        )
    }
}
