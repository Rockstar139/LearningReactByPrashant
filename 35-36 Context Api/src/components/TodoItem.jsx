import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className={`row ${styles.rowSpace}`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className={`btn btn-danger ${styles.todoButton}`}
            onClick={()=>deleteItem(todoName, todoDate)}
          >
            <MdDelete /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
