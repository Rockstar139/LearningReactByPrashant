import styles from "./Display.module.css";

const Display = ({txtDisplay}) =>{
    return <input className={styles.display} type="text" readOnly value={txtDisplay}/>
}

export default Display;