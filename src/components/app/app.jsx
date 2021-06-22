import React, { useEffect, useState } from "react";
import ToDoList from "../list";
import Form from "../form";
import { getTodos, addTodo, deleteTodo } from "../../api";

const App = () => {
  const [toDoList, setToDoList] = useState([]);

  const deleteItemHandler = id => {
    deleteTodo(id).then(() => {
      const newToDoList = toDoList.filter((item, index) => index !== id);
      setToDoList(newToDoList);
    })
  };

  const onSaveHandler = value => {
    const newItem = {
      id: Date.now(),
      value,
      completed: false,
    }
  
 addTodo(newItem).then(() => {
    setToDoList(prev => {
      return [...prev, newItem];
    });
  });
};

  useEffect(() => {
    getTodos().then((res) => setToDoList(res.toDoList));
  }, []);

  return (
    <>
      <Form saveToDo={onSaveHandler} />
      <ToDoList toDoList={toDoList} deleteItem={deleteItemHandler} />
    </>
  );
};

export default App;
