import { bindActionCreators } from "redux";

export const TODO_ACTIONS = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    TOGGLE: "TOGGLE"
};

let nextId = 0;

const add = todo => ({ type: TODO_ACTIONS.ADD, todo: { ...todo, completed: false, id: ++nextId } });
const remove = todo => ({ type: TODO_ACTIONS.REMOVE, todo });
const toggle = todo => ({ type: TODO_ACTIONS.TOGGLE, todo });

export const mapDispatchToTodoProps = dispatch => bindActionCreators(
    {
        add,
        remove,
        toggle
    },
    dispatch
);
