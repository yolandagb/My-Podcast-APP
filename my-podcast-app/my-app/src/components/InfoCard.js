import React, { useEffect, useState } from 'react'
import '../css/card.css';
import { Card, Row, Col, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";



export default function InfoCard(props) {

    const [podcast, setPodcast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        fetch(
            "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data.feed.entry);
                if (data) {
                    // use the data returned to set the newsPapers state 
                    setPodcast({ podcast: data.feed.entry })
                }
            })

            .catch((error) => console.log(error))

            .finally(() => setIsLoading(false));
    }, []);



    return (<>
        <Container>
            <Row>
                <Col xs={12} md={4} lg={3}>
                    <Card >
                        <Card.Img src="https://via.placeholder.com/150x75" />

                        <Card.Body>
                            {podcast.people?.map((item, i) => {
                                return (
                                    <li key={i}>{item.name}</li>
                                )
                            })}

                            <Card.Text>{!podcast.people ? null : podcast.people.length}</Card.Text>
                            <Card.Text>Song Exploder</Card.Text>
                            <Card.Text>Description</Card.Text>
                            <p>{!podcast.people ? null : podcast.people.length}</p>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    </>









    )
}