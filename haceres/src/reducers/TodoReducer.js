import { v1 as uuid } from "uuid";

export const TodoReducer = (state, action) => {
    console.log("pinned reducer state", action, state);
    switch (action.type) {
        case "ADD_Todo":
            return [
                ...state,
                {
                    title: action.todo.title,
                    time: action.todo.time,
                    done: false,
                    id: uuid(),
                },
            ];
        case "REMOVE_Todo":
            return state.filter((todo) => todo.id !== action.id);
        case "TOGGLE_COMPLETE_Todo":
            return state.map((todo) => {
                return todo.id !== action.id
                    ? todo
                    : { ...todo, done: !todo.done };
            });
        default:
            return state;
    }
};
