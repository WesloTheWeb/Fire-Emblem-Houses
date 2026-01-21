import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title';
import HouseCards from './components/HouseCards/HouseCards';
import BioCard from './components/BioCard/BioCard';
import classes from './components/BioCard/biocard.module.css';

// Import all character images from centralized assets
import * as images from './assets/images';

// Import clean character data
import {
  blackEaglesData,
  blueLionsData,
  goldenDeerData,
  churchOfSeirosData
} from './data/characters';


/**
 * App Component - Main class component for Fire Emblem Three Houses Cast Cards
 * 
 * LIFECYCLE METHODS IN CLASS COMPONENTS:
 * 
 * MOUNTING PHASE (component is being created and inserted into DOM):
 *   1. constructor() - Initialize state, bind methods
 *   2. static getDerivedStateFromProps() - Rarely used, sync state with props
 *   3. render() - Required, returns JSX
 *   4. componentDidMount() - Called after component mounts; ideal for API calls, subscriptions
 * 
 * UPDATING PHASE (component is re-rendered due to state/props changes):
 *   1. static getDerivedStateFromProps()
 *   2. shouldComponentUpdate() - Performance optimization, return false to skip render
 *   3. render()
 *   4. getSnapshotBeforeUpdate() - Capture info from DOM before update
 *   5. componentDidUpdate() - Called after update; good for DOM operations, network requests
 * 
 * UNMOUNTING PHASE (component is being removed from DOM):
 *   1. componentWillUnmount() - Cleanup: cancel subscriptions, timers, network requests
 * 
 * ERROR HANDLING:
 *   1. static getDerivedStateFromError() - Update state when error is thrown
 *   2. componentDidCatch() - Log errors, show fallback UI
 */
class App extends Component {
  /**
   * Constructor - First lifecycle method called
   * Use for: initializing state, binding event handlers
   * Avoid: side effects, subscriptions (use componentDidMount instead)
   */
  constructor(props) {
    super(props);
    
    // 'selectedHouse' tracks which house banner was clicked
    // null = no house selected, 'blackEagles' | 'blueLions' | 'goldenDeer' | 'churchOfSeiros'
    this.state = {
      selectedHouse: null,
      // Character data loaded from clean data files
      blackEagles: blackEaglesData,
      blueLions: blueLionsData,
      goldenDeer: goldenDeerData,
      churchOfSeiros: churchOfSeirosData
    };
  }

  /**
   * componentDidMount - Called immediately after component is mounted
   * Use for: API calls, DOM manipulations, setting up subscriptions
   * This is where you'd fetch character data from an API if needed
   */
  componentDidMount() {
    console.log('App component has mounted! Ready to display Fire Emblem houses.');
    // Example: You could fetch character data here
    // this.fetchCharacterData();
  }

  /**
   * componentDidUpdate - Called after every re-render (not on initial mount)
   * Use for: responding to state/props changes, DOM updates based on changes
   * Always compare previous and current values to avoid infinite loops
   */
  componentDidUpdate(prevProps, prevState) {
    // Log when user switches houses
    if (prevState.selectedHouse !== this.state.selectedHouse) {
      console.log(`House changed from ${prevState.selectedHouse} to ${this.state.selectedHouse}`);
    }
  }

  /**
   * componentWillUnmount - Called right before component is unmounted
   * Use for: cleanup - cancel network requests, remove event listeners, clear timers
   */
  componentWillUnmount() {
    console.log('App component is unmounting. Cleaning up...');
    // Example cleanup:
    // clearInterval(this.timer);
    // this.subscription.unsubscribe();
  }

  /**
   * Toggle handler for Black Eagles (Red Banner)
   * Clicking toggles between showing Black Eagles roster or hiding it
   */
  toggleBlackEagles = () => {
    console.log('Black Eagles clicked');
    this.setState((prevState) => ({
      selectedHouse: prevState.selectedHouse === 'blackEagles' ? null : 'blackEagles'
    }));
  }

  /**
   * Toggle handler for Blue Lions (Blue Banner)
   * Clicking toggles between showing Blue Lions roster or hiding it
   */
  toggleBlueLions = () => {
    console.log('Blue Lions clicked');
    this.setState((prevState) => ({
      selectedHouse: prevState.selectedHouse === 'blueLions' ? null : 'blueLions'
    }));
  }

  /**
   * Toggle handler for Golden Deer (Yellow Banner)
   * Clicking toggles between showing Golden Deer roster or hiding it
   */
  toggleGoldenDeer = () => {
    console.log('Golden Deer clicked');
    this.setState((prevState) => ({
      selectedHouse: prevState.selectedHouse === 'goldenDeer' ? null : 'goldenDeer'
    }));
  }

  /**
   * Toggle handler for Church of Seiros (White Banner)
   * Currently empty - roster to be added later
   */
  toggleChurch = () => {
    console.log('Church of Seiros clicked - roster not yet available');
    this.setState((prevState) => ({
      selectedHouse: prevState.selectedHouse === 'churchOfSeiros' ? null : 'churchOfSeiros'
    }));
  }

  /**
   * Helper method to get the current roster based on selected house
   * Returns the appropriate character array or empty array
   */
  getCurrentRoster = () => {
    const { selectedHouse } = this.state;
    
    switch (selectedHouse) {
      case 'blackEagles':
        return this.state.blackEagles;
      case 'blueLions':
        return this.state.blueLions;
      case 'goldenDeer':
        return this.state.goldenDeer;
      case 'churchOfSeiros':
        return this.state.churchOfSeiros;
      default:
        return [];
    }
  }

  /**
   * Helper method to get the image component for a character
   * Maps the imageKey from data to the actual imported image
   */
  getCharacterImage = (imageKey, name) => {
    const imageSrc = images[imageKey];
    return <img src={imageSrc} alt={name} />;
  }

  /**
   * render - Required lifecycle method
   * Called on initial mount and every state/props update
   * Must return JSX (or null)
   * Should be a pure function - don't modify state here
   */
  render() {
    const { selectedHouse } = this.state;
    const currentRoster = this.getCurrentRoster();

    // Only show roster if a house is selected and has characters
    let showRoster = null;

    if (selectedHouse && currentRoster.length > 0) {
      showRoster = (
        <div id={classes.characterArrangement}>
          {currentRoster.map((person) => {
            return (
              <BioCard
                key={person.id}
                image={this.getCharacterImage(person.imageKey, person.name)}
                name={person.name}
                age={person.age}
                height={person.height}
                house={person.house}
                crest={person.crest}
                likes={person.likes}
                dislikes={person.dislikes}
              />
            );
          })}
        </div>
      );
    } else if (selectedHouse === 'churchOfSeiros') {
      // Show placeholder message for Church of Seiros
      showRoster = (
        <div className="empty-house-message">
          <p>Church of Seiros roster coming soon...</p>
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
          selectedHouse={selectedHouse}
        />
        {showRoster}
      </div>
    );
  }
}

export default App;
