import { Component } from "react";
import { connectToTodoDone } from "../redux/todo.state";

class TodoSummaryDoneDisconnected extends Component {
    render() {
        return this.props.done;
    }
}

export const TodoSummaryDone = connectToTodoDone(TodoSummaryDoneDisconnected);
