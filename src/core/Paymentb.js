import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper/index";
import { loadCart, emptyCart } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import { getToken, processPaymentb } from "./helper/paymentHelper";
import { createOrder } from "./helper/orderhelper";

const Paymentb = ({ products, setreload = (f) => f, reload = undefined }) => {
  const [info, setInfo] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getmeToken = (userId, token) => {
    getToken(userId, token).then((res) => {
      if (res.error) {
        setInfo({ ...info, error: res.error });
      } else {
        let clientToken = info.clientToken;
        setInfo({ clientToken });
      }
    });
  };

  useEffect(() => {
    getmeToken(userId, token);
  }, []);

  return <div>hey there</div>;
};

export default Paymentb;
