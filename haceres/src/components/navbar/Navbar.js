import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { colors } from "../../globalStyle";
import { Outlet } from "react-router-dom";
import Navwrapper from "./Navwrapper";

const Navbar = () => {
    const { isDarkTheme, dispatch } = useContext(ThemeContext);

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
                <Navwrapper
                    handleClick={handleClick}
                    isDarkTheme={isDarkTheme}
                />
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;
