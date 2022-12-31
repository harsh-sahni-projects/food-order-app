import styles from './HeaderCartButton.module.css';
import Button from '../UI/Button';
import { useContext } from 'react';
import CartCtx from '../store/cart-context';

const HeaderCartButton = (props) => {
    const ctx = useContext(CartCtx);
    return (
        <Button className={styles.button} onClick={props.onClick}>
            <span>Your cart</span>
            <span className={styles.badge}>{ctx.totalAmount}</span>
        </Button>
    )
}

export default HeaderCartButton;