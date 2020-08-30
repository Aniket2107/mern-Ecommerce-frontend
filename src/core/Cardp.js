import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addtoCartLS, removeItemFromCart } from "./helper/cartHelper";
import { Card, Button } from "react-bootstrap";

const Cardp = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setreload = (f) => f,
  reload = undefined,
}) => {
  const [redirect, setredirect] = useState(false);
  const [count, setcount] = useState(product.count);

  const cardTitle = product ? product.name : "I write code ts";
  const cardDescription = product ? product.description : "default description";
  const cardPrice = product ? product.price : "Default";

  const addtoCartClck = () => {
    addtoCartLS(product, () => setredirect(true));
  };

  const performRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={addtoCartClck}
          className="btn btn-block mt-2 mb-2 text-white"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setreload(!reload);
          }}
          className="btn btn-block btn-danger mt-2 mb-2 text-white text-center"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <Card
      style={{ width: "18rem", height: "80vh", width: "27vw" }}
      className="text-dark"
    >
      <ImageHelper product={product} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        {performRedirect(redirect)}
        <Card.Text>{cardDescription}</Card.Text>
        <Card.Text className="bg-warning text-dark">$ {cardPrice}</Card.Text>
        <div style={{ backgroundColor: "#16A085", color: "white" }}>
          {showAddToCart(addtoCart)}
        </div>
        <div>{showRemoveFromCart(removeFromCart)}</div>
      </Card.Body>
    </Card>
  );
};

export default Cardp;
