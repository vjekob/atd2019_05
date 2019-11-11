import { TODO_ACTIONS } from "./todo.actions";

export const todo = (state = [], action) => {
    switch (action.type) {
        case TODO_ACTIONS.ADD:
            return [...state, action.todo];
        case TODO_ACTIONS.REMOVE:
            return state.filter(todo => todo.id !== action.todo.id);
        case TODO_ACTIONS.TOGGLE:
            return state.map(todo => todo.id === action.todo.id
                ? { ...todo, completed: !todo.completed }
                : todo);
        default:
            return state;
    }
};
