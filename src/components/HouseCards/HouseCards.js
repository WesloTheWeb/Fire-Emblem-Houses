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