import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage({ cart, setCart, setOrders }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Cash on Delivery");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  const newOrder = {
    id: Math.floor(Math.random() * 100000),
    customer: {
      name,
      email,
      address,
      payment,
    },
    items: cart,
  };

  setOrders((prevOrders) => [...prevOrders, newOrder]);

  setCart([]);

  navigate("/order-success");
};

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className=" mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className=" form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className=" mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className=" form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className=" mb-3">
          <label className="form-label">Address</label>
          <textarea
            className=" form-control"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>

        <div className=" mb-3">
          <label className=" form-label">Payment Method</label>

          <select
            className=" form-select"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option>Cash on Delivery</option>
            <option>Credit Card</option>
            <option>PayPal</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
