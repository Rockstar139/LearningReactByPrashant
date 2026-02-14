import styles from './AddTodo.module.css'
import { useState } from 'react'

function AddTodo({addButtonClick}) {
  let [txtInput, setTxtInput] = useState("");
  let [dueDate, setdueDate] = useState("");

  const onInputChange = (event) =>{
    setTxtInput(event.target.value)
  }

  const onDateChange = (event) =>{
    setdueDate(event.target.value)
  }

  const handleAddButtonClick = () =>{
    if(txtInput == ""){
      alert("Please Enter Todo Text");
    }
    else if(datePicker == ""){
      alert("Please Enter Todo Date");
    }
    else{
      addButtonClick(txtInput,dueDate);
      setTxtInput("");
      setdueDate("");
    }
  }
  return (
    
    <div className="container">
      <div className={`row ${styles.rowSpace}`}>
        <div className="col-6">
          <input id='txtInput' type="text" className = {styles.todoInput}placeholder="Enter Todo Text" onChange={onInputChange} value={txtInput}/>
        </div>
        <div className="col-4">
          <input id='datePicker' className = {styles.todoInput} type="Date" onChange={onDateChange} value={dueDate}/>
        </div>
        <div className="col-2">
          <button className={`btn btn-success ${styles.todoButton}`} onClick={handleAddButtonClick}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
