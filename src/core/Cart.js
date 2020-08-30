import React, { useState, useEffect } from "react";
import Base from "./Base";
import "../styles.css";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import StripePayment from "./StripePayment";
import Paymentb from "./Paymentb";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setreload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllproducts = () => {
    return (
      <div>
        <h3 className="text-white">Check products here</h3>
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              product={product}
              removeFromCart={true}
              addtoCart={false}
              setreload={setreload}
              reload={reload}
            />
          );
        })}
      </div>
    );
  };

  return (
    <Base title="Cart page" description="Check your products here">
      <div className="row">
        <div className="col-6">
          {products.length > 0 ? loadAllproducts() : <h3>Cart is Empty</h3>}
        </div>
        <div className="col-6">
          {/* <StripePayment products={products} setreload={setreload} /> */}
          {/* Braintree Payment */}
          <Paymentb products={products} setreload={setreload} />
        </div>
      </div>
    </Base>
  );
};

export default Cart;
