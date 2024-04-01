import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input } from "antd";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div id="Space"></div>
      <div id="header_page">
        <div id="header_top">
          <NavLink>Free Shipping</NavLink>, Item Ship Out Today - Oder Now!
        </div>
        <div id="header_main">
          <div id="header_search">
            <NavLink to={"/"}>
              <p>CamPerfume</p>
            </NavLink>
            <Input placeholder="Search 10,000+ trusted brands" />
            <NavLink>Sign In</NavLink>
            <NavLink id="cart">
              <div id="icon_cart">
                <CiShoppingCart size={"25px"} />
              </div>
              Cart
            </NavLink>
          </div>
          <div id="header_link_product">
            <NavLink>Wommen'Perfume</NavLink>
            <NavLink>Men'Cologne</NavLink>
            <NavLink>Brands</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
