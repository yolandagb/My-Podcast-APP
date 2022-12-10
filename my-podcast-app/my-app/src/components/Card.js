import React from "react";
import PropTypes from "prop-types";
import '../css/card.css';


export default function Card(props) {

    return (
        <div className="card-container">
            <img className="image-container" src={props.urlImg} alt="..." />
            <div className="card-content">
                <h5 className="card-title ">{props.title}</h5>
                <p className="card-text ">{props.text}</p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-dark" >{props.botton}</button>
                </div>
            </div>

        </div>

    )
}
Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    botton: PropTypes.string,
    urlImg: PropTypes.string
};
