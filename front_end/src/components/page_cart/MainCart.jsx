import React, { useState, useEffect } from "react";
import { Button, Card, Col, InputNumber } from "antd";
import axios from "axios";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

const MainCart = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus && JSON.parse(loggedInStatus)) {
      setIsLoggedIn(true);
    }

    const callAPIcart = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/product/list-product-in-card",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("🚀 ~ callAPIcart ~ response:", response.data);
        if (response.data.length > 0) {
          setCartItems(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    callAPIcart();
  }, []);
  //
  const removeFromCart = (productId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      axios
        .delete(`http://localhost:8000/product/remove-from-card`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            productId: productId,
          },
        })
        .then((response) => {
          console.log("🚀 ~ removeFromCart ~ response", response);
          setCartItems(cartItems.filter((item) => item._id !== productId));
        })
        .catch((error) => {
          console.error("Error removing item from cart:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //
  const [priceOneItem, setPriceOnItem] = useState(1);
  const handleInputNumber = (value) => {
    setPriceOnItem(value);
  };
  return (
    <div>
      {isLoggedIn ? (
        <>
          {cartItems.length > 0 ? (
            <div id="showCart">
              <h3>Total ({cartItems.length} items)</h3>
              <br />
              <NavLink to="/perfume" style={{ color: "black " }}>
                Continue shopping
              </NavLink>
              <br />
              <br />
              <br />
              <table>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left" }}>Product Indormation</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td id="info_product_in_cart">
                          <img src={item.image} alt="" />
                          <div
                            style={{
                              marginTop: "20px",
                              display: "flex",
                              flexDirection: "column",
                              gap: "10px",
                              position: "relative",
                            }}
                          >
                            <h3>{item.nameProduct}</h3>
                            <p>By {item.brand}</p>
                            <Button onClick={() => removeFromCart(item._id)}>
                              Remove
                            </Button>
                          </div>
                        </td>
                        <td>₫ {item.price}</td>
                        <td>
                          <InputNumber
                            min={1}
                            max={10}
                            defaultValue={1}
                            onChange={handleInputNumber}
                          />
                        </td>
                        <td>
                          ₫{" "}
                          {priceOneItem *
                            parseFloat(item.price.replace(/,/g, ""))}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ padding: "50px" }}>
              <h2>No products in your cart.</h2>
              <br />
              <NavLink to="/perfume" style={{ color: "black " }}>
                Continue shopping
              </NavLink>
            </div>
          )}
        </>
      ) : (
        <div style={{ padding: "50px" }}>
          <h2>You need to log in first!</h2>
          <br />
          <NavLink to="/login" style={{ color: "black " }}>
            <Button>Log In to use our service</Button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default MainCart;
