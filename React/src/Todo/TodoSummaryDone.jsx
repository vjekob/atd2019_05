import { Component } from "react";
import { connectToTodoDone } from "../redux/todo.state";

class TodoSummaryDoneDisconnected extends Component {
    render() {
        console.log("Render => TodoSummaryDone");
        return this.props.done;
    }
}

export const TodoSummaryDone = connectToTodoDone(TodoSummaryDoneDisconnected);
