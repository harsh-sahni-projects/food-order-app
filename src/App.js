import React, { useState } from "react";
import Header from './Components/Header'
import Introduction from './Components/Introduction';
import Menu from './Components/Menu';
import Modal from './Components/Modal';
import CartProvider from "./store/CartProvider";

function App() {

  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  let cartItems = []
  
  const [isCartVisible, setCartVisibility] = useState(false);

  const showCart = () => {
      setCartVisibility(true);
  }

  const hideCart = () => {
      setCartVisibility(false);
  }

  const placeOrder = () => {
    console.log('Ordering...');
    hideCart();
  }

  return (
    <CartProvider>
      {isCartVisible && <Modal title="Cart" onConfirm={placeOrder} onCancel={hideCart} />}
      <Header onShowCart={showCart}/>
      <Introduction />
      <Menu meals={DUMMY_MEALS} />
    </CartProvider>
  );
}

export default App;
