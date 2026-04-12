import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header({ cart }) {
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = (cart || []).reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          
          {/* LOGO */}
          <NavLink className="navbar-brand fw-bold" to="/">
            MyStore
          </NavLink>

          {/* MOBILE BUTTON */}
          <button
            className="navbar-toggler d-lg-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* DESKTOP MENU */}
          <ul className="navbar-nav d-none d-lg-flex flex-row gap-4 ms-auto">
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>

            {/* ✅ FIXED CART */}
            <li>
              <NavLink className="nav-link cart-link" to="/cart">
                <span>Cart 🛒</span>

                {totalItems > 0 && (
                  <span className="cart-badge">{totalItems}</span>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to="/orders">
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>

        <NavLink
          to="/products"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Products
        </NavLink>

        {/* ✅ FIXED CART (MOBILE) */}
        <NavLink
          to="/cart"
          className="nav-link cart-link"
          onClick={() => setIsOpen(false)}
        >
          <span>Cart 🛒</span>

          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </NavLink>

        <NavLink
          to="/orders"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Orders
        </NavLink>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
}

export default Header;