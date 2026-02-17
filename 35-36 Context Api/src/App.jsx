import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import styles from "./App.module.css";
import TodoItems from "./components/TodoItems";
// import { useState } from "react";
import ErrorMsg from "./components/ErrorMsg";
import { TodoItemsContext } from "./store/todo-items-store";
import { useReducer } from "react";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.txtInput, dueDate: action.payload.dueDate },
    ];
  } else if (action.type === "DELETE_ITEM"){
    newTodoItems = currTodoItems.filter((item) => {
      if (item.name === action.payload.txtInput && item.dueDate === action.payload.dueDate) {
        return false;
      } else return true;
    });

  } return newTodoItems;
};

function App() {
  let errorMessage = "Please Add Todo Items.";
  // let [todoItems, setTodoItems] = useState([
  //   { name: "Buy Milk", dueDate: "4/10/2026" },
  //   { name: "Go To College", dueDate: "4/10/2026" },
  //   { name: "Enjoy", dueDate: "LifeTime" },
  // ]);

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (txtInput, dueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        txtInput,
        dueDate,
      },
    };
    dispatchTodoItems(newItemAction);

    //this will always provide latest value as the calls are asynchronous.
    // setTodoItems((currValue) =>[
    //   ...currValue,
    //   {name: txtInput, dueDate: dueDate }
    // ]);
    //this may or may not provide latest value as the calls are asynchronous.
    // let newItem = {name: txtInput, dueDate: dueDate };
    // let newTodoItems = [...todoItems, newItem];
    // setTodoItems(newTodoItems);
  };

  const deleteItem = (txtInput, dueDate) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        txtInput,
        dueDate,
      },
    }
     dispatchTodoItems(newItemAction);
    // let newTodoItems = todoItems.filter((item) => {
    //   if (item.name === txtInput && item.dueDate === dueDate) {
    //     return false;
    //   } else return true;
    // });
    // setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className={styles.todoContainer}>
        <AppName />
        <AddTodo />
        <ErrorMsg></ErrorMsg>
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
