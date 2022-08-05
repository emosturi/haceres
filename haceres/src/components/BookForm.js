import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

const BookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const { dispatch } = useContext(BookContext);
    const { isDarkTheme } = useContext(ThemeContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_BOOK", book: { author, title } });
        setTitle("");
        setAuthor("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Book title..."
                value={title}
                required
                onChange={(event) => setTitle(event.target.value)}
                className={`${isDarkTheme ? "dark" : ""}`}
            />
            <input
                type="text"
                placeholder="Book author..."
                required
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                className={`${isDarkTheme ? "dark" : ""}`}
            />
            <input
                type="submit"
                value="Add Book"
                className={`${isDarkTheme ? "dark" : ""}`}
            />
        </form>
    );
};

export default BookForm;
