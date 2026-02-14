import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css'

const TodoItems = ({ todoItems, handleDelButtonClick}) => {
  return (
    <div className={styles.todoContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          key={item.name}
          handleDelButtonClick={()=>handleDelButtonClick(item.name,item.dueDate)}
        />
      ))}
    </div>
  );
};

export default TodoItems;
