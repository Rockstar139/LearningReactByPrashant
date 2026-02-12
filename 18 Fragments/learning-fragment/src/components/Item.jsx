const Item = ({foodItem}) => {
  return (
    <li className="list-group-item">
      {foodItem.name}
    </li>
  );
};

export default Item;
