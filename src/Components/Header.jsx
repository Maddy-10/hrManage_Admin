
import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="bg-dark col-auto col-md-12 min-vh-100 d-flex justify-content-between flex-column">
            <div className="navvbar">
              <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter mt-4 ms-3">
                <span className="ms-1 fs-4">Admin</span>
              </a>
              <hr className="text-secondary d-none d-sm-block" />
              <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <Link
                    to="/home"
                    className="nav-link active text-white fs-5 bg-dark"
                    aria-current="page"
                  >
                    <i className="bi bi-speedometer2"></i>
                    <span className="ms-2 d-none d-sm-inline">Home</span>
                  </Link>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <Link
                    to="/leave"
                    className="nav-link active text-white fs-5 bg-dark"
                    aria-current="page"
                  >
                    <i className="bi bi-house"></i>
                    <span className="ms-2 d-none d-sm-inline">Leave</span>
                  </Link>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <Link
                    to="/"
                    className="nav-link active text-white fs-5 bg-dark"
                    aria-current="page"
                  >
                    <i className="bi bi-people"></i>
                    <span className="ms-2 d-none d-sm-inline">LogOut</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
