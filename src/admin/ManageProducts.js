import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./helper/adminapicall";
import Menu from "../core/Menu";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const removeProduct = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <div className="container-fluid">
      <Menu />
      <div style={{ marginTop: "50px" }}>
        <h2 className="text-center text-white">Welcome Admin</h2>
        <p className="text-center text-white">Manage Products here</p>
        <Link
          className="btn btn-info"
          to={`/admin/dashboard`}
          style={{ marginLeft: "50px" }}
        >
          <span className="">Admin Home</span>
        </Link>
        <div className="container">
          <br /> <br />
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {products.map((prodct, idx) => {
                return (
                  <tr key={prodct._id}>
                    <td>{idx + 1}</td>
                    <td>{prodct.name}</td>
                    <td>{prodct.category.name}</td>
                    <td>
                      <Link
                        to={`/admin/product/update/${prodct._id}`}
                        className="text-info"
                      >
                        Edit
                      </Link>
                      |
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          removeProduct(prodct._id);
                        }}
                        className="text-danger"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
