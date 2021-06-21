import React, { useEffect, useState } from "react";
import ToDoList from "../list";
import Form from "../form";
import { getTodos } from "../../api";

const App = () => {
  const [toDoList, setToDoList] = useState([]);

useEffect(() => {
  getTodos().then(res => console.log(res)).then(res => setToDoList(res.toDoList))
}, [toDoList])

  return (
    <>
      <Form
        saveToDo={(toDoText) => {
         setToDoList([...toDoList, toDoText]);
        }}
      />
      <ToDoList
        toDoList={toDoList}
        deleteItem={(toDoItem) => {
          const newToDoList = toDoList.filter(
            (item, index) => index !== toDoItem
          );
          setToDoList(newToDoList);
        }}
      />
    </>
  );
};


export default App;
