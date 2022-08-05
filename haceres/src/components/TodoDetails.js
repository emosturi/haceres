import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoDetails = ({ Todo }) => {
    const { dispatch } = useContext(TodoContext);
    return (
        <li onClick={() => dispatch({ type: "REMOVE_Todo", id: Todo.id })}>
            <div className="title">{Todo.title}</div>
            <div className="author">{Todo.author}</div>
        </li>
    );
};

export default TodoDetails;
