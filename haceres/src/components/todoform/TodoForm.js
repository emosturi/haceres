import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { addDoc } from "firebase/firestore";

const TodoForm = ({ handleNewTodos, todosRef }) => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [day, setDay] = useState("");
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
                day,
                done: false,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        handleNewTodos();
        setTitle("");
        setTime("");
    };
    console.log(`${title} - ${time} - ${day}`);

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
            <select
                onChange={(event) => setDay(event.target.value)}
                name="day"
                required
                className={`${isDarkTheme ? "dark" : ""}`}>
                <option className={`${isDarkTheme ? "dark" : ""}`} value="">
                    Pick a day
                </option>
                <option
                    className={`${isDarkTheme ? "dark" : ""}`}
                    value="Monday">
                    Monday
                </option>
                <option
                    className={`${isDarkTheme ? "dark" : ""}`}
                    value="Tuesday">
                    Tuesday
                </option>
                <option
                    className={`${isDarkTheme ? "dark" : ""}`}
                    value="Wednesday">
                    Wednesday
                </option>
                <option
                    className={`${isDarkTheme ? "dark" : ""}`}
                    value="Thursday">
                    Thursday
                </option>
                <option
                    className={`${isDarkTheme ? "dark" : ""}`}
                    value="Friday">
                    Friday
                </option>
                <option
                    className={`${isDarkTheme ? "dark" : ""}`}
                    value="Saturday">
                    Saturday
                </option>
                <option
                    className={`${isDarkTheme ? "dark" : ""}`}
                    value="Sunday">
                    Sunday
                </option>
            </select>
            <input
                type="submit"
                value="Add Todo"
                className={`${isDarkTheme ? "dark" : ""}`}
            />
        </form>
    );
};

export default TodoForm;
