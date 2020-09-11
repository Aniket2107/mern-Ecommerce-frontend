import React, { useState, useEffect } from "react";
import "../styles.css";
import Cardp from "./Cardp";
import { loadCart } from "./helper/cartHelper";
import StripePayment from "./StripePayment";
import Menu from "./Menu";
// import Paymentb from "./Paymentb";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setreload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllproducts = () => {
    return (
      <div>
        <h3 className="text-dark bg-warning p-2">Check products here</h3>
        <br />
        <br />
        {products &&
          products.map((product, index) => {
            return (
              <div className="mb-4">
                <Cardp
                  key={index}
                  product={product}
                  removeFromCart={true}
                  addtoCart={false}
                  setreload={setreload}
                  reload={reload}
                />
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <Menu />
      <br />
      <br />
      <h2
        className="text-center text-info"
        style={{ flexDirection: "row", justifyContent: "center" }}
      >
        <strong
          style={{ alignSelf: "center" }}
          className="rounded bg-white p-2"
        >
          User Cart
        </strong>
      </h2>
      <br />
      <div className="row text-center">
        <div className="col-6 bg-info p-4 rounded mb-4">
          {products.length > 0 ? loadAllproducts() : <h3>Cart is Empty</h3>}
        </div>
        <div className="col-6">
          {/* Stripe Payment   */}
          <StripePayment products={products} setreload={setreload} />
          {/* Braintree Payment */}
          {/* <Paymentb products={products} setreload={setreload} /> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
