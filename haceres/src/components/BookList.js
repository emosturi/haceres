import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";
import BookDetails from "./BookDetails";

const BookList = () => {
    const { books } = useContext(BookContext);
    const { isDarkTheme } = useContext(ThemeContext);
    return books.length ? (
        <div className={`book-list ${isDarkTheme ? "dark" : ""}`}>
            <ul>
                {books.map((book) => (
                    <BookDetails key={book.id} book={book} />
                ))}
            </ul>
        </div>
    ) : (
        <div className="empty">Hello free time (as always...)</div>
    );
};

export default BookList;
