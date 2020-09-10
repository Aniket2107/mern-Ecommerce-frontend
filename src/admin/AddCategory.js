import React, { useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { createCategory } from "./helper/adminapicall";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const categoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Create Category</p>
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

  const goback = () => (
    <div className="rounded my-3">
      <Link className="btn btn-sm btn-success" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };

  const successMsg = () => {
    if (success) {
      return <h4 className="text-success">Category created Sucessfully</h4>;
    }
  };

  const warningMsg = () => {
    if (error) {
      return <h4 className="text-danger">Error creating category</h4>;
    }
  };

  return (
    <Base
      title="Create Category"
      description="Add new category"
      className="container p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMsg()}
          {warningMsg()}
          {categoryForm()}
          {goback()}
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
