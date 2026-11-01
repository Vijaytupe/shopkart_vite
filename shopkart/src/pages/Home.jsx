import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

// Keep the product data outside the component so it is not recreated
// every time Home renders.
const products = [
  {
    id: 1,
    name: "boAt Rockerz 450",
    category: "Electronics",
    price: 1599,
    rating: 4.5,
    reviews: 1200,
    image: "/images/products/headphones.png",
  },
  {
    id: 2,
    name: "Noise ColorFit Pro 4",
    category: "Electronics",
    price: 2999,
    rating: 4.6,
    reviews: 2300,
    image: "/images/products/noisefit.png",
  },
  {
    id: 3,
    name: "Red Tape Sneakers",
    category: "Fashion",
    price: 2099,
    rating: 4.5,
    reviews: 890,
    image: "/images/products/sneakers.png",
  },
  {
    id: 4,
    name: "Levi's Jeans",
    category: "Fashion",
    price: 2099,
    rating: 4.5,
    reviews: 890,
    image: "/images/products/jeans.png",
  },
  {
    id: 5,
    name: "boAt Airdopes 141",
    category: "Electronics",
    price: 1299,
    rating: 4.4,
    reviews: 3400,
    image: "/images/products/airdopes.png",
  },
  {
    id: 6,
    name: "iPhone 17 Pro Max",
    category: "Electronics",
    price: 124000,
    rating: 4.9,
    reviews: 2100,
    image: "/images/products/iphone.png",
  },
  {
    id: 7,
    name: "Men's Casual Shirt",
    category: "Fashion",
    price: 899,
    rating: 4.3,
    reviews: 760,
    image: "/images/products/ferrari.png",
  },
  {
    id: 8,
    name: "Minimalist Table Lamp",
    category: "Home & Kitchen",
    price: 1199,
    rating: 4.5,
    reviews: 540,
    image: "/images/products/lamp.png",
  },
];

const categories = [
  {
    name: "Electronics",
    count: "1200+ Products",
    image: "/images/category-electronics.png",
    className: "electronics",
  },
  {
    name: "Fashion",
    count: "1800+ Products",
    image: "/images/category-fashion.png",
    className: "fashion",
  },
  {
    name: "Home & Kitchen",
    count: "950+ Products",
    image: "/images/category-home.png",
    className: "home-kitchen",
  },
  {
    name: "Beauty & Personal Care",
    count: "750+ Products",
    image: "/images/category-beauty.png",
    className: "beauty",
  },
  {
    name: "Sports & Fitness",
    count: "600+ Products",
    image: "/images/category-fitness.png",
    className: "sports",
  },
  {
    name: "Books & Stationery",
    count: "500+ Products",
    image: "/images/category-books.png",
    className: "books",
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

function Home() {
  return (
    <>

      {/* Hero Section */}
      <section className="hero-section" aria-label="ShopKart featured offer">
        <div className="hero-content">
          <h1>
            Good Choices.
            <br />
            <span>Great Prices.</span>
          </h1>

          <p>
            Everything you need,
            <br />
            delivered to your door.
          </p>

          <div className="hero-buttons">
            <a className="shop-btn" href="/products">
              Shop Now <span aria-hidden="true">→</span>
            </a>
            <a className="deal-btn" href="#trending">
              Explore Deals
            </a>
          </div>

          {/* Hero Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <img src="/icons/secure.png" alt="" aria-hidden="true" />
              <p>100% Secure Payments</p>
            </div>

            <div className="benefit-item">
              <img src="/icons/clock.png" alt="" aria-hidden="true" />
              <p>7 Days Easy Returns</p>
            </div>

            <div className="benefit-item">
              <img
                src="/icons/express-delivery.png"
                alt=""
                aria-hidden="true"
              />
              <p>Fast &amp; Free Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="category-section" aria-labelledby="category-title">
        <div className="section-heading">
          <h2 id="category-title">Shop by Category</h2>
          <a href="/products">View All Categories <span aria-hidden="true">→</span></a>
        </div>

        <div className="category-list">
          {categories.map((category) => (
            <article
              className={`category-card ${category.className}`}
              key={category.className}
            >
              <img src={category.image} alt={category.name} loading="lazy" />
              <h3>{category.name}</h3>
              <p>{category.count}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section
        className="trending-products-section"
        id="trending"
        aria-labelledby="trending-title"
      >
        <div className="trending-section-heading">
          <div className="trending-heading">
            <h2 className="trending-title" id="trending-title">
              <span className="trending-icon">
                <img src="/icons/trending.png" alt="" aria-hidden="true" />
              </span>
              <span>
                Trending <strong>Now</strong>
              </span>
            </h2>

            <div className="trending-accent" aria-hidden="true" />

            <p className="trending-subtitle">
              Most popular choices this week
            </p>
          </div>

          <a href="/products" className="trending-view-products">
            View All Products <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="trending-product-grid">
          {products.map((product) => (
            <article className="trending-product-card" key={product.id}>
              <div className="trending-product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </div>

              <div className="trending-product-details">
                <div className="trending-product-meta">
                  <span className="trending-product-category">
                    {product.category}
                  </span>
                  <span
                    className="trending-product-rating"
                    aria-label={`${product.rating} out of 5 stars, ${product.reviews} reviews`}
                  >
                    <span aria-hidden="true">★</span> {product.rating} ({product.reviews})
                  </span>
                </div>

                <h3>{product.name}</h3>

                <p className="trending-product-price">
                  {formatPrice(product.price)}
                </p>

                <div className="trending-product-actions">
                  <button
                    className="trending-buy-now-button"
                    type="button"
                    aria-label={`Buy ${product.name}`}
                  >
                    Buy Now
                  </button>

                  <button
                    className="trending-cart-button"
                    type="button"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <img
                      src="/icons/product-cart.png"
                      alt=""
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
