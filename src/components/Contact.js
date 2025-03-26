import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Check for empty fields
    if (!formDetails.firstName) {
      formIsValid = false;
      errors.firstName = "First name is required.";
    }

    if (!formDetails.lastName) {
      formIsValid = false;
      errors.lastName = "Last name is required.";
    }

    if (!formDetails.email) {
      formIsValid = false;
      errors.email = "Email is required.";
    }

    if (!formDetails.phone) {
      formIsValid = false;
      errors.phone = "Phone number is required.";
    }

    if (!formDetails.message) {
      formIsValid = false;
      errors.message = "Message is required.";
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    if (!validateForm()) {
      setButtonText("Send");
      return;
    }

    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      let result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      if (response.ok && result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({ success: false, message: "Something went wrong, please try again later." });
      }
    } catch (error) {
      console.error("Error:", error);
      setButtonText("Send");
      setStatus({ success: false, message: "Error connecting to server. Please try again later." });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  {/* Form Container with Transparent Background */}
                  <div className="form-container">
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.firstName}
                            placeholder="First Name"
                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          />
                          {formErrors.firstName && <p className="error">{formErrors.firstName}</p>}
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.lastName}
                            placeholder="Last Name"
                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          />
                          {formErrors.lastName && <p className="error">{formErrors.lastName}</p>}
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="email"
                            value={formDetails.email}
                            placeholder="Email Address"
                            onChange={(e) => onFormUpdate('email', e.target.value)}
                          />
                          {formErrors.email && <p className="error">{formErrors.email}</p>}
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="tel"
                            value={formDetails.phone}
                            placeholder="Phone No."
                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                          />
                          {formErrors.phone && <p className="error">{formErrors.phone}</p>}
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea
                            rows="6"
                            value={formDetails.message}
                            placeholder="Message"
                            onChange={(e) => onFormUpdate('message', e.target.value)}
                          ></textarea>
                          {formErrors.message && <p className="error">{formErrors.message}</p>}
                          <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                        {status.message &&
                          <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>
                        }
                      </Row>
                    </form>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
