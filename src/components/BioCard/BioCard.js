import React from 'react';
import classes from './biocard.css';



const BioCard = (props) => {
    const {image, name, age, height, house, crest, likes, dislikes} = props
    
    return (
        <div className={classes.BioCard}>
            <p>{image}</p>
            <p className={classes.studentInfo}>{name}</p>
            <p><b>Age:</b> <span className={classes.studentInfo}>{age}</span></p>
            <p><b>Height:</b> <span className={classes.studentInfo}>{height}</span></p>
            <p><b>House:</b> <span className={classes.studentInfo}>{house}</span></p>
            <p><b>Crest:</b> <span className={classes.studentCrest}>{crest}</span></p>
            <p><b>Likes:</b> <span className={classes.like}>{likes}</span></p>
            <p><b>Dislikes:</b> <span className={classes.dislike}>{dislikes}</span></p>
        </div>
    );
}

export default BioCard;