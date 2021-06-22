import React from "react";

const ToDoList = ({ toDoList, deleteItem }) => {
  return (
    <ol>
      {toDoList.map(({id, value, completed}, index) => (
        <li key={id}>
          <input type="checkbox" completed={completed}/>
          {value}
          <button
            onClick={() => {
              deleteItem(id);
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
