import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ foodItems }) => {
  let [activeItemIds, setActiveItemIds] = useState([]);

  const onBuyButtonClick = (item, event) => {
    if(!activeItemIds.includes(item.id)){
      console.log(item.name);
      let newActiveItems = [...activeItemIds, item.id]
      setActiveItemIds(newActiveItems);
    }
    
  };
  return (
    <ul className="list-group list-group-flush">
      {foodItems.map((item) => (
        <Item
          key={item.id}
          foodItem={item}
          handleBuyButton={(event)=> onBuyButtonClick(item,event)}
          isActive={activeItemIds.includes(item.id)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
