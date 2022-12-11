import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import '../css/card.css';
import { Card, Row, Col, Container } from "react-bootstrap";

// import { Link } from "react-router-dom";



export default function GeneralCard(props) {
    // let imgRandom = Math.floor(Math.random() * 1000 + 1);
    // let pathImg = "https://www.pcworld.es/cmsdata/features/3789766/star_wars_thumb900_1-1.jpg"+ imgRandom;
    // we will use this state to set the data we get back from the 
    // fetch request
    const [podcast, setPodcast] = useState([]);
    const [isTry, setisTry] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            "https://swapi.dev/api/people/"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    // use the data returned to set the newsPapers state 
                    setPodcast({ people: data.results })
                }
            })

            .catch((error) => console.log(error))

            .finally(() => setIsLoading(false));
    }, []);

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
                    setisTry({ podcast: data.feed.entry })
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
                            <Card.Text>{!isTry.feed ? null : podcast.feed.length}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
       
    </>









    )
}
Card.propTypes = {
    title: PropTypes.string,
};
