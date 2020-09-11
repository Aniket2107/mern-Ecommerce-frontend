import React, { useState } from "react";
import "../assests/styles/contactform.css";
import Menu from "./Menu";
import { postForm } from "./helper/contacthelper";
import { isAuthenticated } from "../auth/helper";

function Contact() {
  const [values, setValues] = useState({
    name: isAuthenticated() ? isAuthenticated().user.name : "",
    email: isAuthenticated() ? isAuthenticated().user.email : "",
    subject: "",
    message: "",
    error: "",
    success: "",
  });

  const { name, email, subject, message, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: "",
      success: "",
      [name]: event.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    postForm(values).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: "" });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          subject: "",
          message: "",
          error: "",
          success: "Message sent",
        });
      }
    });
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-center">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-center ">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            {success}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Menu />
      <section className="Material-contact-section section-padding section-dark">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 wow animated fadeInLeft"
              data-wow-delay=".2s"
            >
              <h1 className="section-title">Love to Hear From You</h1>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft"
              data-wow-delay=".2s"
            >
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content.
              </p>

              <div className="find-widget">
                Company:{" "}
                <a href="https://www.github.com/Aniket2107" target="_blank">
                  ANI TECH
                </a>
              </div>
              <div className="find-widget">
                Address: <a href="#">Thane</a>
              </div>
              <div className="find-widget">
                Phone: <a href="#">+91 95116780</a>
              </div>

              <div className="find-widget">
                Website:{" "}
                <a href="https://anikethabib.netlify.app" target="_blank">
                  AniketHabib
                </a>
              </div>
            </div>

            <div
              className="col-md-6 wow animated fadeInRight"
              data-wow-delay=".2s"
            >
              {successMessage()}
              {errorMessage()}
              <form className="shake text-dark">
                <div className="form-group label-floating">
                  <label className="control-label text-dark" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    required
                    onChange={handleChange("name")}
                    value={name}
                    data-error="Please enter your name"
                  />
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group label-floating">
                  <label className="control-label text-dark" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={handleChange("email")}
                    data-error="Please enter your Email"
                  />
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group label-floating">
                  <label className="control-label text-dark">Subject</label>
                  <input
                    className="form-control"
                    id="msg_subject"
                    type="text"
                    name="subject"
                    required
                    value={subject}
                    onChange={handleChange("subject")}
                    data-error="Please enter your message subject"
                  />
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group label-floating">
                  <label for="message" className="control-label text-dark">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    id="message"
                    name="message"
                    required
                    value={message}
                    onChange={handleChange("message")}
                    data-error="Write your message"
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-submit mt-5">
                  <button
                    className="btn btn-common"
                    type="submit"
                    id="form-submit"
                    onClick={onSubmit}
                  >
                    <i className="material-icons mdi mdi-message-outline"></i>{" "}
                    Send Message
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                  <div className="clearfix"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
