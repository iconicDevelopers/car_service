import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppCards from "./AppCards";

const Menu = () => {
  const [menu] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <section id="menu" className="bg-light">
      <Container>
        <div className="text-center">
          <h3 className="text-primary m-3 p-5">
            Treat Yourself With Our Everyday Menu
            <i className="bi bi-tiktok"></i>
          </h3>
        </div>
        <Row>
          {menu.map((item) => {
            return (
              <Col md={6} lg={4}>
                <AppCards />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
