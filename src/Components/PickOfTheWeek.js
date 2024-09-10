import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";

const PickOfTheWeek = () => {
  const [show, setShow] = useState(false);
  return (
    <section id="musttry">
      <div className="text-center py-5 ">
        <h2 className="text-primary dispaly-5">
          <i className="bi bi-search-heart"></i>Pick Of The Week!
        </h2>
      </div>

      <Container>
        <Row className="align-items-center mb-3">
          <Col md={7}>
            <Image
              src={require("../assets/FlexBanner1.jpeg")}
              fluid={true}
              alt="Lightning Image"
              rounded
            ></Image>
          </Col>
          <Col md={5}>
            <div className="m-3">
              <h2 className="h1">Lightning PhotoGraphy</h2>
              <p className="lead muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                mollitia fuga. At sapiente repellendus accusamus quibusdam odio
                eum quis aliquam
              </p>
              <Button
                onClick={() => {
                  setShow(true);
                }}
              >
                <i className="bi bi-basket"></i> Buy Now
              </Button>
            </div>
          </Col>
        </Row>
        <ToastContainer
          className="position-fixed Top-0 end-0 p-3"
          position={"top-end"}
          style={{ zIndex: 1 }}
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Item Added To Cart</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </section>
  );
};

export default PickOfTheWeek;
