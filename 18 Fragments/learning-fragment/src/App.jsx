import { useState } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = [];
  // foodItems = [
  //   { id: 1, name: "Roti" },
  //   { id: 2, name: "Sabzi" },
  //   { id: 3, name: "Sabzi" },
  //   { id: 4, name: "Milk" },
  //   { id: 5, name: "Milk" },
  // ];

  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  let [foodItems, setFoodItems] = useState([
  ]);
  // let [textToShow,setTextState] = useState();

  // if (foodItems.length == 0) {
  //   return <h3>I am still hungry.</h3>;
  // }

  let emptyMessage = foodItems.length == 0 ? <h3>I am still hungry.</h3> : null;

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = { id: foodItems.length + 1, name: event.target.value, isActive:false, };
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      event.target.value = "";
    }
  };

  const addButtonClick = (event) => {
    let txtVal = document.querySelector("#txtInput");
    let newFoodItem = { id: foodItems.length + 1, name: txtVal.value, isActive:false, };
    let newItems = [...foodItems, newFoodItem];
    setFoodItems(newItems);
    txtVal.value = "";
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput
          handleOnKeyDown={onKeyDown}
          handleAddButtonClick={addButtonClick}
        ></FoodInput>
        <ErrorMessage foodItems={foodItems} />
        <FoodItems foodItems={foodItems} />
      </Container>
    </>
  );
}

export default App;
