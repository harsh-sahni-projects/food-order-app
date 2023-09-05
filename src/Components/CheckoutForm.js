import { useRef, useState, useEffect } from "react";
import styles from "./CheckoutForm.module.css";
import Button from "../UI/Button";

const CheckoutForm = (props) => {
  const hideFormFn = props.hideForm;
  const getCartItems = props.getCartItems;

  const nameInput = useRef(null);
  const addressInput = useRef(null);
  const phoneInput = useRef(null);

  const dbUrl = process.env.REACT_APP_DB_URL
    ? process.env.REACT_APP_DB_URL + "/orders.json"
    : null;

  useEffect(
    () => {
      if (nameInput.current) nameInput.current.focus();
    },
    [
      /*showCheckoutForm*/
    ]
  );

  const [nameClass, setNameClass] = useState("");
  const [addressClass, setAddressClass] = useState("");
  const [phoneClass, setPhoneClass] = useState("");

  const [nameErrMsg, setNameErrMsg] = useState("");
  const [addressErrMsg, setAddressErrMsg] = useState("");
  const [phoneErrMsg, setPhoneErrMsg] = useState("");

  const placeOrder = async (event) => {
    event.preventDefault();

    if (anyFormError()) return;
    if (!dbUrl) {
      alert("Order placed :)");
      return;
    }

    const orders = getCartItems();
    try {
      const res = await fetch(dbUrl, {
        method: "POST",
        body: JSON.stringify({
          id: nameInput.current.value,
          address: addressInput.current.value,
          phone: phoneInput.current.value,
          ...orders,
        }),
      });
      if (res.status === 200) {
        const resJson = await res.json();
        const orderID = resJson.name;
        alert(
          `Yay! Order placed. \nTo view your order go to orders history and add your name: ${nameInput.current.value} or your order id: ${orderID}`
        );
      }
    } catch (err) {
      alert(err.message);
    }
  };

  function anyFormError() {
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

    const isPhoneValid = phone.match(/^\+?\d{10,12}$/);
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

    return !(isNameValid && isAddressValid && isPhoneValid);
  }

  return (
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
          {/* <Button type="button" onClick={() => setShowCheckoutForm(false)}> */}
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              hideFormFn();
            }}
          >
            Back
          </Button>
          <Button>Place order</Button>
        </section>
      </form>
    </>
  );
};

export default CheckoutForm;