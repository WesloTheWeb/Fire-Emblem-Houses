import React from 'react';
import classes from './houseCards.module.css';
import {
  blackEaglesBanner,
  blueLionsBanner,
  goldenDeerBanner
} from '../../assets/images';
// Church banner still in this folder
import churchBanner from './Church_of_Seiros_Banner.png';

/**
 * HouseCards - Functional component displaying the four house banners
 * Each banner is clickable and toggles the display of that house's roster
 * 
 * Props:
 *   - blackEagles: click handler for Black Eagles (red banner)
 *   - blueLions: click handler for Blue Lions (blue banner)
 *   - goldenDeer: click handler for Golden Deer (yellow banner)
 *   - church: click handler for Church of Seiros (white banner)
 *   - selectedHouse: currently selected house for active state styling
 */
const HouseCards = (props) => {
    const { selectedHouse } = props;
    
    return (
        <div className={classes.house_flex}>
            <div 
                className={`${classes.banner_container} ${selectedHouse === 'blackEagles' ? classes.active : ''}`}
                onClick={props.blackEagles}
            >
                <img
                    src={blackEaglesBanner} 
                    alt="Black Eagles - Edelgard's House" 
                    className={classes.banner_img}
                />
            </div>
            <div 
                className={`${classes.banner_container} ${selectedHouse === 'blueLions' ? classes.active : ''}`}
                onClick={props.blueLions}
            >
                <img
                    src={blueLionsBanner} 
                    alt="Blue Lions - Dimitri's House"
                    className={classes.banner_img}
                />
            </div>
            <div 
                className={`${classes.banner_container} ${selectedHouse === 'goldenDeer' ? classes.active : ''}`}
                onClick={props.goldenDeer}
            >
                <img
                    src={goldenDeerBanner} 
                    alt="Golden Deer - Claude's House"
                    className={classes.banner_img}
                />
            </div>
            <div 
                className={`${classes.banner_container} ${selectedHouse === 'churchOfSeiros' ? classes.active : ''}`}
                onClick={props.church}
            >
                <img
                    src={churchBanner} 
                    alt="Church of Seiros"
                    className={classes.banner_img}
                />
            </div>
        </div>
    );
};


export default HouseCards;