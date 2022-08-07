import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import ThemeToggler from "./ThemeToggler";
import { colors } from "../../globalStyle";
import { Outlet } from "react-router-dom";

const Navbar = () => {
    const { todos } = useContext(TodoContext);
    const { isDarkTheme, dispatch } = useContext(ThemeContext);
    const themeColor = isDarkTheme ? "light" : "dark";
    const handleClick = () => {
        dispatch({ type: "TOGGLE_THEME", isDarkTheme: !isDarkTheme });
    };
    return (
        <>
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
                    <h1>My List of Todo</h1>
                    <ThemeToggler
                        isDarkTheme={isDarkTheme}
                        handleClick={handleClick}
                        themeColor={themeColor}
                    />
                </div>
                <p>you have {todos.length} Tasks to do today!</p>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;
