import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutImage from "../assets/amgc43amgcrightfrontthreequarter.jpeg";
import "../css/nav.css";

const AboutUs = () => {
  return (
    <Container fluid className="about-section">
      <Row className="align-items-center">
        <Col md={6} xs={12}>
          <div className="about-image-container">
            <Image
              src={aboutImage}
              alt="About Us"
              className="about-image"
              fluid
            />
          </div>
        </Col>

        <Col md={6} xs={12} className="about-content">
          <h2 className="about-heading">About Us</h2>
          <h3 className="about-subheading">
            The best automobile repair services for you
          </h3>
          <p>
            We provide comprehensive axle, steering rack, and power steering
            pump repair services for a wide range of vehicles. Our team of
            experienced professionals is committed to delivering high-quality
            services and ensuring your vehicle is in optimal condition.
          </p>
          <p>
            With advanced equipment and extensive industry experience, we
            guarantee timely and efficient repairs. Your satisfaction is our
            priority, and we strive to exceed your expectations with every
            service.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
