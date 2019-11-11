import React, { Component } from "react";
import styles from "./TodoSummary.module.css";
import { TodoSummaryDone } from "./TodoSummaryDone";
import { TodoSummaryTotal } from "./TodoSummaryTotal";

export class TodoSummary extends Component {
    render() {
        console.log("Render => TodoSummary")
        return (
            <div className={styles.summary}>
                Done <TodoSummaryDone /> of <TodoSummaryTotal />
            </div>
        )
    }
}
