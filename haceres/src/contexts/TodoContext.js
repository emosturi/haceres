import { collection, DocumentSnapshot, getDocs } from "firebase/firestore";
import React, { createContext, useReducer } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { TodoReducer } from "../reducers/TodoReducer";
import { auth, db } from "../utils/firebase/firebase.utils";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todos, dispatch] = useReducer(TodoReducer, [], async () => {
        // const localData = localStorage.getItem("todos");
        // return localData ? JSON.parse(localData) : [];
    });

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
