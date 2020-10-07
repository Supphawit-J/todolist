import React from "react";
import { useTodo } from "../../contexts/ActionContext";

export function Listitem({ children, id, type }) {
  const [, { onDoClick, onDoneClick, onTodoClick }] = useTodo();

  return (
    <ul className="list-container">
      <li className="list-item">
        <span className="list-content">{children}</span>
        {type !== "todo" && (
          <button className="btn" onClick={() => onTodoClick(id)}>
            Todo
          </button>
        )}
        {type !== "doing" && (
          <button className="btn" onClick={() => onDoClick(id)}>
            Do
          </button>
        )}
        {type !== "done" && (
          <button className="btn" onClick={() => onDoneClick(id)}>
            Done
          </button>
        )}
      </li>
    </ul>
  );
}
export default Listitem;
