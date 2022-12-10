// import React, { useState,useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import '../css/card.css';


export default function Card(props) {
    // const { store, actions } = useContext(Context);
    let imgRandom = Math.floor(Math.random() * 1000 + 1);
    let pathImg = "https://www.pcworld.es/cmsdata/features/3789766/star_wars_thumb900_1-1.jpg"+ imgRandom;

    // eslint-disable-next-line no-unused-vars
   
    return (<>
    
    <div className="card-container">
			<img src={pathImg} className="card-img-fluid" alt="..." />
			<div className="card-body">
				<p className="card-text">
					<h3 className="card-name">{props.title}</h3>
					<h5 className="card-title">{props.children}</h5>
				</p>
			</div>
		</div>

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
	children: PropTypes.string
};
