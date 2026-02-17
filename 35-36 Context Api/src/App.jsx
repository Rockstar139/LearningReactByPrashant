import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import styles from "./App.module.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import ErrorMsg from "./components/ErrorMsg";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  let errorMessage = "Please Add Todo Items."
  let [todoItems, setTodoItems] = useState([
    { name: "Buy Milk", dueDate: "4/10/2026" },
    { name: "Go To College", dueDate: "4/10/2026" },
    { name: "Enjoy", dueDate: "LifeTime" },
  ]);
  const addNewItem = (txtInput, dueDate)=>{
    //this will always provide latest value as the calls are asynchronous.
    setTodoItems((currValue) =>[
      ...currValue, 
      {name: txtInput, dueDate: dueDate }
    ]);
    //this may or may not provide latest value as the calls are asynchronous.
      // let newItem = {name: txtInput, dueDate: dueDate };
      // let newTodoItems = [...todoItems, newItem];
      // setTodoItems(newTodoItems);
  }

  const deleteItem = (name,dueDate) =>{
    let newTodoItems = todoItems.filter((item)=>{
      if(item.name === name && item.dueDate === dueDate){
        return false;
      }
      else return true;
    });
    setTodoItems(newTodoItems);
  }

  return (
    <TodoItemsContext.Provider value={{todoItems: todoItems,
      addNewItem: addNewItem,
      deleteItem: deleteItem,
    }}>
    <center className={styles.todoContainer}>
      <AppName />
      <AddTodo />
      <ErrorMsg ></ErrorMsg>
      <TodoItems />
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
