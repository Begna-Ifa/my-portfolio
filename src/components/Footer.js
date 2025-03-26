import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import profileImage from '../assets/img/myLogo.png'; 
import mine from "../assets/img/mine.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="position-relative">
            <img
                src={profileImage}
                alt="Profile"
                className="profile-circle"
              />
            <img src={mine} alt="Logo" className="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/wakisa-birhanu-90828634b/"><img src={navIcon1} alt="" /></a>
              <a href="https://web.facebook.com/wekisab.bulaa/friends"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/wekisab"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright &copy;Waaqo Bire 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
