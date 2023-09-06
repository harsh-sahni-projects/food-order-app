import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "../UI/Button";
import CartItems from "./CartItems";
import CheckoutForm from "./CheckoutForm";
import CartContext from "../store/cart-context";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const Modal = (props) => {
  const ctx = useContext(CartContext);
  const cartEmpty = ctx.items.length === 0;
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const getCartItems = () => {
    return { items: ctx.items, totalAmount: ctx.totalAmount };
  };

  const hideForm = () => {
    setShowCheckoutForm(false);
  };

  // ------------ JS ---------------
  const proceedCheckout = () => {
    setShowCheckoutForm(true);
    // nameInput.current.focus(); <-- Will not work coz nameInput is currently not mounted to DOM. So, I have used useEffect with a dependency.
  };

  return (
    <div className={styles.modalOuterContainer}>
      <Card className={styles.modal}>
        <div>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>

          {!showCheckoutForm && (
            <div className={styles.content}>
              <CartItems />
            </div>
          )}

          {!cartEmpty && (
            <div className={styles["total-container"]}>
              <span>Total Amount</span>
              <span>${ctx.totalAmount}</span>
            </div>
          )}

          {showCheckoutForm && (
            <CheckoutForm
              getCartItems={getCartItems}
              hideForm={hideForm}
              closeForm={props.onCancel}
            />
          )}
        </div>

        {!showCheckoutForm && (
          <footer className={styles.actions}>
            <Button onClick={props.onCancel} className={styles.cancelBtn}>
              Close
            </Button>
            {!cartEmpty && (
              // <Button onClick={props.onConfirm}>Proceed to checkout</Button>
              <Button onClick={proceedCheckout}>Proceed to checkout</Button>
            )}
          </footer>
        )}
      </Card>
    </div>
  );
};

const CartModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCancel} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          onCancel={props.onCancel}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default CartModal;
