import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate=useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if both username and password are empty
    if (username.trim() === "" && password.trim() === "") {
      setErrorVisible(true);
      setErrorMessage("Please fill in the username and password");
    } else if (username.trim() === "") {
      setErrorVisible(true);
      setErrorMessage("Please fill in the username");
    } else if (password.trim() === "") {
      setErrorVisible(true);
      setErrorMessage("Please fill in the password");
    } else {
      setErrorVisible(false);
      navigate('/home')
      // Hide error message if both fields are filled
      // Submit form or perform other actions
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <h2 className="text-center mb-5 display-3 mt-4">Admin</h2>{" "}
            <form className="Form" onSubmit={handleSubmit}>
              <div className="formborder p-5 m-3 mb-4 shadow-lg">
                <div className="form-group text-center d-flex justify-content-center align-items-center icon-inside-input">
                  <span className="icon">
                    <i className="bi bi-person-circle"></i>
                  </span>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    maxLength="28"
                    minLength="0"
                    className=" rounded form-control border border-dark border-2 rounded form-control-sm mt-4"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="form-group text-center d-flex justify-content-center align-items-center icon-inside-input">
                  <span className="icon">
                    <i className="bi bi-file-lock2-fill"></i>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="rounded form-control border border-dark border-2 rounded form-control-sm mt-4"
                    value={password}
                    onChange={handlePasswordChange}
                  />

                  {password.trim() !== "" && (
                    <span
                      className="password-toggle-icon"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <i className="bi bi-eye-slash-fill"></i>
                      ) : (
                        <i className="bi bi-eye-fill"></i>
                      )}
                    </span>
                  )}
                </div>
                {errorVisible && <p className="text-danger">{errorMessage}</p>}

                <div className="text-center mt-5">
                  <button type="submit" className="btn btn-primary">
                    <b>Enter</b>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
