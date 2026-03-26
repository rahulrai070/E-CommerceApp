import React from "react";
import { Link } from "react-router-dom";

function OrderSuccessPage() {
  const orderId = Math.floor(Math.random() * 100000);

  return (
    <div className="container mt-5 text-center">
      <h1 className="text-success">✅ Order Placed Successfully</h1>

      <p className="mt-3">Thank you for shopping with us.</p>

      <h4 className=" mt-3">Order ID: {orderId}</h4>
      <Link to="/" className="btn btn-primary mt-4">
        Continue Shopping
      </Link>
      
    </div>
  );
}

export default OrderSuccessPage;
