import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import styles from "./App.module.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  let errorMessage = "Please Add Todo Items."
  let [todoItems, setTodoItems] = useState([
    { name: "Buy Milk", dueDate: "4/10/2026" },
    { name: "Go To College", dueDate: "4/10/2026" },
    { name: "Enjoy", dueDate: "LifeTime" },
  ]);
  const onAddButtonClick = (txtInput, dueDate)=>{
      let newItem = {name: txtInput, dueDate: dueDate };
      let newTodoItems = [...todoItems, newItem];
      setTodoItems(newTodoItems);
  }

  const onDelButtonClick = (name,dueDate) =>{
    let newTodoItems = todoItems.filter((item)=>{
      if(item.name === name && item.dueDate === dueDate){
        return false;
      }
      else return true;
    });
    setTodoItems(newTodoItems);
  }

  return (
    <center className={styles.todoContainer}>
      <AppName />
      <AddTodo addButtonClick = {onAddButtonClick}/>
      {todoItems.length === 0 ? <ErrorMsg errorMessage={errorMessage}></ErrorMsg>: null}
      <TodoItems todoItems = {todoItems} handleDelButtonClick={onDelButtonClick}/>
    </center>
  );
}

export default App;
