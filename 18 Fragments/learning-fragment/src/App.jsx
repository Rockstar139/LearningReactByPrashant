import { useState } from "react";

import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = [];
  foodItems = [
    { id: 1, name: "Roti" },
    { id: 2, name: "Sabzi" },
    { id: 3, name: "Sabzi" },
    { id: 4, name: "Milk" },
    { id: 5, name: "Milk" },
  ];
  // if (foodItems.length == 0) {
  //   return <h3>I am still hungry.</h3>;
  // }

  let emptyMessage = foodItems.length == 0 ? <h3>I am still hungry.</h3> : null;

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        {/* {emptyMessage} */}
        <ErrorMessage foodItems={foodItems} />
        <FoodInput></FoodInput>
        <FoodItems foodItems={foodItems} />
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for health and well
          being
        </p>
      </Container> */}
    </>
  );
}

export default App;
