import styles from './HeaderCartButton.module.css';
import Button from '../UI/Button';
import { useContext, useEffect } from 'react';
import CartCtx from '../store/cart-context';

const HeaderCartButton = (props) => {
    const ctx = useContext(CartCtx);
    const totalItems = ctx.items.reduce((acc,item) => {
        return acc + item.quantity
    }, 0);



    useEffect(() => {
        
    })
    return (
        <Button className={styles.button}
                onClick={props.onClick}
                >
            <span>Your cart</span>
            <span className={styles.badge}>{totalItems}</span>
        </Button>
    )
}

export default HeaderCartButton;