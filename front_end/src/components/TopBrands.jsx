import React from "react";
import { NavLink } from "react-router-dom";

const TopBrands = () => {
  return (
    <div id="topbrands">
      <h2>Top Fragrance Brands</h2>
      <div id="topbrand_top">
        <NavLink className={"link_topbrand"}>
          <div className="img_topbrands">
            <img src="https://img.fragrancex.com/images//products/parent/medium/74036m.jpg" />
          </div>
          <p>Armaf</p>
        </NavLink>
        <NavLink className={"link_topbrand"}>
          <div className="img_topbrands">
            <img src="https://img.fragrancex.com/images/assets/product%20images/dolce-gabbana.jpg" />
          </div>
          <p>Docle & Gabbana</p>
        </NavLink>
      </div>
      <div id="topbrand_bot">
        <NavLink className={"link_topbrand"}>
          <div className="img_topbrands">
            <img src="https://img.fragrancex.com/images/assets/product%20images/calvin-klein.jpg" />
          </div>
          <p>Calvin & Kein</p>
        </NavLink>
        <NavLink className={"link_topbrand"}>
          <div className="img_topbrands">
            <img src="https://img.fragrancex.com/images/assets/product%20images/versace.jpg" />
          </div>
          <p>Versace</p>
        </NavLink>
      </div>
    </div>
  );
};

export default TopBrands;
