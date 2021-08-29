import styles from './MealItem.module.css';
import Button from '../UI/Button';

const MealItem = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>${props.price}</div>
            </div>
            <div>
                <div>
                    <label>Amount </label>
                    <input className={styles.amount} type="number" min="0"/>
                </div>
                <Button className={styles.addButton}>+Add</Button>
            </div>
        </div>
    )   
}

export default MealItem;