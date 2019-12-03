import React, { Component } from "react";
import styles from "./TodoEntry.module.css";
import { connectToTodoEntry } from "../redux/todo.state";

class TodoEntryDisconnected extends Component {
    render() {
        console.log(`Render => TodoEntry ${this.props.id}`)
        const now = window.performance.now();
        try {
            return (
                <div className={styles.todo}>
                    <button onClick={() => this.props.remove(this.props.todo)}>remove</button>
                    <label className={this.props.todo.completed ? styles.completed : styles.active}>
                        <input type="checkbox" onChange={() => this.props.toggle(this.props.todo)}></input>
                        <span>{this.props.todo.caption}</span>
                    </label>
                </div>
            );
        }
        finally {
            const now2 = window.performance.now();
            const mics = (now2 - now) * 1000;
            console.log(`Rendering took: ${mics} μs`);
        }
    }
}

export const TodoEntry = connectToTodoEntry(TodoEntryDisconnected);