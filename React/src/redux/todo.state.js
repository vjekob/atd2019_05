import { connect } from "react-redux";
import { mapDispatchToTodoProps, mapDispatchToTodoAdd } from "./todo.actions";

const reduceTodosToString = todo => todo.reduce((acc, current) => `${acc},${current.id}`, "");

const mapStateToProps = state => ({ todo: state.todo });
const mapStateToPropsDone = state => ({ done: state.todo.filter(todo => todo.completed).length });
const mapStateToPropsTotal = state => ({ total: state.todo.length });
const mapStateToPropsEntry = (state, ownProps) => ({ todo: state.todo.find(todo => todo.id === ownProps.id) });

const enhancerTodo = {
    areStatesEqual: (next, prev) => reduceTodosToString(next.todo) === reduceTodosToString(prev.todo)
};

export const connectToTodo = component => connect(mapStateToProps, mapDispatchToTodoProps, null, enhancerTodo)(component);
export const connectToTodoEntry = component => connect(mapStateToPropsEntry, mapDispatchToTodoProps)(component);
export const connectToTodoAdd = component => connect(null, mapDispatchToTodoAdd)(component);
export const connectToTodoDone = component => connect(mapStateToPropsDone)(component);
export const connectToTodoTotal = component => connect(mapStateToPropsTotal)(component);
