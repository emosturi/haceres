import { v1 as uuid } from "uuid";

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_Todo":
            return [
                ...state,
                {
                    title: action.todo.title,
                    time: action.todo.time,
                    id: uuid(),
                },
            ];
        case "REMOVE_Todo":
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};
