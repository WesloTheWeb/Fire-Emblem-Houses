import React from 'react';
import classes from './biocard.css';



const BioCard = (props) => {
    return (
        <div className={classes.BioCard}>
            <p>{props.image}</p>
            <p className={classes.studentInfo}>{props.name}</p>
            <p><b>Age:</b> <span className={classes.studentInfo}>{props.age}</span></p>
            <p><b>Height:</b> <span className={classes.studentInfo}>{props.height}</span></p>
            <p><b>House:</b> <span className={classes.studentInfo}>{props.house}</span></p>
            <p><b>Crest:</b> <span className={classes.studentCrest}>{props.crest}</span></p>
            <p><b>Likes:</b> <span className={classes.like}>{props.likes}</span></p>
            <p><b>Dislikes:</b> <span className={classes.dislike}>{props.dislikes}</span></p>
        </div>
    );
}

export default BioCard;