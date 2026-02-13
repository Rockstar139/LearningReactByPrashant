import styles from "./App.module.css";
import Display from "./components/Display.jsx";
import ButtonsContainer from "./components/ButtonsContainer.jsx";

import { useState } from "react";
function App() {
  let [txtInput, setTxtInput] = useState("");

  const onButtonClick = (buttonName) => {
    let tmpTxt = txtInput;
    let key = buttonName;
    if (key == "C") {
      tmpTxt = "";
    } 
    else if (key == "=") {
      tmpTxt = eval(tmpTxt);
    } else {
      tmpTxt = tmpTxt + key;
    }
    setTxtInput(tmpTxt);
  };
  return (
    <div className={styles.calculator}>
      <Display txtDisplay={txtInput} />
      <ButtonsContainer handleButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
