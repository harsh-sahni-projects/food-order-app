import React, { useState } from "react";
import Header from './Components/Header'
import Introduction from './Components/Introduction';
import Menu from './Components/Menu';
import Modal from './Components/Modal';
import Footer from './Components/Footer';
import CartProvider from "./store/CartProvider";

function App() {

  // const DUMMY_MEALS = [
  //   {
  //     id: 'm1',
  //     name: 'Farmhouse Pizza',
  //     description: 'Onion, Capsicum, Grilled Mushroom & Tomato',
  //     price: 23,
  //   },
  //   {
  //     id: 'm2',
  //     name: 'Double Cheese Margherita',
  //     description: 'Loaded with extra cheese',
  //     price: 18,
  //   },
  //   {
  //     id: 'm3',
  //     name: 'Barbecue Burger',
  //     description: 'American, raw, premium veg',
  //     price: 12,
  //   },
  //   {
  //     id: 'm4',
  //     name: 'Green Bowl',
  //     description: 'Healthy...and green...',
  //     price: 12,
  //   },
  // ];

  const [isCartVisible, setCartVisibility] = useState(false);

  const showCart = () => {
      setCartVisibility(true);
  }

  const hideCart = () => {
      setCartVisibility(false);
  }

  const placeOrder = () => {
    alert("Order placed :)")
    hideCart();
  }

  return (
    <CartProvider>
      {isCartVisible &&
        <Modal title="Cart" onConfirm={placeOrder} onCancel={hideCart} />
      }
      <Header onShowCart={showCart}/>
      <Introduction />
      <Menu meals={DUMMY_MEALS} />
      <Footer />
    </CartProvider>
  );
}

export default App;
