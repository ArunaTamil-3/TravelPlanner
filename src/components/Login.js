import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/auth";
import "../assets/style/login.css";
import { Link } from "react-router-dom";

const Login = () => {

  /*=====[ # Declare a State Variable  # ]=====*/ 

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /*=====[ # Validation # ]=====*/

  const validateForm = () => {
    let validationErrors = {};

    if (!loginData.username.trim()) {
      validationErrors.username = "username is required";
    } else if (loginData.username.length < 4) {
      validationErrors.username = "Input must be at least 4 characters long.";
    } else if (!loginData.password.trim()) {
      validationErrors.password = "password is required";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  /*=====[ # Travel plan Add Function  # ]=====*/

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    setLoading(true);

    if (isFormValid) {
      dispatch(login(loginData))
        .then(() => {
          navigate("/addnewplan");
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="loginn-bg">
        <div className="row g-0">

          <div className="col-lg-4"></div>

          <div className="col-xxl-12 col-lg-4 col-md-5 bg-login">
            <div className="auth-full-page-content d-flex p-sm-5 p-4">
              <div className="w-100">
                <div className="d-flex flex-column h-100">
                  <div className="mb-4 mb-md-5 text-center"></div>
                  <div className="">
                    <div className="text-center">
                      <h5 className="mb-0">Time To Plan</h5>
                    </div>
                    <form className="mt-4 pt-2" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                          className="form-control"
                          type="text"
                          name="username"
                          value={loginData.username}
                          onChange={handleChange}
                        />
                        {errors.username && (
                          <span className="text-danger">{errors.username}</span>
                        )}
                      </div>

                       <div className="mb-3">
                        <div className="d-flex align-items-start">
                          <div className="flex-grow-1">
                            <label className="form-label">Password</label>
                          </div>
                        </div>

                        <div className="input-group auth-pass-inputgroup">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Enter password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                            value={loginData.password}
                            onChange={handleChange}
                          />
                          {errors.password && (
                            <span className="text-danger">
                              {errors.password}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mb-3">
                        <button
                          className="btnn btn-primary w-100 waves-effect waves-light"
                          disabled={loading}
                        >
                          <span>Log In</span>
                          {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                        </button>

                        <Link to="/">
                          <button
                            className="btnn btn-primary w-100 waves-effect waves-light"
                            type="submit"
                          >
                            &#8592; Back To Home
                          </button>
                        </Link>

                        {message && (
                          <div className="form-group mt-3">
                            <div className="alert alert-danger" role="alert">
                              {message}
                            </div>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
