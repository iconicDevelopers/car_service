import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const Order = () => {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Item One</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          2
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Item Two</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          4
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Item Three</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          6
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Order;
