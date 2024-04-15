import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { AppContext } from "../../App";
const { Meta } = Card;

const ShowProduct = () => {
  const { dataKey } = useContext(AppContext);
  // console.log("🚀 ~ dataKey:", dataKey);

  return (
    <div>
      <Row>
        {dataKey.map((item) => {
          return (
            <NavLink to={`/${item._id}`} key={item._id}>
              <Col>
                <Card
                  key={item.id}
                  style={{ width: 240, margin: "20px" }}
                  hoverable
                  cover={<img alt={item.name} src={item.image} />}
                >
                  <div>
                    <h3>{item.nameProduct}</h3>
                    <div>
                      {item.rating}
                      <FaStar color="#facc36" />
                      <span>was sold {item.sold}</span>
                    </div>
                    <p>by {item.brand}</p>
                    <p>{item.type}</p>
                    <p>price : As low as đ{item.price} </p>
                  </div>
                </Card>
              </Col>
            </NavLink>
          );
        })}
      </Row>
    </div>
  );
};

export default ShowProduct;
