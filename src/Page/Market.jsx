import React, { useEffect, useState } from "react";
import "./Market.css";
import Navbar from "../Components/Navbar";
import Pre from "../Components/Pre";
import { IoMdSearch } from "react-icons/io";
import MarketItem from "./MarketItems";
import Footer from "../Components/Footer";

const Market = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8080/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.Name &&
      product.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Market">
      <Navbar />
      <div className="Market-Slide">
        <div className="Space"></div>
        <div className="Mar-img-Box">
          <img src="/Market1.png" alt="Market" />
        </div>
        <div className="Space"></div>
        <div className="Mar-Textcon">
          <h1 className="Mar-Text" data-text="New Collection . . .">
            New Collection . . .
          </h1>
        </div>
      </div>
      <div className="Market-Container">
        <div className="Market-Select">
          <h2 className="Search-Text">Search</h2>
          <IoMdSearch className="Mar-Icon" />
          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="Market-Item-Box">
          <h1 className="Mar-Pro">
            {searchQuery ? "Product about `" + searchQuery + "`" : "Product"}
          </h1>
          <div className="Market-Item-Grid">
            {filteredProducts.map((product, index) => (
              <MarketItem
                key={index}
                name={product.Name}
                price={product.Price}
                imageURL={product.URL}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Market;
