import React, { Component } from "react";
import styles from "./TodoList.module.css";
import { connectToTodo } from "../redux/todo.state";
import { TodoEntry } from "./TodoEntry";

class TodoListDisconnected extends Component {
    render() {
        console.log("Render => TodoList");
        const now = window.performance.now();
        try {
            return (
                <div className={styles.todos}>
                    {
                        this.props.todo.length
                            ? this.props.todo.map(todo => <TodoEntry id={todo.id} key={todo.id} />)
                            : <span>(Nothing to do? You lucky bastard!)</span>
                    }
                </div>
            );
        }
        finally {
            const now2 = window.performance.now();
            console.log(`Rendering took ${now2 - now} ms`);
        }
    }
}

export const TodoList = connectToTodo(TodoListDisconnected);