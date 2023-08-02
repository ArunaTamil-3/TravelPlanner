
import { useEffect, useState } from 'react';
import CreateTripApi from "../services/api";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModelPopup({ show_model, handle_close }) {


  /*=====[ # Declare a State Variable  # ]=====*/


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [planDetails, setPlanDetails] = useState({
    destination: "",
    startDate: "",
    endDate: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length != 0) {
      setErrors({});
    }
  }, [planDetails]);

  useEffect(() => {
    if (show_model != 'hide') {
      setShow(true);
      setPlanDetails(show_model.data);
    }
  }, [show_model]);

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

    if (planDetails.destination == '') {
      validationErrors.destination = "Destination can not be empty!";
    }

    if (planDetails.startDate == '') {
      validationErrors.startDate = "Start date can not be empty!";
    }

    if (planDetails.endDate == '') {
      validationErrors.endDate = "End date can not be empty!";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };


  /*=====[ # Travel plan Update Function  # ]=====*/

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let isFormValid = validateForm();

    if (isFormValid) {
      setLoading(true);

      CreateTripApi.edit(planDetails, show_model.id)
        .then(response => {
          setLoading(false);
          handleClose();
          handle_close();
        })
        .catch(e => {
          console.log(e);
        });

    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Travel Plan</Modal.Title>
      </Modal.Header>

      <Modal.Body>
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
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleFormSubmit}
        >
          {loading ? <span className="spinner-border spinner-border-sm"></span> : "Submit"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}