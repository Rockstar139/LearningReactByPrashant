import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import styles from "./App.module.css";
import TodoItems from "./components/TodoItems";
import ErrorMsg from "./components/ErrorMsg";
import TodoItemsContextProvider from "./store/todo-items-store";



function App() {

  return (
    <TodoItemsContextProvider>
      <center className={styles.todoContainer}>
        <AppName />
        <AddTodo />
        <ErrorMsg></ErrorMsg>
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
