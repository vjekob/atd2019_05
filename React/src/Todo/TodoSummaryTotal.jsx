import { Component } from "react";
import { connectToTodoTotal } from "../redux/todo.state";

class TodoSummaryTotalDisconnected extends Component {
    render() {
        console.log("Render => TodoSummaryTotal");
        const now = window.performance.now();
        try {
            return this.props.total;
        }
        finally {
            const now2 = window.performance.now();
            const mics = (now2 - now) * 1000;
            console.log(`Rendering took: ${mics} μs`);
        }
    }
}

export const TodoSummaryTotal = connectToTodoTotal(TodoSummaryTotalDisconnected);