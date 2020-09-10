import React from "react";
import { Link } from "react-router-dom";
const DiscoverLink = (props) => {
  return (
    <Link to="/shop">
      <button
        className="btn-discover"
        type="button"
        style={{ padding: "1.2rem" }}
      >
        <h5 style={{ margin: 0 }}>
          {props.text}{" "}
          <span
            style={{ fontSize: ".8rem", color: "grey", margin: "0 0 0 20px" }}
          >
            {props.span} items
          </span>
        </h5>
      </button>
    </Link>
  );
};

export default DiscoverLink;
