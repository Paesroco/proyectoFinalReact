import React, { useState } from "react";
import "./style.css";


function App() {
  const [cantidad, setCantidad] = useState(0);
  const [contadorCarrito, setContadorCarrito] = useState(0);

  const manejarCambioCantidad = (accion) => {
    if (accion === "aumentar") {
      setCantidad(cantidad + 1);
    } else if (accion === "disminuir" && cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    if (cantidad > 0) {
      setContadorCarrito(contadorCarrito + cantidad);
      setCantidad(0);
    }
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">sneakers</div>
          <ul className="nav-links">
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="cart-user">
            <div className="cart-icon">
              <img src="./images/icon-cart.svg" alt="Cart" />
            </div>
            <img className="user-avatar" src="./images/image-avatar.png" alt="User Avatar" />
          </div>
        </nav>
      </header>

      <main>
        <div className="product">
          <div className="product-image">
            <img src="./images/image-product-1.jpg" alt="Sneaker" />
            <div className="thumbnails">
              <img src="./images/image-product-1-thumbnail.jpg" alt="Thumbnail 1" />
              <img src="./images/image-product-2-thumbnail.jpg" alt="Thumbnail 2" />
              <img src="./images/image-product-3-thumbnail.jpg" alt="Thumbnail 3" />
              <img src="./images/image-product-4-thumbnail.jpg" alt="Thumbnail 4" />
            </div>
          </div>

          <div className="product-details">
            <h2 className="company">Sneaker Company</h2>
            <h1 className="product-title">Fall Limited Edition Sneakers</h1>
            <p className="product-description">
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="seccion-precio">
              <div className="precio">
                <span className="precio-actual">$125.00</span>
                <span className="descuento">50%</span>
              </div>
              <span className="precio-original">$250.00</span>
            </div>
            <div className="cart-section">
              <div className="quantity-control">
                <button 
                  className="decrease" 
                  onClick={() => handleQuantityChange("decrease")}
                >
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button 
                  className="increase" 
                  onClick={() => handleQuantityChange("increase")}
                >
                  +
                </button>
              </div>
              <button className="agregar-al-carrito" onClick={agregarAlCarrito}>
                <img src="./images/icon-cart.svg" alt="Icono de Carrito" />
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
