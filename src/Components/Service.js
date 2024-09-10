import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../css/nav.css"; // Import custom CSS for hover effects

const serviceData = [
  {
    title: "Axel Repair",
    description: "High-quality axel repair for all types of vehicles.",
    iconClass: "bi bi-car-front",
  },
  {
    title: "Steering Rack Repair",
    description:
      "Professional steering rack repair services to ensure smooth driving.",
    iconClass: "bi bi-steering-wheel",
  },
  {
    title: "Power Steering Pump Repair",
    description:
      "Repair of power steering pumps for Indian and imported vehicles.",
    iconClass: "bi bi-gear",
  },
];

const Service = () => {
  return (
    <Container id="services" className="ourServiceHeader">
      <h2 className="text-center">Our Services</h2>
      <Row className="mt-4">
        {serviceData.map((service, index) => (
          <Col md={4} key={index} className="wow fadeInUp">
            <Card className="service-card text-center">
              <Card.Body>
                <i
                  className={`${service.iconClass} mb-3`}
                  style={{ fontSize: "3rem" }}
                ></i>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Service;
