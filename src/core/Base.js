import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My title",
  description = "My description",
  className = "bg-white text-dark p-4 ",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron  text-dark text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-white mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>If you got any query, feel free to ask</h4>
          <button className="btn btn-warning">Contact Us</button>
        </div>
      </footer>
    </div>
  );
};

export default Base;
