import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title';
import HouseCards from './components/HouseCards/HouseCards';
import BioCard from './components/BioCard/BioCard';
import classes from './components/BioCard/biocard.css';

import {
  claude, hilda, leonie, lorenz, lysithea, raphael, marianne, ignatz, 
  edelgard, hubert, ferdinand, petra, caspar, linhardt, bernadetta, dorothea } from './House/index.js';


class App extends Component {
  state = {
    blackEagles: [
      {   id: 'blackEagle1',
          image: <img src={edelgard} alt="edelgard"/>, 
          name: 'Edelgard von Hresvelg',
          age: 17, 
          height: '175cm',
          House: 'Hresvelg', Crest: 'unknown',
          Likes: 'Likes', 
          Dislikes: 'dislikes'
      },
      {   id: 'blackEagle2',
          image: <img src={hubert} alt="hubert"/>, 
          name: 'Hubert von Vestra',
          age: 20, 
          height: '175cm',
          House: 'Vestra', Crest: 'unknown',
          Likes: 'Likes', 
          Dislikes: 'dislikes'
      },
      {   id: 'blackEagle3',
          image: <img src={ferdinand} alt="ferdinand"/>, 
          name: 'Ferdinand von Aegir',
          age: 17, 
          height: '175cm',
          House: 'Aegir', Crest: 'unknown',
          Likes: 'Likes', 
          Dislikes: 'dislikes'
      },
      {   id: 'blackEagle4',
          image: <img src={petra} alt="petra"/>, 
          name: 'Petra Macneary',
          age: 15, 
          height: '175cm',
          House: 'Princess of Brigid', Crest: 'unknown',
          Likes: 'Likes', 
          Dislikes: 'dislikes'
      },
      {   id: 'blackEagle5',
          image: <img src={caspar} alt="caspar"/>, 
          name: 'Caspar von Bergliez',
          age: 16, 
          height: '175cm',
          House: 'Bergliez', Crest: 'unknown',
          Likes: 'Likes', 
          Dislikes: 'dislikes'
      },
      {   id: 'blackEagle6',
          image: <img src={linhardt} alt="linhardt"/>, 
          name: 'Linhardt von Hevring',
          age: 16, 
          height: '175cm',
          House: 'Hevring', Crest: 'unknown',
          Likes: 'Likes', 
          Dislikes: 'dislikes'
      },
      {   id: 'blackEagle7',
          image: <img src={bernadetta} alt="bernadetta"/>,
          name: 'Bernadetta von Varley',
          age: 17, 
          height: '175cm',
          House: 'Varley', Crest: 'unknown',
          Likes: 'Likes', 
          Dislikes: 'dislikes'
      },
      {   id: 'blackEagle8',
          image: <img src={dorothea} alt="dorothea"/>, 
          name: 'Dorothea Arnault',
          age: 18, 
          height: '175cm',
          House: 'N/A', Crest: 'unknown',
          Likes: 'Likes', 
          Dislikes: 'dislikes'
      },
  ],
    goldenDeer: [
      {
        id: 'goldenDeer1',
        image: <img src={claude} alt="claude" />,
        name: 'Claude von Riegan',
        age: 17,
        height: '175cm',
        House: 'Riegan', Crest: 'Minor Crest Riegan',
        Likes: 'feasts, long rids, archery, topics of curiosity',
        Dislikes: `blind reliance on gods, leaving things to chance, 
          being bound to common sense`},
      {
        id: 'goldenDeer2',
        image: <img src={hilda} alt="Hilda" />,
        name: 'Hilda Valentine Goneril',
        age: 18,
        height: '154cm',
        House: 'Goneril', Crest: `Minor Crest Goneril`,
        Likes: `fashion, chatting, persuasion, singing, dancing, colorful flowers`,
        Dislikes: `Effort, exhaustion, responsibility, extreme heat or cold`
      },
      {
        id: 'goldenDeer3',
        image: <img src={leonie} alt="Leonie" />,
        name: `Leonie Pinelli`,
        age: 20,
        height: '168cm',
        House: `Commoner`, Crest: `N/A`,
        Likes: `Captain Jeralt, military arts, competition, hunting, fishing, gardening, collecting and reusing discarded objects`,
        Dislikes: `Defeat, decadence, debt, poisonous creatures`
      },
      {
        id: 'goldenDeer4',
        image: <img src={lorenz} alt="Lorenz" />,
        name: 'Lorenz Hellman Gloucester',
        age: 19,
        height: '188cm',
        House: `Gloucester`, Crest: `Minor Crest Gloucester`,
        Likes: `tea, red roses, art, worthy women, nobility`,
        Dislikes: `coffee, injustie, filth, foul odors, vulgarity`
      },
      {
        id: 'goldenDeer5',
        image: <img src={lysithea} alt="Lysithea" />,
        name: 'Lysithea von Ordelia',
        age: 15,
        height: '148cm',
        House: 'Ordelia', Crest: 'Crest Gloucester, Minor Crest Charon',
        Likes: `sweets, cute things, lilies`,
        Dislikes: `being treated like a child, anything physically laborious, ghosts, bitter foods`
      },
      {
        id: 'goldenDeer6',
        image: <img src={raphael} alt="Raphael" />,
        name: 'Raphael Kirsten',
        age: 18,
        height: '190cm',
        House: `Commoner`, Crest: `N/A`,
        Likes: `pure protein, muscles, training, his baby sister`,
        Dislikes: `book learning, unfinished meals`
      },
      {
        id: 'goldenDeer7',
        image: <img src={marianne} alt="Marianne" />,
        name: 'Marianne von Edmund',
        age: 18,
        height: '163cm',
        House: `Edmund`, Crest: `Mystery Crest`,
        Likes: `the goddess, birds and other animals, reading, delicate flowers`,
        Dislikes: `herself, crests, tidying up`
      },
      {
        id: 'goldenDeer8',
        image: <img src={ignatz} alt="Ignatz" />,
        name: 'Ignatz Victor',
        age: 17,
        height: '164cm',
        House: 'Commoner', Crest: 'N/A',
        Likes: `art, the goddess, the four saints, striking landscapes, faraway lands, peace and quiet, beautiful flowers`,
        Dislikes: `people who don't appreciate art, stressful situations, lightning`
      },
    ],
    showGrid: false
  }

  houseHandler = () => {
    console.log('was clicked!')
  }

  toggleBlackEagles = () => {
    console.log(`Black eagles clicked`);
    const revealEagles = this.state.showGrid;
    this.setState({ showGrid: !revealEagles })
  }

  toggleGoldenDeer = () => {
    console.log('Golden Deer clicked!');
    const revealDeer = this.state.showGrid;
    this.setState({ showGrid: !revealDeer })
  }

  toggleBlueLions = () => {
    console.log(`Blue Lions aka drama and angst 24/7`);
  }

  toggleChurch = () => {
    console.log(`Church of Seiros has been clicked`);
  }

  render() {

    let showRoster = null;

    if (this.state.showGrid) {
      
      showRoster = (
        <div id={classes.characterArrangement}>
          {this.state.goldenDeer.map((person) => {
            return <BioCard 
              image={person.image}
              name={person.name}
              age={person.age}
              height={person.height}
              house={person.House}
              crest={person.Crest}
              likes={person.Likes}
              dislikes={person.Dislikes}
               />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <Title />
        <HouseCards
          goldenDeer={this.toggleGoldenDeer}
          blueLions={this.toggleBlueLions}
          blackEagles={this.toggleBlackEagles}
          church={this.toggleChurch}
        />
        {showRoster}
      </div>
    );
  }
}

export default App;
