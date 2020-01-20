import React from 'react';
import classes from './houseCards.css';
import Black_Eagles_Banner from './Black_Eagles_Banner.png';
import Blue_Lions_Banner from './Blue_Lions_Banner.png';
import Golden_Deer_Banner from './Golden_Deer_Banner.png';
import Church_Banner from './Church_of_Seiros_Banner.png';

const blackEagles = {
    roster: [
        {
            image: '', 
            name: 'Edelgard von Hresvelg',
            age: 17, 
            height: '175cm',
            House: 'Hresvelg', Crest: 'unknown',
            Likes: 'Likes', 
            Dislikes: 'dislikes'
        },
        {
            image: '', 
            name: 'Hubert von Vestra',
            age: 20, 
            height: '175cm',
            House: 'Vestra', Crest: 'unknown',
            Likes: 'Likes', 
            Dislikes: 'dislikes'
        },
        {
            image: '', 
            name: 'Ferdinand von Aegir',
            age: 17, 
            height: '175cm',
            House: 'Aegir', Crest: 'unknown',
            Likes: 'Likes', 
            Dislikes: 'dislikes'
        },
        {
            image: '', 
            name: 'Petra Macneary',
            age: 15, 
            height: '175cm',
            House: 'Princess of Brigid', Crest: 'unknown',
            Likes: 'Likes', 
            Dislikes: 'dislikes'
        },
        {
            image: '', 
            name: 'Caspar von Bergliez',
            age: 16, 
            height: '175cm',
            House: 'Bergliez', Crest: 'unknown',
            Likes: 'Likes', 
            Dislikes: 'dislikes'
        },
        {
            image: '', 
            name: 'Linhardt von Hevring',
            age: 16, 
            height: '175cm',
            House: 'Hevring', Crest: 'unknown',
            Likes: 'Likes', 
            Dislikes: 'dislikes'
        },
        {
            image: '', 
            name: 'Bernadetta von Varley',
            age: 17, 
            height: '175cm',
            House: 'Varley', Crest: 'unknown',
            Likes: 'Likes', 
            Dislikes: 'dislikes'
        },
        {
            image: '', 
            name: 'Dorothea Arnault',
            age: 18, 
            height: '175cm',
            House: 'N/A', Crest: 'unknown',
            Likes: 'Likes', 
            Dislikes: 'dislikes'
        },
    ]
};


const goldenDeer = {
    goldenDeer: [
        {
            image: '',
            name: 'Claude von Riegan',
            age: 17,
            height: '175cm',
            House: 'Riegan', Crest: 'Minor Crest Riegan',
            Likes: 'feasts, long rids, archery, topics of curiosity',
            Dislikes: `blind reliance on gods, leaving things to chance, 
            being bound to common sense`},
        {
            image: '',
            name: 'Hilda Valentine Goneril',
            age: 18,
            height: '154cm',
            House: 'Goneril', Crest: `Minor Crest Goneril`,
            Likes: `fashion, chatting, persuasion, singing, dancing, colorful flowers`,
            Dislikes: `Effort, exhaustion, responsibility, extreme heat or cold`
        },
        {
            image: '',
            name: `Leonie Pinelli`,
            age: 20,
            height: '168cm',
            House: `Commoner`, Crest: `N/A`,
            Likes: `Captain Jeralt, military arts, competition, hunting, fishing, gardening, collecting and reusing discarded objects`,
            Dislikes: `Defeat, decadence, debt, poisonous creatures`
        },
        {
            image: '',
            name: 'Lorenz Hellman Gloucester',
            age: 19,
            height: '188cm',
            House: `Gloucester`, Crest: `Minor Crest Gloucester`,
            Likes: `tea, red roses, art, worthy women, nobility`,
            Dislikes: `coffee, injustie, filth, foul odors, vulgarity`
        },
        {
            image: '',
            name: 'Lysithea von Ordelia',
            age: 15,
            height: '148cm',
            House: 'Ordelia', Crest: 'Crest Gloucester, Minor Crest Charon',
            Likes: `sweets, cute things, lilies`,
            Dislikes: `being treated like a child, anything physically laborious, ghosts, bitter foods`
        },
        {
            image: ``,
            name: 'Raphael Kirsten',
            age: 18,
            height: '190cm',
            House: `Commoner`, Crest: `N/A`,
            Likes: `pure protein, muscles, training, his baby sister`,
            Dislikes: `book learning, unfinished meals`
        },
        {
            image: '',
            name: 'Marianne von Edmund',
            age: 18,
            height: '163cm',
            House: `Edmund`, Crest: `Mystery Crest`,
            Likes: `the goddess, birds and other animals, reading, delicate flowers`,
            Dislikes: `herself, crests, tidying up`
        },
        {
            image: '',
            name: 'Ignatz Victor',
            age: 17,
            height: '164cm',
            House: 'Commoner', Crest: 'N/A',
            Likes: `art, the goddess, the four saints, striking landscapes, faraway lands, peace and quiet, beautiful flowers`,
            Dislikes: `people who don't appreciate art, stressful situations, lightning`
        },
    ]
};

const HouseCards = (props) => {
    return (
        <div className={classes.house_flex}>
            <img
                onClick={props.blackEagles}
                src={Black_Eagles_Banner} alt="Black Eagles" width="14%" />
            <img
                onClick={props.blueLions}
                src={Blue_Lions_Banner} alt="Blue Lions" />
            <img
                onClick={props.goldenDeer}
                src={Golden_Deer_Banner} alt="Golden Deer" />
            <img
                onClick={props.church}
                src={Church_Banner} alt="Church" />
        </div>
    );
};


export default HouseCards;