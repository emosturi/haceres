import { v1 as uuid } from "uuid";

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_Todo":
            return [
                ...state,
                {
                    title: action.Todo.title,
                    author: action.Todo.author,
                    id: uuid(),
                },
            ];
        case "REMOVE_Todo":
            return state.filter((Todo) => Todo.id !== action.id);
        default:
            return state;
    }
};
