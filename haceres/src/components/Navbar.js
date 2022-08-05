import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeToggler from "./ThemeToggler";
import { colors } from "../globalStyle";

const Navbar = () => {
    const { books } = useContext(BookContext);
    const { isDarkTheme, dispatch } = useContext(ThemeContext);
    const themeColor = isDarkTheme ? "light" : "dark";
    const handleClick = () => {
        dispatch({ type: "TOGGLE_THEME", isDarkTheme: !isDarkTheme });
    };
    return (
        <div className={`navbar ${isDarkTheme ? "dark" : ""}`}>
            {isDarkTheme ? (
                <style>{`
        body {background: ${colors.greyish}}
        .App {background: ${colors.componentsGrey};
              color: ${colors.whiteish}}
      `}</style>
            ) : (
                <style>{`body {background: ${colors.whiteish}  }`}</style>
            )}
            <div className="wrapper">
                <h1>My List of book</h1>
                <ThemeToggler
                    isDarkTheme={isDarkTheme}
                    handleClick={handleClick}
                    themeColor={themeColor}
                />
            </div>
            <h4>(that I'll probs never read)</h4>
            <p>you have {books.length} books to read (or not)</p>
        </div>
    );
};

export default Navbar;
