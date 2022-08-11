import React, { useContext, useEffect, useRef, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import TodoDetails from "../tododetails/TodoDetails";
import { async } from "@firebase/util";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

const TodoList = () => {
    // const { todos } = useContext(TodoContext);
    const [todos, setTodos] = useState([]);
    const { isDarkTheme } = useContext(ThemeContext);
    const alreadyMountedOnce = useRef(false);

    useEffect(() => {
        if (!alreadyMountedOnce.current) {
            const todosRef = collection(db, "users/dkLFd2E88pgGvQPSHvxZ/todos");
            console.log(todosRef);
            const arrayOfTodos = [];
            const getTodos = async () => {
                const response = await getDocs(todosRef);
                response.docs.forEach((doc) => {
                    arrayOfTodos.push({ ...doc.data() });
                });
                setTodos([...arrayOfTodos]);
            };
            getTodos();
            alreadyMountedOnce.current = true;
        }
    }, []);

    //This should become a customizable sort for client use
    const todosSortedByDate = todos.sort(
        (a, b) => a.time.replace(/:/g, "") - b.time.replace(/:/g, "")
    );

    return todos.length ? (
        <div className={`Todo-list ${isDarkTheme ? "dark" : ""}`}>
            <ul>
                {todosSortedByDate.map((todo) => (
                    <TodoDetails key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    ) : (
        <div className="empty">Welcome free time : ) !!! </div>
    );
};

export default TodoList;
