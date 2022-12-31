import { useContext } from 'react';
import styles from './CartItems.module.css';
import CartCtx from '../store/cart-context';

const CartItems = () => {
    const ctx = useContext(CartCtx);
    // const cartItems = ctx['cartItems'];

    return (
        <div className={styles.div}>
            <table className={styles.itemContainer}>
                <thead>
                    <tr>
                        <th className={styles.name}>Name</th>
                        <th className={styles.quantity}>Quantity</th>
                        <th className={styles.unitPrice}>Unit Price</th>
                        <th className={styles.total}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {ctx.items.map(item => (
                        <tr>
                            <td className={styles.name}>
                                {item.name}
                            </td>
                            <td className={styles.quantity}>
                                {item.quantity}
                            </td>
                            <td className={styles.unitPrice}>
                                {item.singleUnitPrice}
                            </td>
                            <td className={styles.total}>
                                {item.itemPurchaseAmount}
                            </td>
                        </tr>
                    ))}

                </tbody>
                </table>
            {/* {ctx.totalAmount} */}
            {/* {Object.keys(cartItems).map(item => (
                <div>{item.name}</div>
            ))} */}
        </div>
    )
}

export default CartItems;