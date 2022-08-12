import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { ThemeContext } from "../../contexts/ThemeContext";

const TodoForm = ({ todos, user, todosRef }) => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const { dispatch } = useContext(TodoContext);
    const { isDarkTheme } = useContext(ThemeContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_Todo", todo: { time, title } });
        setTitle("");
        setTime("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Todo title..."
                value={title}
                required
                onChange={(event) => setTitle(event.target.value)}
                className={`${isDarkTheme ? "dark" : ""}`}
            />
            <input
                type="time"
                placeholder="Todo time..."
                required
                value={time}
                onChange={(event) => setTime(event.target.value)}
                className={`${isDarkTheme ? "dark" : ""}`}
            />
            <input
                type="submit"
                value="Add Todo"
                className={`${isDarkTheme ? "dark" : ""}`}
            />
        </form>
    );
};

export default TodoForm;
