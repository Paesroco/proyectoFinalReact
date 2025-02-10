import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">sneakers</div>
        <ul className="nav-links">
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="cart-user">
          <div className="cart-icon">
            <img src="./images/icon-cart.svg" alt="Cart" />
          </div>
          <img
            className="user-avatar"
            src="./images/image-avatar.png"
            alt="User Avatar"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
