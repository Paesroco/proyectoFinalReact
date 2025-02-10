import React from "react";
import "./style.css";

const ControlCantidad = ({ quantity, handleQuantityChange }) => {
  return (
    <div className="quantity-control">
      <button onClick={() => handleQuantityChange("decrease")}>-</button>
      <span className="quantity">{quantity}</span>
      <button onClick={() => handleQuantityChange("increase")}>+</button>
    </div>
  );
};

export default ControlCantidad;
