import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

// const currenTab = (history, path) => {
//   if (history.location.pathname === path) return { color: "#2ecc72" };
//   else return { color: "#ffffff" };
// };

const Menu = ({ history }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/" exact>
          ShoeClub
        </Link>
        <div className="nav-items-container">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <Link className="nav-link" activeClassName="active" exact to="/">
              <li className="nav-item">Home</li>
            </Link>
            <Link
              className="nav-link"
              activeClassName="active"
              exact
              to="/products"
            >
              <li className="nav-item">Shop</li>
            </Link>
            <Link
              className="nav-link"
              activeClassName="active"
              exact
              to="/cart"
            >
              <li className="nav-item">Cart</li>
            </Link>
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
              <Link
                className="nav-link"
                activeClassName="active"
                exact
                to="/user/dashboard"
              >
                <li className="nav-item">Profile</li>
              </Link>
            )}
            {isAuthenticated() && isAuthenticated().user.role === 1 && (
              <Link
                className="nav-link"
                activeClassName="active"
                exact
                to="/admin/dashboard"
              >
                <li className="nav-item">Dashboard</li>
              </Link>
            )}
            <Link
              className="nav-link"
              activeClassName="active"
              exact
              to="/contact"
            >
              <li className="nav-item">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="nav-items-container">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {!isAuthenticated() && (
              <Fragment>
                <Link
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/signin"
                >
                  <li className="nav-item">Sign In</li>
                </Link>
                <Link
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/signup"
                >
                  <li className="nav-item">Sign Up</li>
                </Link>
              </Fragment>
            )}

            {isAuthenticated() && (
              <li className="nav-link">
                <span
                  style={{ cursor: "pointer" }}
                  className="nav-item text-warning"
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
      </div>
    </nav>
  );
};

export default withRouter(Menu);

{
  /*
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
  

*/
}
