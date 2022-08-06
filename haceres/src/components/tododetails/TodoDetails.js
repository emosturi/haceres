import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    solid,
    regular,
    brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const TodoDetails = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);

    const handleDone = () => {
        dispatch({ type: "COMPLETE_Todo", id: todo.id });
    };

    const handleDelete = () => {
        dispatch({ type: "REMOVE_Todo", id: todo.id });
    };
    return (
        <li>
            <div onClick={handleDone}>
                <div className="title">{todo.title}</div>
                <div className="time">{todo.time}</div>
            </div>
            <FontAwesomeIcon
                className="fa-icon"
                icon={solid("trash")}
                onClick={handleDelete}
            />
        </li>
    );
};

export default TodoDetails;
