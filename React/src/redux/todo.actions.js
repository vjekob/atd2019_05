import { bindActionCreators } from "redux";

export const TODO_ACTIONS = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    TOGGLE: "TOGGLE"
};

let nextId = 0;

const add = todo => ({ type: TODO_ACTIONS.ADD, payload: { ...todo, completed: false, id: ++nextId } });
const remove = todo => ({ type: TODO_ACTIONS.REMOVE, payload: todo });
const toggle = todo => ({ type: TODO_ACTIONS.TOGGLE, payload: todo });

export const mapDispatchToTodoProps = dispatch => bindActionCreators(
    {
        add,
        remove,
        toggle
    },
    dispatch
);

export const mapDispatchToTodoAdd = dispatch => bindActionCreators({ add }, dispatch);
