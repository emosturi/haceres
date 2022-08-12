import React, { useContext, useEffect, useRef, useState } from "react";
// import { TodoContext } from "../../contexts/TodoContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import TodoDetails from "../tododetails/TodoDetails";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../utils/firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

const TodoList = () => {
    // const { todos } = useContext(TodoContext);
    const [todos, setTodos] = useState([]);
    const { isDarkTheme } = useContext(ThemeContext);
    const [user] = useAuthState(auth);

    useEffect(() => {
        console.log(user);
        if (user) {
            const todosRef = collection(db, "users/" + user.uid + "/todos");
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
        }
    }, [user]);

    //This should become a customizable sort for client use
    const todosSortedByDate = todos.sort(
        (a, b) => a.time.replace(/:/g, "") - b.time.replace(/:/g, "")
    );

    return todos.length ? (
        <div className={`Todo-list ${isDarkTheme ? "dark" : ""}`}>
            <ul>
                {todosSortedByDate.map((todo, id) => (
                    <TodoDetails key={todo.id + id} todo={todo} />
                ))}
            </ul>
        </div>
    ) : (
        <div className="empty">Welcome free time : ) !!! </div>
    );
};

export default TodoList;
