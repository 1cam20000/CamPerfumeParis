import { Button } from "antd";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Herder_noFix = () => {
  return (
    <div>
      <div id="header_fiveStar">
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <span>OVER 20 MILLION CUSTOMERS</span>
      </div>

      <div id="imgDestop">
        <img
          src="https://img.fragrancex.com/images/l/29/d/0/homeimage_desktop@2x.webp?v=GWPKG59EFTPAH1G"
          alt=""
        />
        <div id="header_des_img">
          <div>
            <p>Shop Spring Deals</p>
            <p>
              At FragranceX.com, our mission is to provide you with the largest
              selection of perfumes and colognes at the lowest prices.
            </p>
          </div>
          <div id="header_button">
            <NavLink to="/perfume">
              <Button size="large" className="Button">
                SHOP ALL PERFUME <FaArrowRight />
              </Button>
            </NavLink>
            <NavLink to="/cologne">
              <Button size="large" className="Button">
                SHOP ALL COLOGNES <FaArrowRight />
              </Button>
            </NavLink>
          </div>
          <h4>Free Shipping</h4>
        </div>
        <div id="header_bottom">
          <div className="des_icon_header">
            <div className="icon_header">
              <img src="https://img.fragrancex.com/images/assets/icons/safesecure.svg" />
            </div>
            <h3>Safe & Secure Checkout</h3>
          </div>
          <div className="des_icon_header">
            <div className="icon_header">
              <img src="https://img.fragrancex.com/images/assets/icons/trusted.svg" />
            </div>
            <h3>100% Authentic Fragrances</h3>
          </div>
          <div className="des_icon_header">
            <div className="icon_header">
              <img src="https://img.fragrancex.com/images/assets/icons/fastfreeshipping.svg" />
            </div>
            <h3>Items Ship Same Day</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herder_noFix;
