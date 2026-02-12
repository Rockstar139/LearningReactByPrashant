import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import styles from "./App.module.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "4/10/2026" },
    { name: "Go To College", dueDate: "4/10/2026" },
    { name: "Enjoy", dueDate: "LifeTime" }
  ];
  return (
    <center className={styles.todoContainer}>
      <AppName />
      <AddTodo />
      <TodoItems todoItems = {todoItems}/>
    </center>
  );
}

export default App;
