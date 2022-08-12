import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { TodoContext } from "../../contexts/TodoContext";
import { auth, db } from "../../utils/firebase/firebase.utils";
import TodoForm from "../todoform/TodoForm";
import TodoList from "../todolist/TodoList";

const Main = () => {
    const [todos, setTodos] = useState([]);
    const [user] = useAuthState(auth);
    const todosRef = collection(db, "users/" + user.uid + "/todos");
    console.log(user);
    useEffect(() => {
        if (user) {
            handleNewTodos();
        }
    }, [user]);

    const handleNewTodos = async () => {
        const arrayOfTodos = [];
        const response = await getDocs(todosRef);
        response.docs.forEach((doc) => {
            arrayOfTodos.push({ ...doc.data() });
        });
        setTodos([...arrayOfTodos]);
    };

    return (
        <>
            <TodoForm
                handleNewTodos={handleNewTodos}
                todosRef={todosRef}
                user={user}
            />
            <TodoList todos={todos} todosRef={todosRef} user={user} />
        </>
    );
};

export default Main;
