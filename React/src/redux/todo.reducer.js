import { TODO_ACTIONS } from "./todo.actions";
import { createReducer } from "./store";

export const todo = createReducer([], {
    [TODO_ACTIONS.ADD]: (state, payload) => [...state, payload],

    [TODO_ACTIONS.REMOVE]: (state, payload) => state.filter(todo => todo.id !== payload.id),

    [TODO_ACTIONS.TOGGLE]: (state, payload) =>
        state.map(todo => todo.id === payload.id
            ? { ...todo, completed: !todo.completed }
            : todo)
});
