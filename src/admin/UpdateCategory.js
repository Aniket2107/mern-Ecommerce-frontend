import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getCategory, updateCategory } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper";

const UpdateCategory = ({ match }) => {
  const [name, setName] = useState("");

  const { user, token } = isAuthenticated();

  const preload = (categoryId) => {
    getCategory(categoryId).then((data) => {
      if (data.error) {
        setName(name);
      } else {
        setName(data.name);
      }
    });
  };

  useEffect(() => {
    preload(match.params.categoryId);
  }, []);

  const categoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Update Category</p>
        <input
          onChange={handleChange}
          className="form-control my-3"
          value={name}
          type="text"
          required
          autoFocus
          placeholder="for Eg. Winter/Summer"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
          Submit
        </button>
      </div>
    </form>
  );

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setName(name);

    updateCategory(match.params.categoryId, user._id, token, name).then(
      (data) => {
        if (data.error) {
          setName(name);
        } else {
          setName("");
          console.log("Updates sucessfully");
        }
      }
    );
  };

  return (
    <Base
      title="Category updation"
      description="Update all the categories here"
      className="container bg-info p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">{categoryForm()}</div>
      </div>
    </Base>
  );
};

export default UpdateCategory;
