import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';
import Card from './Card';
import Button from '../UI/Button';
import CartItems from './CartItems';


const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onClick} />
    )
}

const Modal = (props) => {
    const tempCartItems = [{id: 'item1', name: 'sushi', amount: 2, price: 10}]
    const cartItems = <ul className={styles["cart-items-list"]}>
        {tempCartItems.map(cartItem => (
            <li key={cartItem.id}>{cartItem.name}</li>
        ))}
    </ul>

    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>
                    {props.title}
                </h2>
            </header>
            <div className={styles.content}>
                    {cartItems}
                    {/* <CartItems/> */}
            </div>
            <div className={styles['total-container']}>
                <span>Total Amount</span>
                <span>$33.44</span>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onCancel} className={styles.cancelBtn}>Cancel</Button>
                <Button onClick={props.onConfirm}>Place order</Button>
            </footer>
        </Card>
    )
}

const CartModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onCancel}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Modal title={props.title} onCancel={props.onCancel} onConfirm={props.onConfirm}/>,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    )
}

export default CartModal;