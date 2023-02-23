import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React from "react";

const CustomizationForm = ({done, abort, widget}) => {
  const handleFormSubmit = (event) => {
    const form = event.target;
    done({message: {label: "Message to the seller",value:form.message.value}, giftWrapped: {label: "Gift wrap this product?", value:form.giftWrapped.value}})
  }
  return (<Modal show={widget} onHide={abort}>
    <Modal.Header closeButton>
      <Modal.Title>Customizations</Modal.Title>
    </Modal.Header>
    <Form onSubmit={handleFormSubmit}>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Your message to the seller</Form.Label>
          <Form.Control type="text" placeholder="Enter your message"/>
          <Form.Text className="text-muted">
                            Relax! your message will be shared anonymously.
          </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="giftWrapped">
          <Form.Check type="checkbox" label="Gift wrap this product?"/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={abort}>
                        Cancel
        </Button>
        <Button type="submit" variant="primary">
                        Confirm
        </Button>
      </Modal.Footer>
    </Form>
  </Modal>

  )
}
export default CustomizationForm;
