import React, { Component } from "react";
import styles from "./Todo.module.css";
import { connectToTodo } from "./redux/todo.state";

class TodoDisconnected extends Component {
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
        console.log("Render => Todo")
        return (
            <div className={styles.control}>
                <div className={styles.input}>
                    <input ref={this._input} type="text" name="todo" placeholder="Add todo"></input>
                    <button onClick={() => this._add()}>Add</button>
                </div>
                <div className={styles.todos}>
                    {
                        this.props.todo.length
                            ? this.props.todo.map(todo => (
                                <div className={styles.todo} key={todo.id}>
                                    <button onClick={() => this.props.remove(todo)}>remove</button>
                                    <label className={todo.completed ? styles.completed : styles.active}>
                                        <input type="checkbox" onChange={() => this.props.toggle(todo)}></input>
                                        <span>{todo.caption}</span>
                                    </label>
                                </div>
                            ))
                            : <span>(Nothing to do? Lucky potato!)</span>
                    }
                </div>
                <div className={styles.summary}>
                    Done {this.props.todo.filter(todo => todo.completed).length} of {this.props.todo.length}
                </div>
            </div>
        )
    }
}

export const Todo = connectToTodo(TodoDisconnected);