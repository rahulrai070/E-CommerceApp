import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";

function ProductListingPage({ addToCart }) {
  const [search, setSearch] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "All";

  const [category, setCategory] = useState(initialCategory);

  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState(1000);

  const categories = ["All", "Shoes", "Clothing", "Accessories", "Electronics"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;
    const matchesPrice = product.price <= priceRange;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  let sortedProducts = [...filteredProducts];

  if (sortOption === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOption === "high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortOption === "rating") {
    sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  return (
    <div className="container mt-4">
      <h1 className=" mb-4 fw-bold">All Products</h1>
      <div className=" card p-4 mb-4 shadow-sm">
        <div className="mb-3 d-flex flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={` btn me-2 mb-2 ${
                category === cat ? "btn-dark" : "btn-outline-dark"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="mt-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-bold">Price Range</span>
          <span className="text-primary fw-bold">${priceRange}</span>
        </div>

        <input
          type="range"
          className="form-range"
          min="0"
          max="1000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
      </div>

      <p className=" text-muted">Showing {sortedProducts.length} products</p>
      <div />

      <div className="row">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))
        ) : (
          <p className=" text-center text-muted mt-4">
            No products found 😢 Try adjusting filters
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductListingPage;
