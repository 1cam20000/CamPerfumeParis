import React, { useContext, useState } from "react";
import Header from "../components/Header";
import MenuSideBar from "../components/page_product/MenuSideBar";
import ShowProduct from "../components/page_product/ShowProduct";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { AppContext } from "../App";
import axios from "axios";

const PerfumeForWomen = () => {
  const { dataKey } = useContext(AppContext);

  // const [filteredProducts, setFilteredProducts] = useState(dataKey);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (keyword) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/product/search",
        { keyword }
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const applyFilters = (filters) => {
  //   let filtered = dataKey;
  //   if (filters.gender.length > 0) {
  //     filtered = filtered.filter((product) =>
  //       filters.gender.includes(product.type)
  //     );
  //   }
  //   if (filters.brand.length > 0) {
  //     filtered = filtered.filter((product) =>
  //       filters.brand.includes(product.brand)
  //     );
  //   }
  //   setFilteredProducts(filtered);
  // };
  return (
    <div>
      <Header onSearch={handleSearch} />
      <div id="main_shop">
        {/* <MenuSideBar applyFilters={applyFilters} /> */}
        <ShowProduct results={searchResults} />
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
};

export default PerfumeForWomen;
