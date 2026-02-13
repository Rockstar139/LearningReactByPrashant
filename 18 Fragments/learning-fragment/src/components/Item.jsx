import styles from "./Item.module.css"

const Item = ({foodItem, handleBuyButton,isActive}) => {
  // const handleBuyButtonClicked = (event)=>{
  //   console.log(` ${foodItem.name} being bought.`);
  //   console.log(event);
  // };

  return (
    <li className= {`list-group-item ${isActive == true ? 'list-group-item-primary': ''} ${styles['kg-item']} `}>
      <span className={`kg-span ${styles['kg-item']} `}>{foodItem.name}
        <button className={`btn btn-info ${styles.button}`} onClick={handleBuyButton}>Buy</button>
      </span>
    </li>
  );
};

export default Item;
