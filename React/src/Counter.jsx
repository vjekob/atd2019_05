import React, { Component } from "react";
import styles from "./Counter.module.css";

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = 0;
    }

    render() {
        return (
            <div className={styles.control}>
                <div className={styles.counter}>{this.state}</div>
                <div className={styles.buttons}>
                    <div onClick={() => this.state++}>+</div>
                    <div onClick={() => this.state--}>-</div>
                </div>
            </div>
        )
    }
}
