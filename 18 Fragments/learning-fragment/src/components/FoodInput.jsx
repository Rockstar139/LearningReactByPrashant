import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnKeyDown, handleAddButtonClick }) => {
  // const handleOnchange = (event) =>{
  //     console.log(event.target.value)
  // }

  return (
    <div className={`${styles.inputContainer} `}>
      <div className={`${styles.inputBox} `}>
        <input id='txtInput'
          placeholder="Enter Food Item Here"
          type="text"
          className={`${styles.inputText}`}
          onKeyDown={handleOnKeyDown}
        />
      </div>
      <div className={`${styles.buttonBox} `}>
        <button
          className={`btn btn-success ${styles.inputButton}`}
          onClick={handleAddButtonClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default FoodInput;
