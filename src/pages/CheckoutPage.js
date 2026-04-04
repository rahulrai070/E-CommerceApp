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

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return(
      <div className=" container text-center mt-5">
        <h4>Your cart is empty 😢</h4>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>

      <div className="row mt-4">
        {/* LEFT SIDE FORM */}
        <div className="col-lg-7">
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0">
            <h5 className="fw-bold mb-3">Shipping Details</h5>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                placeholder="Enter your address"
                rows="3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Payment Method</label>

              <select
                className="form-select"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              >
                <option>Cash on Delivery</option>
                <option>Credit Card</option>
                <option>PayPal</option>
              </select>
            </div>

            <button type="submit" className="btn btn-dark w-100 py-2 fw-bold">
              🛍️ Place Order
            </button>
          </form>
        </div>

        {/* RIGHT SIDE SUMMARY */}
        <div className="col-lg-5 mt-4 mt-lg-0">
          <div className="card p-4 shadow border-0 bg-light">
            <h5 className="fw-bold mb-3">Order Summary</h5>

            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between mb-2"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}

            <hr />

            <h5 className="fw-bold text-success">
              Total: ${totalPrice.toFixed(2)}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
