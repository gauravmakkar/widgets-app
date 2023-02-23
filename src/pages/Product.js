import React, {useEffect, useState} from "react";
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
import Spinner from "../components/Spinner";

function Product() {
  const {id} = useParams();
  const {dispatcher} = useWidgets();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  const loadBook = async () => {
    setBook(await getBookById(id));
  }

  useEffect(() => {
    loadBook()
  })

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
        <Col>
          {book && <Card className="text-center" style={{marginTop: 20}}>
            <Card.Header>Book</Card.Header>
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                {book.description}
              </Card.Text>
              <Button variant="primary" onClick={handleSelect}>Buy</Button>
            </Card.Body>
            <Card.Footer className="text-muted">₹ {book.price}/-</Card.Footer>
          </Card>}
          {!book && <Spinner/>}
        </Col>
      </Row>
    </Container>
  );
}

export default withWidget(Product);
