import React, { Component } from "react";
import styles from "./TodoControl.module.css";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { TodoSummary } from "./TodoSummary";

export class TodoControl extends Component {
    render() {
        console.log("Render => Todo");
        const now = window.performance.now();
        try {
            return (
                <div className={styles.control}>
                    <TodoInput />
                    <TodoList />
                    <TodoSummary />
                </div>
            );
        }
        finally {
            const now2 = window.performance.now();
            console.log(`Rendering took ${now2 - now} ms`);
        }
    }
}
