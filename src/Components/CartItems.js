import { useContext } from 'react';
import styles from './CartItems.module.css';
import CartCtx from '../store/cart-context';

const CartItems = () => {
    const ctx = useContext(CartCtx);
    
    const cartEmpty = ctx.items.length == 0;

    const addItem = (item) => {
        ctx.addItem({
            ...item,
            quantity: 1,
            itemPurchaseAmount: item.singleUnitPrice
        });
    }
    const removeItem = (item) => {
        ctx.removeItem(item.id)
    }
    return (
        <div className={styles.div}>
            {cartEmpty && <em className={styles.note}>Your cart is empty. Please add some items.</em>}

            {!cartEmpty && ctx.items.map(item => (
                <div className={styles.container} key={item.id}>
                    <div className={styles.leftDiv}>
                        <div className={styles.itemName}>{item.name}</div>
                        <span className={styles.unitPrice}>${item.singleUnitPrice}</span>
                        <span className={styles.quantity}>x {item.quantity}</span>
                    </div>
                    <div className={styles.rightDiv}>
                        <button className={styles.decBtn} onClick={removeItem.bind(null, item)}>-</button>
                        <button className={styles.incBtn} onClick={addItem.bind(null, item)}>+</button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default CartItems;