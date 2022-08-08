import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import ThemeToggler from "./ThemeToggler";
import { colors } from "../../globalStyle";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faTasks } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase/firebase.utils";

const Navbar = () => {
    const { todos } = useContext(TodoContext);
    const { isDarkTheme, dispatch } = useContext(ThemeContext);
    const [user] = useAuthState(auth);
    console.log(user);

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
                    <Link
                        className={`${
                            isDarkTheme ? "nav-link-dark" : "nav-link"
                        }`}
                        to="/signin">
                        <FontAwesomeIcon icon={faSignIn} /> SignIn
                    </Link>
                    <Link
                        className={`${
                            isDarkTheme ? "nav-link-dark" : "nav-link"
                        }`}
                        to="/">
                        <FontAwesomeIcon icon={faTasks} /> MySchedoo
                    </Link>
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
