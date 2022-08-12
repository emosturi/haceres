import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { addDoc } from "firebase/firestore";

const TodoForm = ({ handleNewTodos, todosRef }) => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    // const { dispatch } = useContext(TodoContext);
    const { isDarkTheme } = useContext(ThemeContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // dispatch({ type: "ADD_Todo", todo: { time, title } });
        console.log("entrada al query");
        try {
            const docRef = await addDoc(todosRef, {
                title,
                time,
                day: "Sabado",
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        handleNewTodos();
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
