import styles from "./Item.module.css"

const Item = ({foodItem}) => {
  const handleBuyButtonClicked = (event)=>{
    console.log(` ${foodItem.name} being bought.`);
    console.log(event);
  };

  return (
    <li className= {`list-group-item ${styles['kg-item']} `}>
      <span className={`kg-span ${styles['kg-item']} `}>{foodItem.name}
        <button className={`btn btn-info ${styles.button}`} onClick={(event)=> handleBuyButtonClicked(event)}>Buy</button>
      </span>
    </li>
  );
};

export default Item;
