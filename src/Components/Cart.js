import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import Order from "./Order";

const Cart = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button
        variant="light position-relative"
        onClick={() => {
          setShow(!show);
        }}
      >
        <i class="bi bi-cart-plus"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          3
        </span>
      </Button>
      <Offcanvas
        show={show}
        onHide={() => {
          setShow(!show);
        }}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart :</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Order />
          <div className="text-end m-2">
            <Button>Check Out</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;
