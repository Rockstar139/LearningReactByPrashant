import styles from './FoodInput.module.css';

const FoodInput = () =>{
    const handleOnchange = (event) =>{
        console.log(event.target.value)
    }

    return <input placeholder='Enter Food Item Here' className={styles.foodInput} type="text" onChange={handleOnchange}/>;
}

export default FoodInput;