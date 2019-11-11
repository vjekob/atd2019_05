import React, { Component } from "react";
import styles from "./TodoInput.module.css";
import { connectToTodoAdd } from "./redux/todo.state";

class TodoInputDisconnected extends Component {
    constructor(props) {
        super(props);
        this._input = React.createRef();
    }

    _add() {
        const value = this._input.current.value.trim();
        if (!value)
            return;

        this.props.add({ caption: this._input.current.value });
        this._input.current.value = "";
        this._input.current.focus();
    }

    render() {
        console.log("Render => TodoInput")
        return (

            <div className={styles.input}>
                <input ref={this._input} type="text" name="todo" placeholder="Add todo"></input>
                <button onClick={() => this._add()}>Add</button>
            </div>
        );
    }
}

export const TodoInput = connectToTodoAdd(TodoInputDisconnected);
