import styles from './HeaderCartButton.module.css';
import Button from '../UI/Button';
import { useContext, useEffect, useState } from 'react';
import CartCtx from '../store/cart-context';
import { FaShoppingCart } from 'react-icons/fa';

const HeaderCartButton = (props) => {
    const ctx = useContext(CartCtx);
    const totalItems = ctx.items.reduce((acc,item) => {
        return acc + item.quantity
    }, 0);

    const [animateBtn, setAnimateBtn] = useState(false);
    const btnClasses = `${styles.button}  ${animateBtn ? styles.bump : ''}`

    useEffect(() => {
        if (totalItems === 0) return;

        setAnimateBtn(true);

        /* We also need to clear this timer in case of this 
        cart button component is removed. It will not be removed
        in this current project, but its good practice to clear
        the timer. */
        const timer = setTimeout(() => {
            setAnimateBtn(false);
        }, 300);

        /* 1. If we add multiple items collectively, then we need to 
        clear the old timer.
        
        2. If we return a function from useEffect, it will called
        automatically as a cleanup function by React */
        return () => {
            clearTimeout(timer);
        }
    }, [totalItems])


    return (
        <Button className={btnClasses}
                onClick={props.onClick}
                >
            <FaShoppingCart className={styles.cartIcon}/>
            <span>Your cart</span>
            <span className={styles.badge}>{totalItems}</span>
        </Button>
    )
}

export default HeaderCartButton;