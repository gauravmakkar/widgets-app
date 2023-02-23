import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Card, Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";

const LeadSuccess = () => {
    return <Toast>
        <Toast.Header>
            <strong className="me-auto">Sent!</strong>
        </Toast.Header>
        <Toast.Body>Request successfully submitted to the administrator.</Toast.Body>
    </Toast>
}

function LeadForm() {
    const [lead, setLead] = useState(null);
    const saveLead = async (lead) => {
        localStorage.setItem(`lead-${lead.id}`, JSON.stringify(lead));
    }
    const handleSubmit = async (event) => {
        const form = event.target;
        const instance = {
            id: uuidv4(),
            email: form.email.value,
            message: form.message.value
        }
        await saveLead(instance)
        setLead(instance)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>Post your requirements!</Card.Header>
                    <Card.Body>
                        {!lead && <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="message">
                                <Form.Label>Requirements</Form.Label>
                                <Form.Control type="text" placeholder="text"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>}
                        {lead && <LeadSuccess/>}
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default LeadForm;
