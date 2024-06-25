import React from "react";
import "./Text.css";
import { Link } from "react-router-dom";

const Text = () => {
  return (
    <div className="asd">
      <div className="Text-Glow" datatype="data-text">
        <h1 className="Find">Find The</h1>
        <h1 className="Ex">Exclusive Shoe</h1>
      </div>
      <p className="parem">
        Join our Shoe Perks program today and enjoy exclusive benefits! As a
        member, you'll receive free shipping on all orders, plus access to
        exclusive rewards and deals. Explore Shoe Carnival for amazing discounts
        on a wide selection of shoes, boots, sandals, and more for the whole
        family!
      </p>
      <div className="Button-Bar">
        <Link to="/MarketPlace">
          <div className="button">Shop Now</div>
        </Link>
        <div className="Space"></div>
        <div className="explore">Learn More </div>
      </div>
    </div>
  );
};

export default Text;
