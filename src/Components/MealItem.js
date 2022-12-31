import { useContext, useRef } from 'react';

import styles from './MealItem.module.css';
import Button from '../UI/Button';
import CartContext from '../store/cart-context';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const itemCount = useRef(0);
    // itemCount.current.value = 0;

    const addToCart = () => {
        const item = {
            name: props.name,
            id: props.id,
            quantity: parseInt(itemCount.current.value),
            price: parseFloat(parseFloat(itemCount.current.value * props.price).toFixed(2)) // toFixed() converts it to string, so agian using parseFloat to again convert it into number
        }
        console.log('--')
        console.log(item);
        cartCtx.addItem(item);
        // if (!itemCount.current.value) {
        //     return;
        // }
        // const itemName = props.name;
        // const reqItemCount = parseInt(itemCount.current.value, 10);
        
        // cartCtx[itemName] = (cartCtx[itemName]) ? cartCtx[itemName] + reqItemCount : reqItemCount;
        
        // console.log(cartCtx);
    }

    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>${props.price.toFixed(2)}</div>
            </div>
            <div>
                <div>
                    <label htmlFor={props.id}>Amount</label>
                    <input className={styles.amount}
                           id={props.id}
                           ref={itemCount}
                           type="number"
                           min='1'
                           max='5'
                           step='1'
                           defaultValue='1'
                    />
                    {/* To make input modifiable from outside, use it like this: <input {...props.input} /> */}
                </div>
                <Button className={styles.addButton} onClick={addToCart}>+ Add</Button>
            </div>
        </div>
    )   
}

export default MealItem;