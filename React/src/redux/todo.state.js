import { connect } from "react-redux";
import { mapDispatchToTodoProps, mapDispatchToTodoAdd } from "./todo.actions";

const mapStateToProps = state => ({ todo: state.todo });
const mapStateToPropsDone = state => ({ done: state.todo.filter(todo => todo.completed).length });
const mapStateToPropsTotal = state => ({ total: state.todo.length });
const mapStateToPropsEntry = (state, ownProps) => ({ todo: state.todo.find(todo => todo.id === ownProps.id) });

export const connectToTodo = component => connect(mapStateToProps, mapDispatchToTodoProps)(component);
export const connectToTodoEntry = component => connect(mapStateToPropsEntry, mapDispatchToTodoProps)(component);
export const connectToTodoAdd = component => connect(null, mapDispatchToTodoAdd)(component);
export const connectToTodoDone = component => connect(mapStateToPropsDone)(component);
export const connectToTodoTotal = component => connect(mapStateToPropsTotal)(component);
