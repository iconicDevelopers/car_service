import React from "react";
import "../css/nav.css"; // Import custom styles

// Import images
import ford from "../assets/ford.svg";
import bmw from "../assets/bmw.svg";
import hyundai from "../assets/hyundai.svg";
import jaguar from "../assets/jaguar.svg";
import kia from "../assets/kia.svg";
import mercedes from "../assets/mercedes.svg";
import tata from "../assets/tata.svg";
import suzuki from "../assets/suzuki.svg";
import toyota from "../assets/toyota.svg";
import volksWagon from "../assets/volkswagen.svg";
import skoda from "../assets/skoda.svg";
import mg from "../assets/mg.svg";
import honda from "../assets/honda.svg";
import audi from "../assets/audi.svg";
import { Col, Container, Row } from "react-bootstrap";
// Array of images
const carImages = [
  ford,
  bmw,
  hyundai,
  jaguar,
  tata,
  kia,
  mercedes,
  suzuki,
  honda,
  volksWagon,
  mg,
  skoda,
  audi,
  toyota,
];

const CarWrapper = () => {
  return (
    <Container fluid className="car-wrapper-section text-center">
      <Row>
        <Col>
          <h2 className="service-heading">
            We provide service for these model cars
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="car-wrapper">
            <div className="car-images">
              {carImages.concat(carImages).map((image, index) => (
                <img key={index} src={image} alt={`Car ${index + 1}`} />
              ))}
              {/* Duplicate the images for continuous scrolling */}
              {carImages.map((image, index) => (
                <img
                  key={index + carImages.length}
                  src={image}
                  alt={`Car Duplicate ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CarWrapper;
