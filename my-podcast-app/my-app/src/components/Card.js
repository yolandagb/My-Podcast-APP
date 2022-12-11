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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://swapi.dev/api/people/"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if(data) {
            // use the data returned to set the newsPapers state 
            setPodcast({ people: data.results })
          }
      })
     
      .catch((error) => console.log(error))
     
      .finally(() => setIsLoading(false));
  }, []);
    
    

   
    return (<>
       <Container>
            <Row>
                    <Col  xs={12} md={4} lg={3}>
                        <Card >
                            <Card.Img src="https://via.placeholder.com/150x75" />

                            <Card.Body>
                                
                                <Card.Text>{!podcast.people ? null : podcast.people.length}</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>

                    {/* <Col xs={12} md={4} lg={3}>
                        <Card >
                            <Card.Img src="https://via.placeholder.com/150x75" />

                            <Card.Body>
                                <Card.Title></Card.Title>
                                {isLoading && <p>Loading...</p>}
                                <Card.Text>team_name</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
                
            </Row>
        </Container>
    
    {/* <div className="card-container">
			<img src="" className="card-img-fluid" alt="..." />
			<div className="card-body">
				<p className="card-text">
					<h3 className="card-name">{props.title}</h3>
					{/* <h5 className="card-title">{props.children}</h5> */}
				{/* </p>
			</div>
		</div> */} 

        {/* <h1> {</h1> */}
{/* 
         <ul>
         {podcast?.map((item, i) => {
           return(
            <li key={i}>{item.name}</li>
           )
         })}
       </ul> */}
       </>






        
       

    )
}
Card.propTypes = {
    title: PropTypes.string,
};
