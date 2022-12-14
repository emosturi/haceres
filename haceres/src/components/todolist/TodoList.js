import React, { useContext, useEffect, useRef, useState } from "react";
// import { TodoContext } from "../../contexts/TodoContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import TodoDetails from "../tododetails/TodoDetails";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../utils/firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

const TodoList = ({ handleDelete, handleUpdate, user, todos }) => {
    // const { todos } = useContext(TodoContext);
    const { isDarkTheme } = useContext(ThemeContext);

    //This should become a customizable sort for client use
    const todosSortedByDate = todos.sort(
        (a, b) => a.time.replace(/:/g, "") - b.time.replace(/:/g, "")
    );

    return todos.length ? (
        <div className={`Todo-list ${isDarkTheme ? "dark" : ""}`}>
            <ul>
                {todosSortedByDate.map((todo) => (
                    <TodoDetails
                        key={todo.id}
                        todo={todo}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                    />
                ))}
            </ul>
        </div>
    ) : (
        <div className="empty">Welcome free time : ) !!! </div>
    );
};

export default TodoList;
