import { connect } from "react-redux";
import { mapDispatchToTodoProps } from "./todo.actions";

const mapStateToProps = state => ({ todo: state.todo });

export const connectToTodo = component => connect(mapStateToProps, mapDispatchToTodoProps)(component);
