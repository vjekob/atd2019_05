import { Component } from "react";
import { connectToTodoDone } from "../redux/todo.state";

class TodoSummaryDoneDisconnected extends Component {
    render() {
        console.log("Render => TodoSummaryDone");
        const now = window.performance.now();
        try {
            return this.props.done;
        }
        finally {
            const now2 = window.performance.now();
            const mics = (now2 - now) * 1000;
            console.log(`Rendering took: ${mics} μs`);
        }
    }
}

export const TodoSummaryDone = connectToTodoDone(TodoSummaryDoneDisconnected);
