import styles from './TodoItem.module.css'

function TodoItem({todoName, todoDate, handleDelButtonClick}) {
  return (
    <div className="container">
      <div className={`row ${styles.rowSpace}`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className={`btn btn-danger ${styles.todoButton}`} onClick={handleDelButtonClick} >Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
