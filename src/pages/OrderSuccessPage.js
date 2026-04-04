import React from "react";
import { Link } from "react-router-dom";

function OrderSuccessPage() {
  const orderId = Math.floor(Math.random() * 100000);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5 text-center shadow border-0 success-card">
        
        <div className="mb-4">
          <span className="display-1 text-success">✔</span>
        </div>

        
        <h2 className="fw-bold text-success">Order Placed Successfully!</h2>

        <p className="text-muted mt-3">Thank you for shopping with us 🎉</p>

        
        <h5 className="mt-3">
          Order ID: <span className="text-primary">#{orderId}</span>
        </h5>

        {/* BUTTON */}
        <Link to="/" className="btn btn-dark mt-4 px-4 py-2">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccessPage;
