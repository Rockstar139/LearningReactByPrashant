import styles from "./ErrorMsg.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const ErrorMsg = ({ }) => {
   const {todoItems} = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <div className="container">
        <div className={`row ${styles.rowSpace}`}>
          <div className={`col-10 `}>
            <h5 className="alert alert-danger">Please Add Todo Items.</h5>
          </div>
        </div>
      </div>
    )
  );
};

export default ErrorMsg;
