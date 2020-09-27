import React from "react";
import { isAuthenticated } from "../auth/helper/index";
import { emptyCart } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { stripePayment } from "./helper/paymentHelper";
import { createNewOrder } from "./helper/orderhelper";

const Payment = ({ products, setreload = (f) => f, reload = undefined }) => {
  const userID = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getProductTotal = () => {
    let sum = products.reduce((amount, product) => {
      return (amount += product.price);
    }, 0);

    return sum;
  };

  const pushAray = () => {
    let array = [];

    products.map((pdt) => {
      return array.push(pdt._id);
    });

    return array;
  };

  const makeid = () => {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  const makePayment = () => {
    const body = {
      token,
      products,
    };

    let orderBody = {
      email: isAuthenticated().user.email,
      products: pushAray(),
      total: getProductTotal(),
      key: makeid(),
    };

    stripePayment(userID, token, body)
      .then((res) => {
        console.log(orderBody);
        createNewOrder(userID, token, orderBody);
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
        <button className="btn btn-primary btn-lg btn-block">Buy Now</button>
      </StripeCheckout>
    ) : (
      <Link to="/signin">
        <button className="btn btn-danger btn-lg btn-block">SignIn</button>
      </Link>
    );
  };

  return (
    <div className="panel panel-default">
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      ></link>
      <div className="panel-heading text-center">
        <h4>Review Order</h4>
      </div>
      <div className="panel-body">
        <div className="col-md-12" style={{ textAlign: "start" }}>
          <strong>Subtotal (# item)</strong>
          <div className="pull-right">
            <span>$</span>
            <span>{getProductTotal()}</span>
          </div>
        </div>
        <div className="col-md-12" style={{ textAlign: "start" }}>
          <strong>Tax</strong>
          <div className="pull-right">
            <span>$</span>
            <span>0.00</span>
          </div>
        </div>
        <div className="col-md-12" style={{ textAlign: "start" }}>
          <small>Shipping</small>
          <div className="pull-right">
            <span>-</span>
          </div>
          <hr />
        </div>
        <div className="col-md-12">
          <strong>Order Total</strong>
          <div className="pull-right">
            <span>$</span>
            <span>
              <strong>{getProductTotal()}</strong>
            </span>
          </div>
          <hr />
        </div>

        <div>{products.length > 0 ? checkOutBtn() : null}</div>
      </div>
    </div>
  );
};

export default Payment;
