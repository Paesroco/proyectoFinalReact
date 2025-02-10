import React from "react";
import ControlCantidad from "./ControlCantidad";
import Boton from "./Boton";
import "./style.css";

const ProductDetails = ({ quantity, handleQuantityChange, addToCart }) => {
  return (
    <div className="product-details">
      <h2 className="company">Sneaker Company</h2>
      <h1 className="product-title">Fall Limited Edition Sneakers</h1>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
      <div className="price-section">
        <div className="price">
          <span className="current-price">$125.00</span>
          <span className="discount">50%</span>
        </div>
        <span className="original-price">$250.00</span>
      </div>
      <div className="cart-section">
        <ControlCantidad quantity={quantity} handleQuantityChange={handleQuantityChange} />
        <Boton addToCart={addToCart} />
      </div>
    </div>
  );
};

export default ProductDetails;
