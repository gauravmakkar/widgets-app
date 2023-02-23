import {useParams} from "react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import {getOrder} from '../services/orderService';
import {useEffect, useState} from "react";
import Spinner from 'react-bootstrap/Spinner';
import withWidget from "../widget-framework/hoc/withWidget";

function Order() {
    const {id} = useParams();
    const [order, setOrder]= useState(null);

    const loadOrder = async () => {
        const order = await getOrder(id);
        setOrder(order);
    }

    useEffect(()=> {
        loadOrder()
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    {order && <Card className="text-center" style={{marginTop: 20}}>
                        <Card.Header>Order #{order.id}</Card.Header>
                        <Card.Body>
                            <Card.Title>{order.book.title}</Card.Title>
                            <Card.Text>
                                {order.book.description}
                            </Card.Text>
                        </Card.Body>
                        {order.book.extensions && <Card.Footer className="text-muted">{Object.keys(order.book.extensions).map((key)=>{
                            const extension = order.book.extensions[key];
                            return <div key={key}>{extension.label}: {extension.value}</div>
                        })}</Card.Footer>}
                    </Card>}
                    {!order && <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>}
                </Col>
            </Row>
        </Container>
    );
}

export default withWidget(Order);
