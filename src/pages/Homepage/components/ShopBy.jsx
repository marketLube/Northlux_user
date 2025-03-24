import React, { useState } from "react";

const ShopBy = () => {
  const [activeTab, setActiveTab] = useState("brands");

  const brands = [
    { name: "PRADA", image: "/images/brands/prada.png" },
    { name: "RAY-BAN", image: "/images/brands/rayban.png" },
    { name: "BALENCIAGA", image: "/images/brands/prada.png" },
    { name: "SUPREME", image: "/images/brands/rayban.png" },
    { name: "CARTIER", image: "/images/brands/prada.png" },
    { name: "HERMES", image: "/images/brands/prada.png" },
    { name: "ZARA", image: "/images/brands/prada.png" },
    { name: "CHANEL", image: "/images/brands/prada.png" },
  ];
  const categories = ["Clothing", "Accessories", "Footwear", "Bags"];

  return (
    <section className="shop-by">
      <h2>Shop By</h2>
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "brands" ? "active" : ""}`}
          onClick={() => setActiveTab("brands")}
        >
          Brands
        </button>
        <button
          className={`tab-btn ${activeTab === "categories" ? "active" : ""}`}
          onClick={() => setActiveTab("categories")}
        >
          Categories
        </button>
      </div>
      <div className="content">
        {activeTab === "brands" ? (
          <div className="brands">
            {brands.map((brand, index) => (
              <div key={index} className="brand-item">
                <img src={brand.image} alt={brand.name} />
                <div className="brand-overlay"></div>
                <h3 className="brand-name">{brand.name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="categories">
            {categories.map((category, index) => (
              <div key={index} className="category-item">
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="browse-all">
        <p>Shop Smart – All Brands & Wears, One Click!</p>
        <a href="#">Browse all →</a>
      </div>
    </section>
  );
};

export default ShopBy;
