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
  const categories = [
    { name: "jeans", image: "/images/categories/jeans.png" },
    { name: "t-shirts", image: "/images/categories/t-shirt.png" },
    { name: "shoes", image: "/images/categories/active-wear.png" },
    { name: "bags", image: "/images/categories/jeans.png" },
    { name: "activewear", image: "/images/categories/active-wear.png" },
    { name: "shoes", image: "/images/categories/active-wear.png" },
    { name: "bags", image: "/images/categories/jeans.png" },
    { name: "activewear", image: "/images/categories/active-wear.png" },
  ];

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
      {/* <div className="content"> */}
        {activeTab === "brands" ? (
          <div className="content">
            {brands.map((brand, index) => (
              <div key={index} className="content-item">
                <img src={brand.image} alt={brand.name} className="content-image" />
                <div className="content-overlay"></div>
                <h3 className="content-name">{brand.name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="content">
            {categories.map((category, index) => (
              <div key={index} className="content-item">
                <img src={category.image} alt={category.name} className="content-image" />
                <div className="content-overlay"></div>
                <h3 className="content-name">{category.name}</h3>
              </div>
            ))}
          </div>
        )}
      {/* </div> */}
      <div className="browse-all">
        <p>Shop Smart – All Brands & Wears, One Click!</p>
        <a href="#">Browse all →</a>
      </div>
    </section>
  );
};

export default ShopBy;
