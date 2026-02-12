import styles from "./Item.module.css"

const Item = ({foodItem}) => {
    console.log(styles);
  return (
    <li className= {`list-group-item ${styles['kg-item']} `}>
      <span className={`kg-span ${styles['kg-item']} `}>{foodItem.name}</span>
    </li>
  );
};

export default Item;
