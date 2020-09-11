import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper";
import Menu from "../core/Menu";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({ ...values, didRedirect: true });
        });
      }
    });
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/"></Redirect>;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div
          className="alert alert-success text-center mt-2"
          style={{ width: "500px" }}
        >
          <h2>loading....</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger text-center mt-2"
        style={{ display: error ? "" : "none", width: "500px" }}
      >
        {error}
      </div>
    );
  };

  const signinform = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-start">
          <form>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={handleChange("email")}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={handleChange("password")}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Menu />
      <h1 className="text-center text-info mt-4">Login</h1>
      <div
        style={{
          width: "500px",
          color: "#000",
          margin: "auto",
        }}
      >
        {loadingMessage()}
        {errorMessage()}
        {signinform()}
        {performRedirect()}
      </div>
    </div>
  );
};

export default Signin;
