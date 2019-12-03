import React, { Component } from "react";
import styles from "./TodoSummary.module.css";
import { TodoSummaryDone } from "./TodoSummaryDone";
import { TodoSummaryTotal } from "./TodoSummaryTotal";

export class TodoSummary extends Component {
    render() {
        console.log("Render => TodoSummary");
        const now = window.performance.now();
        try {
            return (
                <div className={styles.summary}>
                    Done <TodoSummaryDone /> of <TodoSummaryTotal />
                </div>
            );
        }
        finally {
            const now2 = window.performance.now();
            console.log(`Rendering took ${now2 - now} ms`);
        }
    }
}
