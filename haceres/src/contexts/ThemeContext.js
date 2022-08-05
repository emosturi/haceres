import React, { createContext, useReducer, useEffect } from "react";
import { ThemeReducer } from "../reducers/ThemeReducer";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [isDarkTheme, dispatch] = useReducer(ThemeReducer, false, () => {
        const localData = localStorage.getItem("darkTheme");
        return localData ? JSON.parse(localData) : false;
    });

    useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(isDarkTheme));
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ dispatch, isDarkTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
export default ThemeContextProvider;
