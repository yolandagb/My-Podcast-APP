import InfoCard from "../components/InfoCard";
import '../css/card.css';
import { Card, Row, Col, Container } from "react-bootstrap";


export default function Episode() {
    return (<>
        <div className="info-container">       
        <InfoCard></InfoCard>
        </div>

        <div className="detail-container">

        <Container>
            <Row>
                <Col xs={12} md={4} lg={3}>
                    <Card >
                        <Card.Img src="https://via.placeholder.com/150x75" />

                        <Card.Body>
                            <Card.Text></Card.Text>
                            <Card.Text>Song Exploder</Card.Text>
                            <Card.Text>Description</Card.Text>
                            <p></p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        </div>
    </>
    )
}