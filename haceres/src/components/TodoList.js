import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { ThemeContext } from "../contexts/ThemeContext";
import TodoDetails from "./TodoDetails";

const TodoList = () => {
    const { Todos } = useContext(TodoContext);
    const { isDarkTheme } = useContext(ThemeContext);
    return Todos.length ? (
        <div className={`Todo-list ${isDarkTheme ? "dark" : ""}`}>
            <ul>
                {Todos.map((Todo) => (
                    <TodoDetails key={Todo.id} Todo={Todo} />
                ))}
            </ul>
        </div>
    ) : (
        <div className="empty">Welcome free time : ) !!! </div>
    );
};

export default TodoList;
