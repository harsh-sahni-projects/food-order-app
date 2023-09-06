import React, { useState, useEffect, useMemo } from "react";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import Menu from "./Components/Menu";
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";
import CartProvider from "./store/CartProvider";

require("dotenv").config();

function App() {
  const DUMMY_MEALS = useMemo(() => {
    return [
      {
        id: "m1",
        name: "Farmhouse Pizza",
        description: "Onion, Capsicum, Grilled Mushroom & Tomato",
        price: 23,
      },
      {
        id: "m2",
        name: "Double Cheese Margherita",
        description: "Loaded with extra cheese",
        price: 18,
      },
      {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, premium veg",
        price: 12,
      },
      {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 12,
      },
    ];
  }, []);

  const [allMeals, setAllMeals] = useState([]);
  useEffect(() => {
    populateMeals();

    async function populateMeals() {
      if (!process.env.REACT_APP_DB_URL) {
        setAllMeals(DUMMY_MEALS);
        return;
      }

      const dbUrl = process.env.REACT_APP_DB_URL + "/meals.json";
      const res = await fetch(dbUrl);
      if (!res.status === 200) {
        setAllMeals(DUMMY_MEALS);
        return;
      }

      const mealsJson = await res.json();
      const tempMeals = [];
      for (let id in mealsJson) {
        let meal = {
          id,
          ...mealsJson[id],
        };
        tempMeals.push(meal);
      }
      setAllMeals(tempMeals);
    }
  }, [DUMMY_MEALS]);

  const [isCartVisible, setCartVisibility] = useState(false);

  const showCart = () => {
    setCartVisibility(true);
  };

  const hideCart = () => {
    setCartVisibility(false);
  };

  const placeOrder = () => {
    alert("Order placed :)");
    hideCart();
  };

  return (
    <CartProvider>
      {isCartVisible && (
        <Modal title="Cart" onConfirm={placeOrder} onCancel={hideCart} />
      )}
      <Header onShowCart={showCart} />
      <Introduction />
      <Menu meals={allMeals} />
      <Footer />
    </CartProvider>
  );
}

export default App;
