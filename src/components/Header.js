import React from "react";
import { Link } from "react-router-dom";

function Header({ cart }) {
  const totalItems = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          MyStore
        </Link>

        <button
          className=" navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarNav">
          <ul className=" navbar-nav ms-auto align-items-center">
            <li className=" nav-item">
              <Link className=" nav-link" to="/">
                Home
              </Link>
            </li>

            <li className=" nav-item">
              <Link className=" nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className=" nav-item position-relative">
              <Link className=" nav-link" to="/cart">
                Cart 🛒
              </Link>

              {totalItems > 0 && (
                <span className=" position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </li>

            <li className="nav-item">
              <Link className=" nav-link" to="orders">
                Orders
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
