import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Adduser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [emplyeeDetail, setEmployeeDetail] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    role: "",
    email: "",
    password: "",
    mobile: "",
    dob: "",
    gender: "",
    empId: "",
  });

  //handles Input from the inputbox
  const handleInputs = (key, value) => {
    // store a input values in state variable
    setEmployeeDetail({ ...emplyeeDetail, [key]: value });
    setError({ ...error, [key]: "" });
  };
  const [flag, setFlag] = useState(false);
  // handls Submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // store a error if any
    const validationError = validation(emplyeeDetail);
    setTimeout(() => {
      if (!flag) {
        setError(validationError);
        setFlag(true);
        setLoading(true);
      } else {
        console.log(emplyeeDetail);
      }
      setLoading(false);
    }, 3000);
  };

  // Validation form
  const validation = (data) => {
    let errors = {};
    // check the firstName has value
    if (!data.firstName.trim()) {
      errors.firstName = "First Name Required";
      console.log(errors);
      setFlag(true);
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Last Name Required";
      setFlag(true);
    }

    if (!data.designation.trim()) {
      errors.designation = "Specify a Designation";
      setFlag(true);
    }
    if (!data.role) {
      errors.role = "Please Select a Role";
      setFlag(true);
    }

    if (!data.role) {
      errors.role = "Please Select a Role";
      setFlag(true);
    }

    if (!data.email.trim()) {
      errors.email = "email is required";
      setFlag(true);
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Please Enter a Valid Email";
      setFlag(true);
    }

    if (!data.password.trim()) {
      errors.password = "Enter a password";
      setFlag(true);
    }

    if (!data.mobile.trim()) {
      errors.mobile = "Enter a Mobile Number";
      setFlag(true);
    } else if (!/^\d+$/.test(data.mobile)) {
      errors.mobile = "Please Enter a Valid Mobile Number";
    }

    if (!data.dob) {
      errors.dob = "Select Your DOB";
      setFlag(true);
    }

    if (!data.gender) {
      errors.gender = "Please Select The Gender";
      setFlag(true);
    }

    if (!data.empId.trim()) {
      errors.empId = "Enter Employee ID";
      setFlag(true);
    }

    return errors;
  };

  return (
    <div className="position-relative">
      <div className="col-3 col-lg-2  min-vh-100 position-absolute">
        <Header />
      </div>
      <div
        className="d-flex justify-content-center align-items-center position-absolute add"
        style={{ minHeight: "80vh" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="1stdiv  ">
                <div className="outerdiv container d-flex justify-content-between align-items-center">
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
                <form onSubmit={handleSubmit} className="p-2">
                  <div className="forms">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="First name"
                          aria-label="First name"
                          style={{ borderBottom: "1px solid black" }}
                          onChange={(e) =>
                            handleInputs("firstName", e.target.value)
                          }
                        />
                        {error.firstName && (
                          <p className="text-danger ms-3 fs-6 mt-1">
                            {error.firstName}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          aria-label="Last name"
                          style={{ borderBottom: "1px solid black" }}
                          onChange={(e) =>
                            handleInputs("lastName", e.target.value)
                          }
                        />
                        {error.lastName && (
                          <p className="text-danger ms-3 fs-6 mt-1">
                            {error.lastName}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Designation"
                          style={{ borderBottom: "1px solid black" }}
                          onChange={(e) =>
                            handleInputs("designation", e.target.value)
                          }
                        />
                        {error.designation && (
                          <p className="text-danger ms-3 fs-6 mt-1">
                            {error.designation}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6">
                        <select
                          className="form-select"
                          aria-label="Role"
                          style={{ borderBottom: "1px solid black" }}
                          onChange={(e) => handleInputs("role", e.target.value)}
                        >
                          {error.role && (
                            <p className="text-danger ms-3 fs-6 mt-1">
                              {error.role}
                            </p>
                          )}
                          <option selected value="null">
                            Role
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          style={{ borderBottom: "1px solid black" }}
                          onChange={(e) =>
                            handleInputs("email", e.target.value)
                          }
                        />
                        {error.email && (
                          <p className="text-danger ms-3 fs-6 mt-1">
                            {error.email}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6">
                        <input
                          type="password"
                          className="form-control "
                          placeholder="Password"
                          style={{ borderBottom: "1px solid black" }}
                          onChange={(e) =>
                            handleInputs("password", e.target.value)
                          }
                        />
                        {error.password && (
                          <p className="text-danger ms-3 fs-6 mt-1">
                            {error.password}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Mobile number"
                          style={{ borderBottom: "1px solid black" }}
                          onChange={(e) =>
                            handleInputs("mobile", e.target.value)
                          }
                        />
                        {error.mobile && (
                          <p className="text-danger ms-3 fs-6 mt-1">
                            {error.mobile}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Date of Birth"
                          onChange={(e) => handleInputs("dob", e.target.value)}
                          style={{ borderBottom: "1px solid black" }}
                        />
                        {error.dob && (
                          <p className="text-danger ms-3 fs-6 mt-1">
                            {error.dob}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6">
                        <select
                          className="form-select"
                          aria-label="Gender"
                          style={{ borderBottom: "1px solid black" }}
                          onChange={(e) =>
                            handleInputs("gender", e.target.value)
                          }
                        >
                          {error.gender && (
                            <p className="text-danger ms-3 fs-6 mt-1">
                              {error.gender}
                            </p>
                          )}
                          <option selected value="null">
                            Gender
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Employee ID Number"
                          style={{ borderBottom: "1px solid black" }}
                          onChange={(e) =>
                            handleInputs("empId", e.target.value)
                          }
                        />
                        {error.empId && (
                          <p className="text-danger ms-3 fs-6 mt-1">
                            {error.empId}
                          </p>
                        )}
                      </div>
                      {/* <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control border-0 border-top-0 border-end-0 border-start-0"
                        placeholder="Company"
                        style={{ borderBottom: "1px solid black" }}
                        onChange={(e)=>handleInputs('company',e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control border-0 border-top-0 border-end-0 border-start-0"
                        placeholder="Request Time Token"
                        style={{ borderBottom: "1px solid black" }}
                      />
                    </div> */}
                      <div className="col-md-6">
                        <img src="#" alt="User" className="mt-5" />
                      </div>
                      <div className="col-md-6 d-flex justify-content-end align-items-center mt-5">
                        <button
                          className="btn btn-secondary me-2"
                          onClick={() => navigate("/home")}
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                          {loading ? (
                            <div className="spinner-border" role="status">
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
