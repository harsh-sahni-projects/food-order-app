import styles from './HeaderCartButton.module.css';
import Button from '../UI/Button';
import { useContext } from 'react';
import CartCtx from '../store/cart-context';

const HeaderCartButton = (props) => {
    const ctx = useContext(CartCtx);
    console.log('All items:', ctx.items);
    const totalItems = ctx.items.reduce((acc,item) => {
        console.log(item);
        return acc + item.quantity
    }, 0);
    return (
        <Button className={styles.button} onClick={props.onClick}>
            <span>Your cart</span>
            <span className={styles.badge}>{totalItems}</span>
        </Button>
    )
}

export default HeaderCartButton;