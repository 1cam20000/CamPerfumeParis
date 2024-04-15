import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { CiShoppingCart } from "react-icons/ci";
import axios from "axios";

const Header = () => {
  const [user, setUser] = useState({});
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const token = localStorage.getItem("token");
  const callAPI = async () => {
    const response = await axios.get(
      "http://localhost:8000/user/detail-profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log("🚀 ~ callAPI ~ response:", response.data);
    setUser(response.data);
  };
  useEffect(() => {
    callAPI();
  }, []);
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
            {isLoggedIn ? (
              <NavLink to="/profile" id="profile">
                hello {user.name}
              </NavLink>
            ) : (
              <NavLink to="/login">Sign In</NavLink>
            )}
            <NavLink to="/cart" id="cart">
              <div id="icon_cart">
                <CiShoppingCart size={"25px"} />
              </div>
              Cart
            </NavLink>
          </div>
          <div id="header_link_product">
            <NavLink to="/perfume">Wommen'Perfume</NavLink>
            <NavLink>Men'Cologne</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
