import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header({ cart }) {
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = (cart || []).reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );

  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <NavLink className="navbar-brand fw-bold" to="/">
            MyStore
          </NavLink>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler d-lg-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
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

            <li className="position-relative">
              <NavLink className="nav-link" to="/cart">
                Cart 🛒
              </NavLink>
              {totalItems > 0 && (
                <span className="badge bg-danger cart-badge">{totalItems}</span>
              )}
            </li>

            <li>
              <NavLink className="nav-link" to="/orders">
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
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
        <NavLink
          to="/cart"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Cart 🛒
        </NavLink>
        <NavLink
          to="/orders"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Orders
        </NavLink>
      </div>

      {isOpen && (
        <div className=" menu-overlay" onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
