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
          <div className="logo">zapatillas</div>
          <ul className="nav-links">
            <li><a href="#">Colecciones</a></li>
            <li><a href="#">Hombres</a></li>
            <li><a href="#">Mujeres</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
          <div className="carrito-usuario">
            <div className="icono-carrito">
              <img src="./images/icon-cart.svg" alt="Carrito" />
              {contadorCarrito > 0 && <span className="contador-carrito">{contadorCarrito}</span>}
            </div>
            <img className="avatar-usuario" src="./images/image-avatar.png" alt="Avatar del usuario" />
          </div>
        </nav>
      </header>

      <main>
        <div className="producto">
          <div className="imagen-producto">
            <img src="./images/image-product-1.jpg" alt="Zapatilla" />
            <div className="miniaturas">
              <img src="./images/image-product-1-thumbnail.jpg" alt="Miniatura 1" />
              <img src="./images/image-product-2-thumbnail.jpg" alt="Miniatura 2" />
              <img src="./images/image-product-3-thumbnail.jpg" alt="Miniatura 3" />
              <img src="./images/image-product-4-thumbnail.jpg" alt="Miniatura 4" />
            </div>
          </div>

          <div className="detalles-producto">
            <h2 className="compania">Compañía de Zapatillas</h2>
            <h1 className="titulo-producto">Zapatillas Edición Limitada Otoño</h1>
            <p className="descripcion-producto">
              Estas zapatillas de perfil bajo son el compañero perfecto para tu ropa casual. Con una suela exterior de goma duradera, resistirán todo lo que el clima pueda ofrecer.
            </p>
            <div className="seccion-precio">
              <div className="precio">
                <span className="precio-actual">$125.00</span>
                <span className="descuento">50%</span>
              </div>
              <span className="precio-original">$250.00</span>
            </div>
            <div className="seccion-carrito">
              <div className="control-cantidad">
                <button 
                  className="disminuir" 
                  onClick={() => manejarCambioCantidad("disminuir")}
                >
                  -
                </button>
                <span className="cantidad">{cantidad}</span>
                <button 
                  className="aumentar" 
                  onClick={() => manejarCambioCantidad("aumentar")}
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
