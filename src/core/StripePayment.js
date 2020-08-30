import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper/index";
import { loadCart, emptyCart } from "./helper/cartHelper";
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
        console.log("payment sucessful");
        // createOrder(userID, token, body);
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
        <button>Stripe checkout</button>
      </StripeCheckout>
    ) : (
      <Link to="/signin">
        <button className="btn btn-danger">SignIn</button>
      </Link>
    );
  };

  return (
    <div className="container">
      <h3>Checkout here</h3>
      <p>Total amount is {getProductTotal()}</p>
      {checkOutBtn()}
    </div>
  );
};

export default Payment;
