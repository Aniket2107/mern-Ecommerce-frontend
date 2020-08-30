import React, { useState, useEffect } from "react";
import Base from "./Base";
import Cardp from "./Cardp";
import { getProducts } from "./helper/coreapicalls";
import Menu from "./Menu";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const getAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="container-fluid">
      <Menu />
      <br />
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
          Our Products
        </strong>
      </h2>
      <br />
      <br />
      <div className="container-fluid">
        <div className="row text-center">
          <div className="row mt-4">
            {products.map((product, index) => {
              return (
                <div key={index} className="col-4 mb-4">
                  <Cardp product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
