import React, { useState } from "react";
import Header from "../components/Header";
import MenuSideBar from "../components/page_product/MenuSideBar";
import ShowProduct from "../components/page_product/ShowProduct";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const PerfumeForWomen = () => {
  return (
    <div>
      <Header />
      <div id="main_shop">
        <MenuSideBar />
        <ShowProduct />
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
};

export default PerfumeForWomen;
