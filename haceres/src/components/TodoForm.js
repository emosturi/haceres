import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { ThemeContext } from "../contexts/ThemeContext";

const TodoForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const { dispatch } = useContext(TodoContext);
    const { isDarkTheme } = useContext(ThemeContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_Todo", Todo: { author, title } });
        setTitle("");
        setAuthor("");
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
                type="text"
                placeholder="Todo author..."
                required
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
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
