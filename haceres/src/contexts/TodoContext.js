import React, { createContext, useReducer, useEffect } from "react";
import { TodoReducer } from "../reducers/TodoReducer";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todos, dispatch] = useReducer(TodoReducer, [], () => {
        const localData = localStorage.getItem("todos");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log("pinned state", todos);
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
