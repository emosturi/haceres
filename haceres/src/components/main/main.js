import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
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
            arrayOfTodos.push({ ...doc.data(), id: doc.id });
        });
        setTodos([...arrayOfTodos]);
    };

    const handleDelete = async (id) => {
        try {
            const path = "users/" + user.uid + "/todos";
            await deleteDoc(doc(db, path, id));
            console.log("Document deleted with ID: ", id);
            handleNewTodos();
        } catch (e) {
            console.error("Error in my attempt of deleting a document: ", e);
        }
    };

    return (
        <>
            <TodoForm
                handleNewTodos={handleNewTodos}
                todosRef={todosRef}
                user={user}
            />
            <TodoList todos={todos} handleDelete={handleDelete} user={user} />
        </>
    );
};

export default Main;
