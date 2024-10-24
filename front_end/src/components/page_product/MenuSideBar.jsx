import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { Checkbox } from "antd";

const MenuSideBar = ({ applyFilters }) => {
  const { dataKey } = useContext(AppContext);
  const [filters, setFilters] = useState({ gender: [], brand: [] });

  const handleCheckboxChange = (filterType, value) => {
    const updatedFilters = { ...filters };
    if (updatedFilters[filterType].includes(value)) {
      updatedFilters[filterType] = updatedFilters[filterType].filter(
        (val) => val !== value
      );
    } else {
      updatedFilters[filterType] = [...updatedFilters[filterType], value];
    }
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };
  const brands = [...new Set(dataKey.map((product) => product.brand))];
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          padding: "30px",
          position: "fixed",
        }}
      >
        <div>
          <h2>Gender</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>
              <Checkbox
                type="checkbox"
                value="men"
                onChange={() => handleCheckboxChange("gender", "men")}
              />
              Men
            </label>
            <label>
              <Checkbox
                value="women"
                onChange={() => handleCheckboxChange("gender", "women")}
              />
              Women
            </label>
          </div>
        </div>
        <div>
          <h2>Brand</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {brands.map((brand) => (
              <label key={brand}>
                <Checkbox
                  type="checkbox"
                  value={brand}
                  onChange={() => handleCheckboxChange("brand", brand)}
                />
                {brand}
              </label>
            ))}
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSideBar;
