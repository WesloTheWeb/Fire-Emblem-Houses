import React from 'react';
import classes from './houseCards.css';
import Black_Eagles_Banner from './Black_Eagles_Banner.png';
import Blue_Lions_Banner from './Blue_Lions_Banner.png';
import Golden_Deer_Banner from './Golden_Deer_Banner.png';
import Church_Banner from './Church_of_Seiros_Banner.png';

 
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