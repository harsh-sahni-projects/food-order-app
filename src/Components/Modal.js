import React, { useContext, useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "../UI/Button";
import CartItems from "./CartItems";
import CartContext from "../store/cart-context";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const Modal = (props) => {
  const ctx = useContext(CartContext);
  const cartEmpty = ctx.items.length === 0;
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const nameInput = useRef(null);
  const addressInput = useRef(null);
  const phoneInput = useRef(null);

  const [nameClass, setNameClass] = useState("");
  const [addressClass, setAddressClass] = useState("");
  const [phoneClass, setPhoneClass] = useState("");

  const [nameErrMsg, setNameErrMsg] = useState("");
  const [addressErrMsg, setAddressErrMsg] = useState("");
  const [phoneErrMsg, setPhoneErrMsg] = useState("");

  useEffect(() => {
    if (nameInput.current) nameInput.current.focus();
  }, [showCheckoutForm]);

  // ------------ JS ---------------
  const proceedCheckout = () => {
    setShowCheckoutForm(true);
    // nameInput.current.focus(); <-- Will not work coz nameInput is currently not mounted to DOM. So, I have used useEffect with a dependency.
  };

  const placeOrder = (event) => {
    event.preventDefault();
    const name = nameInput.current.value.trim();
    const address = addressInput.current.value.trim();
    const phone = phoneInput.current.value.trim();

    const isNameValid = name.length > 0;
    if (!isNameValid) {
      setNameClass("");
      setTimeout(() => {
        setNameClass(styles.invalidInput);
      }, 0);
      setNameErrMsg("Name should be at least 1 char long");
    } else {
      setNameClass("");
      setNameErrMsg("");
    }

    const isAddressValid = address.length > 10;
    if (!isAddressValid) {
      setAddressClass("");
      setTimeout(() => {
        setAddressClass(styles.invalidInput);
      }, 0);
      setAddressErrMsg("Address should be more than 10 characters");
    } else {
      setAddressClass("");
      setAddressErrMsg("");
    }

    const isPhoneValid = phone.match(/^\d{10,12}$/);
    if (!isPhoneValid) {
      setPhoneClass("");
      setTimeout(() => {
        setPhoneClass(styles.invalidInput);
      }, 0);
      setPhoneErrMsg("Only numbers allowed - min 10 and max 12");
    } else {
      setPhoneClass("");
      setPhoneErrMsg("");
    }

    if (isNameValid && isAddressValid && isPhoneValid) {
      alert("Order placed :)");
    }
  };

  // ------------- HTML ---------------
  const modalHeading = (
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
  );

  const checkoutForm = (
    <>
      <hr className={styles.dividerLine} />
      <form onSubmit={placeOrder} className={styles.checkoutForm}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          ref={nameInput}
          maxLength="30"
          className={nameClass}
        />
        <label></label>
        <span className={styles.errCont}>{nameErrMsg}</span>

        <label htmlFor="address">Your Address:</label>
        <input
          type="text"
          id="address"
          ref={addressInput}
          maxLength="100"
          className={addressClass}
        />
        <label></label>
        <span className={styles.errCont}>{addressErrMsg}</span>

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          ref={phoneInput}
          maxLength="12"
          className={phoneClass}
        />
        <label></label>
        <span className={styles.errCont}>{phoneErrMsg}</span>

        <section>
          <Button type="button" onClick={() => setShowCheckoutForm(false)}>
            Back
          </Button>
          <Button>Place order</Button>
        </section>
      </form>
    </>
  );

  // --------------- Return -----------------

  return (
    <div className={styles.modalOuterContainer}>
      <Card className={styles.modal}>
        <div>
          {modalHeading}

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

          {showCheckoutForm && checkoutForm}
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
