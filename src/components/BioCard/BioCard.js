import React from 'react';
import classes from './biocard.css';



const BioCard = (props) => {
    return (
        <div className={classes.BioCard}>
            <p>{props.image}</p>
            <p>{props.name}</p>
            <p><b>Age:</b> {props.age}</p>
            <p><b>Height:</b> {props.age}</p>
            <p><b>House:</b> {props.house}</p>
            <p><b>Crest:</b> {props.crest}</p>
            <p><b>Likes:</b> {props.likes}</p>
            <p><b>Dislikes:</b> {props.dislike}</p>
        </div>
    );
}

export default BioCard;