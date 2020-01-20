import React from 'react';
import titleClass from './title.css';

const Title = () => {
    return (
        <div className={titleClass.h1}>
            <h1>Fire Emblem: Three Houses<br />Cast Cards</h1>
            <p className={titleClass.info}>Welcome to the Fire Emblem: Three Houses - Cast Cards app. 
            Simply select one of the houses below to get a detailed profile of each character.</p>
        </div>
    );

};


export default Title;