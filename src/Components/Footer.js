// src/components/Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: info@axelsteeringrepair.com</p>
            <p>Phone: +91 9939803771</p>
          </Col>
          <Col md={6}>
            <h5>Location</h5>
            <p>1st Main Road, Nagavara Main Road, Gogappa Industrial Layout, SarVodaya Nagar, Bengaluru - 560045</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
