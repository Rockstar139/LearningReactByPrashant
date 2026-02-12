import Item from "./Item";

const FoodItems = ({foodItems}) => {
  
  return (
    <ul className="list-group list-group-flush">
      {foodItems.map((item) => (
       <Item key={item.id} foodItem = {item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
