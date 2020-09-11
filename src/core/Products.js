import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import { getProducts } from "./helper/coreapicalls";
import Card from "./Cardp";
const Products = () => {
  const [products, setProducts] = useState([]);

  const preload = () => {
    getProducts().then((data) => {
      if (data.error) {
        return console.log("Error fetching data Try refreshing the page ");
      }
      setProducts(data);
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div>
      <Menu />
      <div className="m-4 p-4">
        <h1 style={{ borderLeft: "7px solid red", padding: "0 5vh" }}>
          DISCOVER <br /> SOMETHING NEW
        </h1>
      </div>
      <div className="row text-center p-4 m-4">
        {products.map((prduct, idx) => {
          return (
            <div key={idx} className="col-4 mb-3">
              <Card product={prduct} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
