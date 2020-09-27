import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../core/Menu";
import { getAllFeedbacks } from "./helper/adminapicall";

function Feedbacks() {
  const [forms, setForms] = useState([]);

  const preload = () => {
    getAllFeedbacks().then((res) => {
      setForms(res);
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div className="container-fluid">
      <Menu />
      <div style={{ marginTop: "50px" }}>
        <h2 className="text-center text-dark">Welcome Admin</h2>
        <p className="text-center text-dark">Check Feedbacks</p>
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
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody className="text-dark">
              {forms.map((form, idx) => {
                return (
                  <tr key={form._id}>
                    <td>{idx + 1}</td>
                    <td>{form.name}</td>
                    <td>{form.email}</td>
                    <td>{form.subject}</td>
                    <td>{form.message}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Feedbacks;
