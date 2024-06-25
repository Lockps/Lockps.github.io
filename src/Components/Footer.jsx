import React from "react";
import "./Footer.css";
import { FaShoePrints } from "react-icons/fa";
import { TbShoe } from "react-icons/tb";
import { GiConverseShoe, GiRunningShoe } from "react-icons/gi";
import { FaShoelace } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="Footer-Container">
      <div className="Footer-Content">
        <p>CPE-SWU</p>
        <div>
          <p>Roekpasawat</p>
          <p>Sajjapan</p>
          <p>65109010303</p>
        </div>
        <div>
          <p>Pichaya</p>
          <p>Thumma</p>
          <p>65109010136</p>
        </div>
        <div>
          <p>Web - Technology</p>
        </div>
      </div>
      <div className="Foot-Line"></div>
      <div className="Foot-Logo">
        <FaShoePrints />
        <TbShoe />
        <GiConverseShoe />
        <GiRunningShoe />
        <FaShoelace />
      </div>
    </div>
  );
};

export default Footer;
