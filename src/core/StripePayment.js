import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper/index";
import { emptyCart } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { stripePayment } from "./helper/paymentHelper";
import { createOrder } from "./helper/orderhelper";

const Payment = ({ products, setreload = (f) => f, reload = undefined }) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const userID = isAuthenticated() && isAuthenticated()._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getProductTotal = () => {
    let sum = products.reduce((amount, product) => {
      return (amount += product.price);
    }, 0);

    return sum;
  };

  const makePayment = () => {
    const body = {
      token,
      products,
    };

    stripePayment(userID, token, body)
      .then((res) => {
        console.log(res);
        createOrder(userID, token, res);
        emptyCart(() => {
          console.log("We did it!!! yeah");
        });

        setreload(!reload);
      })
      .catch((err) => console.log(`frontend stHepler : ${err}`));
  };

  const checkOutBtn = () => {
    return isAuthenticated() ? (
      <StripeCheckout
        stripeKey="pk_test_51HLCNiHMuRPwFBy2zNZzWgf2b27kb8Bi1rG0li1zSGPMUm1euiZmdQXXI5srPCezDZReEl72kUhQLhAVbqlvJg1S00umYHcdLy"
        token={makePayment}
        amount={getProductTotal * 100}
        name="Stripe gateway"
        shippingAddress
      >
        <button className="btn btn-primary text-white mb-3 rounded">
          Buy Now
        </button>
      </StripeCheckout>
    ) : (
      <Link to="/signin">
        <button className="btn btn-danger rounded mb-3">SignIn</button>
      </Link>
    );
  };

  return (
    <div className="container mt-4 bg-secondary rounded">
      <br />
      <h3 className="bg-warning text-dark">Checkout here</h3>
      <br />
      <h4 className="text-white">
        Total amount is{" "}
        <strong className="bg-info text-white">$ {getProductTotal()} </strong>
      </h4>
      <br />
      {products.length > 0 ? checkOutBtn() : null}
    </div>
  );
};

export default Payment;
