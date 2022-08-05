import React from "react";

const ThemeToggler = ({ isDarkTheme, themeColor, handleClick }) => {
    return (
        <div className="theme-toggler">
            <input
                className={`${isDarkTheme ? "dark" : ""}`}
                type="button"
                onClick={handleClick}
                value={`${themeColor}`}
            />
        </div>
    );
};

export default ThemeToggler;
