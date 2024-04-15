import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import ShowDetail from "../components/page_detailProduct/ShowDetail";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const DetailProduct = () => {
  const a = useParams();
  // console.log("🚀 ~ DetailProduct ~ a:", a);
  return (
    <div>
      <Header />
      <ShowDetail />
      <div id="footer_detailProduct">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default DetailProduct;
