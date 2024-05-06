import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToTop = () =>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  const scrollToBot = () =>{
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior:"smooth"
    })
  }
  return (
    <div className="Nav">
      <Link to="/">
      <div className="Logo">CPE-SWU</div>
      </Link>
      <div className="Space"></div>
      <div className="Func">
        <Link to="/" onClick={scrollToTop}>
        <h3>Home</h3>
        </Link>
      <Link to="/MarketPlace">
        <h3>Shop</h3>
      </Link>
      <Link to = "/" onClick={scrollToBot}>
        <h3>About me</h3>
      </Link>
      </div>
      <div className="Space"></div>
      <div className="User">asd</div>
    </div>
  );
};

export default Navbar;
