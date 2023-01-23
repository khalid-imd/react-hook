import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { API } from "../config/api";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  let { data: products } = useQuery("productChace", async () => {
    const response = await API.get("/products");
    return response.data;
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1 className="mb-5">Product</h1>
          {products?.map((item) => {
            return (
              <div className="row border border-dark col-10 mb-5 rounded-2 p-5">
                <div className=" col-2">
                  <img src={item.image} width="75px" alt="" />{" "}
                </div>
                <div className="col-8">
                  <h5>{item.title}</h5>
                  <p> {item.description} </p>
                </div>
                <div className="col-2">${item.price} </div>

                <Button onClick={() => addToCart(item)} className="mt-4 w-25">
                  add to cart
                </Button>
              </div>
            );
          })}
        </div>
        <div className="col-4">
          <h1 className="mb-5"> Cart </h1>
          {cartItems.map((item) => {
            return (
              <div className="row border-bottom border-dark mb-2">
                <div className="col-9">
                  <img src={item.image} alt="item" width="75px" />
                  <h6> {item.title} </h6>
                </div>
                <div className="col-3">
                  <h6> {item.price} </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
