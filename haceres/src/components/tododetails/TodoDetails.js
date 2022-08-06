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
        dispatch({ type: "TOGGLE_COMPLETE_Todo", id: todo.id });
    };

    const handleDelete = () => {
        dispatch({ type: "REMOVE_Todo", id: todo.id });
    };
    return (
        <li>
            <div
                onClick={handleDone}
                className={todo.done ? `done` : `notDone`}>
                <div className="title">{todo.title}</div>
                <div className="time">{todo.time}</div>
            </div>
            <div className="trash">
                <FontAwesomeIcon
                    className="fa-icon"
                    icon={solid("trash")}
                    onClick={handleDelete}
                />
            </div>
        </li>
    );
};

export default TodoDetails;
