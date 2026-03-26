import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const renderStars = (rating = 0) => {
    let stars = "";

    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? "⭐" : "☆";
    }

    return stars;
  };

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className=" overflow-hidden " style={{height: "200px"}}>
        <img
          src={product.image}
          alt={product.name}
          className=" card-img-top h-100 object-fit-cover"
        />
      </div>

      <div className="card-body text-center d-flex flex-column">
        <h6 className="card-title fw-bold mb-1">{product.name}</h6>
        <p className=" text-warning mb-1">{renderStars(product.rating)}</p>

        <p className=" text-success fw-bold fs-5 mb-2">${product.price}</p>

        <Link to={`/product/${product.id}`} className="btn btn-outline-dark mt-auto">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
