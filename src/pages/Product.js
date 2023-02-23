import React from "react";
import {useNavigate, useParams} from "react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {useWidgets} from "../widget-framework/providers/WidgetProvider";
import withWidget from "../widget-framework/hoc/withWidget";
import {getBookById} from "../services/bookService";
import {saveOrder} from "../services/orderService";

function Product() {
  const {id} = useParams();
  const {dispatcher} = useWidgets();
  const navigate = useNavigate();
  const book = getBookById(id);

  function handleSelect() {
    dispatcher({
      type: "BUY_CLICK",
      action: async (args) => {
        const order = await saveOrder({...book, extensions: args})
        navigate(`/order/${order.id}`)
      }
    })
  }

  return (
    <Container>
      <Row>
        <Col key={book.id}>
          <Card className="text-center" style={{marginTop: 20}}>
            <Card.Header>Book</Card.Header>
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                {book.description}
              </Card.Text>
              <Button variant="primary" onClick={handleSelect}>Buy</Button>
            </Card.Body>
            <Card.Footer className="text-muted">₹ {book.price}/-</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default withWidget(Product);
