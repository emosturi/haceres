import React from "react";
import { faSignIn, faTasks } from "@fortawesome/free-solid-svg-icons";
import ThemeToggler from "./ThemeToggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOutWithGoogle } from "../../utils/firebase/firebase.utils";

const Navwrapper = ({ isDarkTheme, handleClick }) => {
    const themeColor = isDarkTheme ? "light" : "dark";
    const [user] = useAuthState(auth);

    const signOut = async () => {
        const authResponse = await signOutWithGoogle();
    };
    return (
        <>
            <div className="wrapper">
                {user ? (
                    <Link
                        className={`${
                            isDarkTheme ? "nav-link-dark" : "nav-link"
                        }`}
                        to="/signin"
                        onClick={signOut}>
                        <FontAwesomeIcon icon={faSignIn} /> SignOut
                    </Link>
                ) : (
                    <Link
                        className={`${
                            isDarkTheme ? "nav-link-dark" : "nav-link"
                        }`}
                        to="/signin">
                        <FontAwesomeIcon icon={faSignIn} /> SignIn
                    </Link>
                )}
                <Link
                    className={`${isDarkTheme ? "nav-link-dark" : "nav-link"}`}
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
        </>
    );
};

export default Navwrapper;
