import React, { createContext, useReducer, useEffect } from "react";
import { TodoReducer } from "../reducers/TodoReducer";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [Todos, dispatch] = useReducer(TodoReducer, [], () => {
        const localData = localStorage.getItem("Todos");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(Todos));
    }, [Todos]);

    return (
        <TodoContext.Provider value={{ Todos, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
