import styles from './AddTodo.module.css'

function AddTodo() {
  return (
    <div className="container">
      <div className={`row ${styles.rowSpace}`}>
        <div className="col-6">
          <input type="text" className = {styles.todoInput}placeholder="Enter Todo Text" />
        </div>
        <div className="col-4">
          <input className = {styles.todoInput} type="Date" />
        </div>
        <div className="col-2">
          <button className={`btn btn-success ${styles.todoButton}`}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
