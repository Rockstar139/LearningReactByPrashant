import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({}) => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className={styles.todoContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          key={item.name}
        />
      ))}
    </div>
  );
};

export default TodoItems;
