import React from "react";
import {useNavigate} from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {getBooks} from "../services/bookService";
import withWidget from "../widget-framework/hoc/withWidget";

function Products() {
  const navigate = useNavigate();
  const Books= getBooks();
  const handleProductClick = (book) => {
    navigate(`/products/${book.id}`)

  }
  return (
    <Container>
      <Row md={3}>
        {Books.map((book) => {
          return <Col key={book.id}><Card style={{width: "18rem", margin: 20}}>
            <Card.Img variant="top"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1866617d717%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1866617d717%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22105.99609375%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"/>
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text bsPrefix={"book-description card-text"}>
                {book.description}
              </Card.Text>
              <Button variant="primary" onClick={() => {
                handleProductClick(book)
              }}>See details</Button>
            </Card.Body>
          </Card></Col>
        },)}

      </Row>
    </Container>
  );
}

export default withWidget(Products)
