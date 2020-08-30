import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

const currenTab = (history, path) => {
  if (history.location.pathname === path) return { color: "#2ecc72" };
  else return { color: "#ffffff" };
};

const Menu = ({ history }) => {
  return (
    <div className="navbar navbar-expand-lg">
      <Link
        className="navbar-brand text-warning"
        style={{ "font-family": "Serif", fontWeight: "700", fontSize: "2rem" }}
      >
        ShoeClub
      </Link>
      <ul className="nav nav-tabs bg-dark ml-auto">
        <li className="nav-item">
          <Link style={currenTab(history, "/")} className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currenTab(history, "/cart")}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
        </li>

        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li className="nav-item">
            <Link
              style={currenTab(history, "/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              User Dashboard
            </Link>
          </li>
        )}

        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className="nav-item">
            <Link
              style={currenTab(history, "/admin/dashboard")}
              className="nav-link"
              to="/admin/dashboard"
            >
              Admin Dashboard
            </Link>
          </li>
        )}

        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={currenTab(history, "/signin")}
                className="nav-link"
                to="/signin"
              >
                SignIn
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currenTab(history, "/signup")}
                className="nav-link"
                to="/signup"
              >
                SignUp
              </Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && (
          <li className="nav-item">
            <span
              style={{ cursor: "pointer" }}
              className="nav-link text-warning"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
