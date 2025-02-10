import React from "react";
import "./style.css";

const CartButton = ({ addToCart }) => {
  return (
    <button className="add-to-cart" onClick={addToCart}>
      <img src="./images/icon-cart.svg" alt="Cart Icon" />
      Add to cart
    </button>
  );
};

export default CartButton;
