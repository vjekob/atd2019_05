import React, { Component } from "react";
import styles from "./TodoSummary.module.css";
import { TodoSummaryDone } from "./TodoSummaryDone";
import { TodoSummaryTotal } from "./TodoSummaryTotal";

export class TodoSummary extends Component {
    render() {
        return (
            <div className={styles.summary}>
                Done <TodoSummaryDone /> of <TodoSummaryTotal />
            </div>
        )
    }
}
