import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function ProductDetailsPage({ addToCart }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  const renderStars = (rating = 0) => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? "⭐" : "☆";
    }
    return stars;
  };

  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id,
  );

  const handleAddToCart = () => {
    addToCart(product, quantity);

    setAddedMessage(true);

    setTimeout(() => {
      setAddedMessage(false);
    }, 2000);
  };

  const handleAddReview = (e) => {
    e.preventDefault();

    const newReview = {
      text: reviewText,
      rating: reviewRating,
    };
    setReviews([...reviews, newReview]);

    setReviewText("");
    setReviewRating(5);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className=" col-md-6 text-center">
          <img
            src={product.image}
            alt={product.name}
            className=" img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        <div className=" col-md-6">
          <h2>{product.name}</h2>

          <p className=" text-warning fs-5">{renderStars(product.rating)}</p>

          <h3 className=" text-success">${product.price}</h3>

          <p className="text-muted">Category: {product.category}</p>

          <p>{product.description}</p>

          <div className=" d-flex align-items-center gap-3 mb-4">
            <button
              className="btn btn-secondary"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>

            <span className=" mx-3"> {quantity}</span>

            <button
              className="btn btn-secondary"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {addedMessage && (
            <div className=" alert alert-success">Product added to cart!</div>
          )}

          <button
            className="btn btn-dark btn-lg px-5"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <hr className=" mt-5" />

      <h3>Customer Reviews</h3>

      <h3 className=" mt-4">Related Products</h3>

      <form onSubmit={handleAddReview} className=" mb-4">
        <div className=" mb-3">
          <label className=" form-label">Your Rating</label>

          <select
            className=" form-select"
            value={reviewRating}
            onChange={(e) => setReviewRating(parseInt(e.target.value))}
          >
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </div>

        <div className=" mb-3">
          <label className=" form-label">Your Review</label>

          <textarea
            className=" form-control"
            rows={3}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          ></textarea>
        </div>

        <button className=" btn btn-primary">Submit Review</button>
      </form>

      <div>
        {reviews.rating === 0 ? (
          <p>No Reviews</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className=" card mb-3 p-3">
              <p className=" text-warning">{renderStars(review.rating)}</p>
              <p>{review.text}</p>
            </div>
          ))
        )}
      </div>

      <div className=" row mt-3">
        {relatedProducts.map((item) => (
          <div className=" col-md-4 mb-4">
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
