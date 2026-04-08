import React from "react";
import { NavLink } from "react-router-dom";

function Header({ cart }) {
  const totalItems = (cart || []).reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          MyStore
        </NavLink>

        <button
          className=" navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarNav">
          <ul className=" navbar-nav ms-auto align-items-lg-center gap-lg-3 text-center text-lg-start">
            <li className=" nav-item">
              <NavLink className=" nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className=" nav-item">
              <NavLink className=" nav-link" to="/products">
                Products
              </NavLink>
            </li>

            <li className=" nav-item position-relative">
              <NavLink className=" nav-link" to="/cart">
                Cart <span className=" ms-1">🛒</span>
              </NavLink>

              {totalItems > 0 && (
                <span className=" position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-badge">
                  {totalItems}
                </span>
              )}
            </li>

            <li className="nav-item">
              <NavLink className=" nav-link" to="/orders">
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
