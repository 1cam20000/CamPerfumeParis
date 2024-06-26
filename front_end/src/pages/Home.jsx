import React from "react";
import Header from "../components/Header";
import Herder_noFix from "../components/Herder_noFix";
import TopBrands from "../components/TopBrands";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div>
      <Header />
      <Herder_noFix />
      <TopBrands />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
