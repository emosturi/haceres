import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import TodoDetails from "../tododetails/TodoDetails";

const TodoList = () => {
    const { todos } = useContext(TodoContext);
    const { isDarkTheme } = useContext(ThemeContext);
    return todos.length ? (
        <div className={`Todo-list ${isDarkTheme ? "dark" : ""}`}>
            <ul>
                {todos.map((todo) => (
                    <TodoDetails key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    ) : (
        <div className="empty">Welcome free time : ) !!! </div>
    );
};

export default TodoList;
