import React, { useContext } from "react";
// import { TodoContext } from "../../contexts/TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const TodoDetails = ({ todo, handleDelete }) => {
    // const { dispatch } = useContext(TodoContext);

    const handleDone = () => {
        // dispatch({ type: "TOGGLE_COMPLETE_Todo", id: todo.id });
    };

    return (
        <li className="li-row">
            <div
                onClick={handleDone}
                className={todo.done ? `done` : `notDone`}>
                <div className="title">{todo.title}</div>
                <div className="time">{todo.time}</div>
                <FontAwesomeIcon
                    className="fa-icon"
                    icon={solid("trash")}
                    onClick={() => handleDelete(todo.id)}
                />
            </div>
        </li>
    );
};

export default TodoDetails;
