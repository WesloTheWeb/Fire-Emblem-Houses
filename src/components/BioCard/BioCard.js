import React from 'react';
import classes from './biocard.css';



const BioCard = (props) => {
    const {image, name, age, height, house, crest, likes, dislikes} = props;
    const {studentInfo, BioCard, studentCrest, likeColor, dislikeColor} = classes;
    
    return (
        <div className={BioCard}>
            <p>{image}</p>
            <p className={studentInfo}>{name}</p>
            <p><b>Age:</b> <span className={studentInfo}>{age}</span></p>
            <p><b>Height:</b> <span className={studentInfo}>{height}</span></p>
            <p><b>House:</b> <span className={studentInfo}>{house}</span></p>
            <p><b>Crest:</b> <span className={studentCrest}>{crest}</span></p>
            <p><b>Likes:</b> <span className={likeColor}>{likes}</span></p>
            <p><b>Dislikes:</b> <span className={dislikeColor}>{dislikes}</span></p>
        </div>
    );
}

export default BioCard;