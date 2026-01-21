import React, { Component } from 'react';
import './App.css';

// Components
import Title from './components/Title/Title';
import HouseCards from './components/HouseCards/HouseCards';
import BioCard from './components/BioCard/BioCard';
import classes from './components/BioCard/biocard.module.css';

// Data
import { allCharacterData } from './data/characters';

// Utils
import { getCharacterImage, HOUSES, getRoster, toggleHouseSelection } from './utils';


/**
 * App Component - Fire Emblem Three Houses Cast Cards
 * 
 * ═══════════════════════════════════════════════════════════════
 * CLASS COMPONENT LIFECYCLE REFERENCE
 * ═══════════════════════════════════════════════════════════════
 * 
 * MOUNTING (component created & inserted into DOM):
 *   1. constructor()        → Initialize state, bind methods
 *   2. render()             → Required, returns JSX
 *   3. componentDidMount()  → API calls, subscriptions, DOM manipulation
 * 
 * UPDATING (re-render due to state/props changes):
 *   1. shouldComponentUpdate()  → Return false to skip render (optimization)
 *   2. render()
 *   3. componentDidUpdate()     → Respond to changes, compare prev vs current
 * 
 * UNMOUNTING (removed from DOM):
 *   1. componentWillUnmount()   → Cleanup: timers, subscriptions, listeners
 * 
 * ERROR HANDLING:
 *   1. componentDidCatch()      → Log errors, show fallback UI
 * ═══════════════════════════════════════════════════════════════
 */
class App extends Component {
  
  // ─────────────────────────────────────────────────────────────
  // CONSTRUCTOR - First lifecycle method
  // Initialize state here. Avoid side effects.
  // ─────────────────────────────────────────────────────────────
  constructor(props) {
    super(props);
    this.state = {
      selectedHouse: null,
      ...allCharacterData  // Spreads: blackEagles, blueLions, goldenDeer, churchOfSeiros
    };
  }

  // ─────────────────────────────────────────────────────────────
  // LIFECYCLE: componentDidMount
  // Called once after initial render. Good for API calls.
  // ─────────────────────────────────────────────────────────────
  componentDidMount() {
    console.log('[MOUNT] App mounted - ready to display houses');
  }

  // ─────────────────────────────────────────────────────────────
  // LIFECYCLE: componentDidUpdate
  // Called after every re-render (not initial). Compare values!
  // ─────────────────────────────────────────────────────────────
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedHouse !== this.state.selectedHouse) {
      console.log(`[UPDATE] House: ${prevState.selectedHouse} → ${this.state.selectedHouse}`);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // LIFECYCLE: componentWillUnmount
  // Cleanup before component is removed. Cancel timers/subscriptions.
  // ─────────────────────────────────────────────────────────────
  componentWillUnmount() {
    console.log('[UNMOUNT] App unmounting - cleanup complete');
  }

  // ─────────────────────────────────────────────────────────────
  // EVENT HANDLER: Generic house toggle
  // Single handler for all houses using HOUSES constant
  // ─────────────────────────────────────────────────────────────
  handleHouseSelect = (house) => {
    this.setState((prevState) => ({
      selectedHouse: toggleHouseSelection(house, prevState.selectedHouse)
    }));
  }

  // ─────────────────────────────────────────────────────────────
  // LIFECYCLE: render
  // Required. Returns JSX. Keep it pure - no state modifications.
  // ─────────────────────────────────────────────────────────────
  render() {
    const { selectedHouse } = this.state;
    const roster = getRoster(selectedHouse, this.state);

    return (
      <div className="App">
        <Title />
        
        <HouseCards
          blackEagles={() => this.handleHouseSelect(HOUSES.BLACK_EAGLES)}
          blueLions={() => this.handleHouseSelect(HOUSES.BLUE_LIONS)}
          goldenDeer={() => this.handleHouseSelect(HOUSES.GOLDEN_DEER)}
          church={() => this.handleHouseSelect(HOUSES.CHURCH)}
          selectedHouse={selectedHouse}
        />

        {/* Roster Grid */}
        {roster.length > 0 && (
          <div id={classes.characterArrangement}>
            {roster.map((character) => (
              <BioCard
                key={character.id}
                image={getCharacterImage(character.imageKey, character.name)}
                name={character.name}
                age={character.age}
                height={character.height}
                house={character.house}
                crest={character.crest}
                likes={character.likes}
                dislikes={character.dislikes}
              />
            ))}
          </div>
        )}

        {/* Empty state for Church */}
        {selectedHouse === HOUSES.CHURCH && roster.length === 0 && (
          <div className="empty-house-message">
            <p>Church of Seiros roster coming soon...</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
