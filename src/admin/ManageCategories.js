import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { deleteCategory, getCategories } from "./helper/adminapicall";
import Menu from "../core/Menu";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const removeCategory = (categoryId) => {
    deleteCategory(categoryId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div className="container-fluid">
      <Menu />
      <div style={{ marginTop: "50px" }}>
        <h2 className="text-center text-white">Welcome Admin</h2>
        <p className="text-center text-white">Manage category here</p>
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
                <th>Category Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {categories.map((category, idx) => {
                return (
                  <tr key={category._id}>
                    <td>{idx + 1}</td>
                    <td>{category.name}</td>
                    <td>
                      <Link
                        to={`/admin/category/update/${category._id}`}
                        className="text-info"
                      >
                        Edit
                      </Link>
                      |
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          removeCategory(category._id);
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

export default ManageCategories;
