import React from "react";
import Header from "../components/Header";
import MainCart from "../components/page_cart/MainCart";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Cart = () => {
  return (
    <div>
      <Header />
      <MainCart />
      <div style={{position:"fixed", bottom:"0px", width:"100%"}} >
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Cart;
