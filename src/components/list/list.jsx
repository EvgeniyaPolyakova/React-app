import React, { useState } from "react";

const ToDoList = ({ toDoList, deleteItem }) => {
  const [completed, setСompleted] = useState(false);
  const [id, setId] = useState();
  return (
    <ol>
      {toDoList.map((item, index) => (
        <li key={item.id}>
          <input
        type="checkbox"
        completed={completed}
        onChange={() => setСompleted((prev) => !prev)}
      />
          {item}
          <button
            onClick={() => {
              deleteItem(index);
            }}
          >
            Удалить
          </button>
        </li>
      ))}
    </ol>
  );
};

export default ToDoList;
