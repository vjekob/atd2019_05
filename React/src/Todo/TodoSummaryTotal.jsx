import { Component } from "react";
import { connectToTodoTotal } from "../redux/todo.state";

class TodoSummaryTotalDisconnected extends Component {
    render() {
        return this.props.total;
    }
}

export const TodoSummaryTotal = connectToTodoTotal(TodoSummaryTotalDisconnected);