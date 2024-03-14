import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User as users } from "../Assets/User";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Info() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const findUser = users.find((info) => info.id === parseInt(id));
    setInfo(findUser);
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="position-relative col-3 nav">
          <Header />
        </div>
        <div className="col-9 position-absolute w-100">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "80vh" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <h1 className="display-3 text-center m-5">Details</h1>
                  <div className=" border-bottom border-2 ">
                    <div className="outerdiv container d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <span className="display-6 fs-4 fw-bold">User</span>
                      </div>
                      <div>
                        <button
                          className="btn btn-primary"
                          onClick={() => navigate("/home")}
                        >
                          Back
                        </button>
                      </div>
                    </div>
                    <div className="info first">
                      <div className="row">
                        <div className="col-md-4">
                          <img src="your_image_url.jpg" alt="Your Image" />
                        </div>
                        <div className="col-md-4">
                          <label>First Name: {info.firstname || ""}</label>

                          <br />

                          <label for="email">Email: {info.email || ""}</label>
                          <br />
                          <label for="employee">Employee:</label>
                          <br />
                          <label for="designation">Designation:</label>
                          <br />
                        </div>
                        <div className="col-md-4">
                          <label for="lastname">
                            Last Name: {info.lastname || ""}
                          </label>
                          <br />
                          <label for="dob">
                            Date of Birth: {info.dob || ""}
                          </label>
                          <br />
                          <label for="gender">
                            Gender: {info.gender || ""}
                          </label>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
