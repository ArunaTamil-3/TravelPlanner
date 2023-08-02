import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CreateTripApi from "../services/api";
import "../assets/style/login.css";
import TopNav from "./TopNav";

const AddNewPlan = () => {
  /*=====[ # Declare a State Variable  # ]=====*/

  const [planDetails, setPlanDetails] = useState({
    destination: "",
    startDate: "",
    endDate: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(errors).length != 0) {
      setErrors({});
    }
  }, [planDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /*=====[ # Validation # ]=====*/

  const validateForm = () => {
    let validationErrors = {};

    if (planDetails.destination == "") {
      validationErrors.destination = "Destination can not be empty!";
    }

    if (planDetails.startDate == "") {
      validationErrors.startDate = "Start date can not be empty!";
    }

    if (planDetails.endDate == "") {
      validationErrors.endDate = "End date can not be empty!";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  /*=====[ # Travel plan Add Function  # ]=====*/

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let isFormValid = validateForm();

    if (isFormValid) {
      setLoading(true);

      CreateTripApi.create(planDetails)
        .then((response) => {
          console.log(response);
          navigate("/viewplan");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <>
      <TopNav />
      <div className="">
        <div className="row g-0">
          <div className="col-lg-3"></div>

          <div className="col-xxl-12 col-lg-6 col-md-5 bg-login shadow">
            <div className="auth-full-page-content d-flex p-sm-5 p-4">
              <div className="w-100">
                <div className="d-flex flex-column h-100">
                  <div className="mb-4 mb-md-5 text-center"></div>

                  <div className="text-center">
                    <h5 className="mb-0">Add New Plan</h5>
                  </div>
                  <form className="mt-4 pt-2">
                    <div className="mb-3">
                      <label className="form-label">Destination</label>
                      <input
                        type="text"
                        className="form-control"
                        name="destination"
                        id="destination"
                        placeholder="Enter the destination!"
                        value={planDetails.destination}
                        onChange={handleChange}
                      />
                      <span className="text-danger">{errors.destination}</span>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex align-items-start">
                        <div className="flex-grow-1">
                          <label className="form-label">Start Date</label>
                        </div>
                      </div>

                      <div className="input-group auth-pass-inputgroup">
                        <input
                          type="date"
                          className="form-control"
                          name="startDate"
                          id="startDate"
                          placeholder="Enter the start date!"
                          value={planDetails.startDate}
                          onChange={handleChange}
                        />
                      </div>
                      <span className="text-danger">{errors.startDate}</span>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex align-items-start">
                        <div className="flex-grow-1">
                          <label className="form-label">End Date</label>
                        </div>
                      </div>

                      <div className="input-group auth-pass-inputgroup">
                        <input
                          type="date"
                          className="form-control"
                          name="endDate"
                          id="endDate"
                          placeholder="Enter the end date!"
                          value={planDetails.endDate}
                          onChange={handleChange}
                        />
                      </div>
                      <span className="text-danger">{errors.endDate}</span>
                    </div>

                    <div className="mb-3">
                      <button
                        className="btnn btn-primary w-100 waves-effect waves-light"
                        type="submit"
                        onClick={handleFormSubmit}
                      >
                        {loading ? (
                          <span className="spinner-border spinner-border-sm"></span>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
};

export default AddNewPlan;
