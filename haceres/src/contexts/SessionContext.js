import React, { createContext, useReducer, useEffect } from "react";
import { SessionReducer } from "../reducers/SessionReducer";

export const SessionContext = createContext();

const SessionContextProvider = (props) => {
    const [userId, dispatch] = useReducer(SessionReducer, "", () => {
        const localData = localStorage.getItem("userId");
        console.log(typeof localData);
        return localData ? JSON.parse(localData) : "";
    });

    useEffect(() => {
        localStorage.setItem("userId", JSON.stringify(userId));
    }, [userId]);

    return (
        <SessionContext.Provider value={{ dispatch, userId }}>
            {props.children}
        </SessionContext.Provider>
    );
};
export default SessionContextProvider;
