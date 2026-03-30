import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function ProductListingPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const categories = ["All", "Shoes", "Clothing", "Accessories", "Electronics"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
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
      <h1 className=" mb-4">All Products</h1>

      <div className="mb-3">
        {categories.map((cat) => (
          <button
            key={cat}
            className="btn btn-outline-dark me-2"
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mb-4">
        <label className="form-label fw-bold me-2">Sort By:</label>

        <select
          className="form-select"
          style={{ maxWidth: "250px" }}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="row">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductListingPage;
