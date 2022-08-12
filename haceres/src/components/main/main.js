import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
} from "firebase/firestore";
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

    useEffect(() => {
        if (user) {
            handleNewTodos();
        }
    }, [user]);

    const handleNewTodos = async () => {
        try {
            const arrayOfTodos = [];
            const response = await getDocs(todosRef);
            response.docs.forEach((doc) => {
                arrayOfTodos.push({ ...doc.data(), id: doc.id });
            });
            setTodos([...arrayOfTodos]);
        } catch (e) {
            console.log("Error while fetching documents: ", e);
        }
    };

    const handleDelete = async (id) => {
        try {
            const path = "users/" + user.uid + "/todos";
            await deleteDoc(doc(db, path, id));
            handleNewTodos();
        } catch (e) {
            console.error("Error deleting a document: ", e);
        }
    };

    const handleUpdate = async (id, todo) => {
        try {
            const path = "users/" + user.uid + "/todos";
            await updateDoc(doc(db, path, id), {
                done: !todo.done,
            });
            handleNewTodos();
        } catch (e) {
            console.error("Error editing a document: ", e);
        }
    };

    return (
        <>
            <TodoForm
                handleNewTodos={handleNewTodos}
                todosRef={todosRef}
                user={user}
            />
            <TodoList
                todos={todos}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                user={user}
            />
        </>
    );
};

export default Main;
