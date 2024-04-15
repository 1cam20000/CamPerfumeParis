import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Col } from "antd";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
const ShowDetail = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      const options = { month: "long" };
      setCurrentMonth(today.toLocaleString("en-US", options));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  //
  const [data, setData] = useState({});
  const { id } = useParams();
  const { dataKey } = useContext(AppContext);
  useEffect(() => {
    const localState = dataKey.find((item) => item._id.toString() === id);
    console.log("🚀 ~ ShowDetail ~ localState:", localState);
    setData(localState);
  }, []);
  const gender =
    data.type === "perfume"
      ? "women"
      : data.type === "cologne"
      ? "men"
      : data.type;
  //
  const navigate = useNavigate();
  const handleAddCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(data);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    toast.success("Product added to cart");
    // navigate("/perfume");
  };
  return (
    <div id="detail_product">
      <div className="left">
        <img id="img_DTProduct" src={data.image} alt={data.nameProduct} />
      </div>
      <div className="right">
        <div className="info">
          <h1>{data.nameProduct}</h1>
          <span>
            By {data.brand} for {gender}
          </span>
          <h2>About the product</h2>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="btn">
        <h1>Price with Coupon</h1>
        <h2 style={{ fontSize: "50px" }}>{data.price}</h2>
        <h2>Delivery</h2>
        <h2>
          {currentMonth} {today.getDate() + 2}-{today.getDate() + 4}
        </h2>
        <Button
          style={{ width: "100%", color: "white", margin: "10px" }}
          type="primary"
          onClick={handleAddCart}
        >
          ADD TO CART
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShowDetail;
