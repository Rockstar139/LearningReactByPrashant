import styles from "./AddTodo.module.css";
import { useRef } from "react";
import { IoIosAdd } from "react-icons/io";

function AddTodo({ addButtonClick }) {
  // let [txtInput, setTxtInput] = useState("");
  // let [dueDate, setdueDate] = useState("");
  let txtNameElement = useRef();
  let dueDateElement = useRef();

  // const onInputChange = (event) => {
  //   setTxtInput(event.target.value);
  // };

  // const onDateChange = (event) => {
  //   setdueDate(event.target.value);
  //   console.log(txtNameElement.current, dueDateElement.current);
  // };

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    let txtInput = txtNameElement.current.value;
    let dueDate = dueDateElement.current.value;
    if(txtInput == ""){
      alert("Please Enter Todo Text");
    } else if (datePicker == "") {
      alert("Please Enter Todo Date");
    } else {
      addButtonClick(txtInput, dueDate);
      txtNameElement.current.value = "";
      dueDateElement.current.value = "";
      // setTxtInput("");
      // setdueDate("");
    }
  };
  return (
    <div className="container">
      <form action={""}
        onSubmit={handleAddButtonClick}>
        <div className={`row ${styles.rowSpace}`}>
          <div className="col-6">
            <input
              id="txtInput"
              type="text"
              ref={txtNameElement}
              className={styles.todoInput}
              placeholder="Enter Todo Text"
              // onChange={onInputChange}
              // value={txtInput}
            />
          </div>
          <div className="col-4">
            <input
              id="datePicker"
              ref={dueDateElement}
              className={styles.todoInput}
              type="Date"
              // onChange={onDateChange}
              // value={dueDate}
            />
          </div>
          <div className="col-2">
            <button type="submit"
              className={`btn btn-success ${styles.todoButton}`}
            >
              <IoIosAdd /> Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
