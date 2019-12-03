import { TODO_ACTIONS } from "./todo.actions";

export const todo = createReducer([], {
    [TODO_ACTIONS.ADD]: (state, payload) => [...state, payload],

    [TODO_ACTIONS.REMOVE]: (state, payload) => state.filter(todo => todo.id !== payload.id),

    [TODO_ACTIONS.TOGGLE]: (state, payload) =>
        state.map(todo => todo.id === payload.id
            ? { ...todo, completed: !todo.completed }
            : todo)
});

export const todo = (state = [], action) => {
    switch (action.type) {
        case TODO_ACTIONS.ADD:
            return [...state, action.todo];
        case TODO_ACTIONS.REMOVE:
            return state.filter(todo => todo.id !== action.todo.id);
        case TODO_ACTIONS.TOGGLE:
            const newState = [...state];
            const todo = newState.find(todo => todo.id === action.todo.id);
            if (todo)
                todo.completed = !todo.completed;
            return newState;
        default:
            return state;
    }
};
