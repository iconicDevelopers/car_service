// src/components/Hero.js
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/nav.css";
const Content = () => {
  return (
    <Container fluid className="jumbotron-custom">
      <div className="overlay">
        <Row className="justify-content-center  text-center">
          <Col md={8}>
            <h1 className="cl">Expert Axel & Steering Rack Repair</h1>
            <p>
              Specialist in Indian & Imported Car Power Steering Pump & Axel
              Repair Works
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Content;
