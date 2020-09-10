import React, { Component } from "react";

const imageStyle = {
  width: "inherit",
};

export default class Hero extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          height: "80vh",
          overflow: "hidden",
          background: "rgb(236,236,236)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img
                src="/images/model_with_black_clothes_and_glasses.png"
                alt=""
                className="img-responsive"
                style={imageStyle}
              />
            </div>
            <div
              className="col-md-6 col-sm-12"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                height: "80vh",
                alignItems: "center",
              }}
            >
              <h1>
                <b>Welcome to our Website</b>
              </h1>
              <p>All we ever do is gonna Blah blah blahx</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
