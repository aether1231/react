import React from "react";
import CartContext from "./CartContext";

const addItemToCartHandler = (item) => {};
const removeItemFromCartHandler = (id) => {};

const CartProvider = (props) => {
  const cartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  });

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
