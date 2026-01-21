# Fire Emblem: Three Houses - Cast Cards

React project showcasing the cast of characters from Fire Emblem: Three Houses. Features dynamic lists, state management, and component-based architecture using **React Class Components**.

![Black Eagles](src/assets/images/House/Black_Eagles_House/Black_Eagles_Banner.png)
![Blue Lions](src/assets/images/House/Blue_Lions_House/Blue_Lions_Banner.png)
![Golden Deer](src/assets/images/House/GoldenDeerHouse/Golden_Deer_Banner.png)

## 🎮 Features

- Browse characters from all three houses (Black Eagles, Blue Lions, Golden Deer)
- Click house banners to toggle character roster display
- Character bio cards with stats, likes, and dislikes
- Responsive 3-column grid layout

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wesleywebster/fire-emblem-houses.git
   cd fire-emblem-houses
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   
   The app will automatically open at [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production to `/build` folder |
| `npm run eject` | Ejects from CRA (one-way operation) |

## 📁 Project Structure

```
src/
├── assets/
│   └── images/           # Character portraits & house banners
├── components/
│   ├── BioCard/          # Character card component
│   ├── HouseCards/       # House banner selection
│   ├── Roster/           # Roster grid
│   └── Title/            # App title
├── data/
│   └── characters.js     # Character data (JSON-like)
├── utils/
│   ├── imageUtils.js     # Image helper functions
│   └── houseUtils.js     # House selection utilities
└── App.js                # Main class component
```

## 📚 Learning Reference

This project intentionally uses **React Class Components** with lifecycle methods as a learning reference. Great for:

- Understanding React fundamentals before hooks
- Interview preparation for legacy React codebases
- Comparing class vs functional component patterns

### Class Component Lifecycle Methods Demonstrated

```
MOUNTING:    constructor() → render() → componentDidMount()
UPDATING:    shouldComponentUpdate() → render() → componentDidUpdate()
UNMOUNTING:  componentWillUnmount()
```

### Modern Patterns Included

- **JSDoc comments** for function documentation
- **Barrel files** (`index.js`) for clean imports
- **CSS Modules** for scoped styling
- **Utility functions** separated from components

## 📝 Changelog

### January 2026
- Migrated to Create React App (CRA) for easier maintenance
- Resolved npm audit vulnerabilities
- Reorganized file structure (`assets/`, `data/`, `utils/`)
- Added JSDoc documentation to utility functions
- Cleaned up character data into pure JSON format
- Preserved React class components with detailed lifecycle comments

### Original Version (2018 Classic)
- Built with manual webpack/babel configuration
- React version pre-hooks era
- First React project showcasing Fire Emblem: Three Houses characters

## 🛠️ Built With

- [React](https://reactjs.org/) - UI library (Class Components)
- [Create React App](https://create-react-app.dev/) - Build tooling
- CSS Modules - Scoped styling

## 📜 License

This project is for educational purposes. Fire Emblem: Three Houses is property of Nintendo/Intelligent Systems.

---

*"I am Ferdinand von Aegir!"* 🍵
