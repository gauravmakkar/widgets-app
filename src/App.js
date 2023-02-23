import React, {useState} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css"
import Routes from "./Routes";
import WidgetProvider from "./widget-framework/providers/WidgetProvider";



function App() {
  const [activeNav, setActiveNav] = useState("1");

  const handleSelect= (eventKey) => {
    setActiveNav(eventKey);
  }

  return (
    <WidgetProvider>
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Book Shelf</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" activeKey={activeNav} onSelect={handleSelect}>
                <Nav.Link as={Link} eventKey="1" to="/">Home</Nav.Link>
                <Nav.Link as={Link}  eventKey="2" to="/products">Products</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <Routes/>

      </main>
    </WidgetProvider>
  );
}

export default App;
