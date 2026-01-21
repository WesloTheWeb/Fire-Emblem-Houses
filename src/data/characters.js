/**
 * Character Data for Fire Emblem: Three Houses
 * 
 * This file contains pure data - no JSX or React components.
 * Images are referenced by key and mapped in the component.
 */

/**
 * @typedef {Object} Character
 * @property {string} id - Unique identifier
 * @property {string} imageKey - Key to reference the character's image
 * @property {string} name - Full name
 * @property {number} age - Age at start of game
 * @property {string} height - Height in cm
 * @property {string} house - Noble house or background
 * @property {string} crest - Crest type or N/A
 * @property {string} likes - Things the character likes
 * @property {string} dislikes - Things the character dislikes
 */

// ============================================
// BLACK EAGLES - Adrestian Empire
// Led by Edelgard von Hresvelg
// ============================================
export const blackEaglesData = [
  {
    id: 'blackEagle1',
    imageKey: 'edelgard',
    name: 'Edelgard von Hresvelg',
    age: 17,
    height: '158cm',
    house: 'Hresvelg',
    crest: 'Minor Crest of Seiros',
    likes: 'Solitude, talented individuals, nature, beautiful scenery',
    dislikes: 'Crests, losing control, the church, swimming'
  },
  {
    id: 'blackEagle2',
    imageKey: 'hubert',
    name: 'Hubert von Vestra',
    age: 20,
    height: '188cm',
    house: 'Vestra',
    crest: 'N/A',
    likes: 'Serving Edelgard, coffee, strategy, dark magic',
    dislikes: 'Sunlight, optimism, blind faith, those who threaten Edelgard'
  },
  {
    id: 'blackEagle3',
    imageKey: 'ferdinand',
    name: 'Ferdinand von Aegir',
    age: 17,
    height: '175cm',
    house: 'Aegir',
    crest: 'N/A',
    likes: 'Tea, horses, competition, nobility, self-improvement',
    dislikes: 'Losing, being second best, injustice'
  },
  {
    id: 'blackEagle4',
    imageKey: 'petra',
    name: 'Petra Macneary',
    age: 15,
    height: '161cm',
    house: 'Princess of Brigid',
    crest: 'N/A',
    likes: 'Hunting, nature, her homeland, learning new words',
    dislikes: 'Dishonesty, lazy people, being misunderstood'
  },
  {
    id: 'blackEagle5',
    imageKey: 'caspar',
    name: 'Caspar von Bergliez',
    age: 16,
    height: '159cm',
    house: 'Bergliez',
    crest: 'N/A',
    likes: 'Training, fighting, justice, competition',
    dislikes: 'Cruelty, injustice, sitting still, studying'
  },
  {
    id: 'blackEagle6',
    imageKey: 'linhardt',
    name: 'Linhardt von Hevring',
    age: 16,
    height: '177cm',
    house: 'Hevring',
    crest: 'Minor Crest of Cethleann',
    likes: 'Sleeping, napping, crest research, fishing',
    dislikes: 'Blood, fighting, anything requiring effort'
  },
  {
    id: 'blackEagle7',
    imageKey: 'bernadetta',
    name: 'Bernadetta von Varley',
    age: 17,
    height: '150cm',
    house: 'Varley',
    crest: 'Minor Crest of Indech',
    likes: 'Solitude, embroidery, plants, writing, her room',
    dislikes: 'Strangers, socializing, loud noises, being outside'
  },
  {
    id: 'blackEagle8',
    imageKey: 'dorothea',
    name: 'Dorothea Arnault',
    age: 18,
    height: '170cm',
    house: 'Commoner (Former Opera Star)',
    crest: 'N/A',
    likes: 'Singing, romance, cute girls, luxury, attention',
    dislikes: 'Nobles (most of them), crests, being alone, bugs'
  }
];

// ============================================
// BLUE LIONS - Holy Kingdom of Faerghus
// Led by Dimitri Alexandre Blaiddyd
// ============================================
export const blueLionsData = [
  {
    id: 'blueLions1',
    imageKey: 'dimitri',
    name: 'Dimitri Alexandre Blaiddyd',
    age: 17,
    height: '180cm',
    house: 'Blaiddyd',
    crest: 'Minor Crest of Blaiddyd',
    likes: 'Combat, high-quality weapons, strength training, going for long rides, physically laborious work',
    dislikes: 'Delicate work, fragile objects, scorching heat, selfish people'
  },
  {
    id: 'blueLions2',
    imageKey: 'dedue',
    name: 'Dedue Molinaro',
    age: 18,
    height: '204cm',
    house: 'Commoner (Duscur)',
    crest: 'N/A',
    likes: 'Flowers, gardening, needlework, arts and crafts, cooking',
    dislikes: 'Anyone who attempts to harm Dimitri'
  },
  {
    id: 'blueLions3',
    imageKey: 'annette',
    name: 'Annette Fantine Dominic',
    age: 16,
    height: '151cm',
    house: 'Dominic',
    crest: 'Minor Crest of Dominic',
    likes: 'Cleaning, doing laundry, morning walks, singing, sweets',
    dislikes: 'Indolence, dark places, hard-to-reach places that need a good dusting'
  },
  {
    id: 'blueLions4',
    imageKey: 'ashe',
    name: 'Ashe Ubert',
    age: 16,
    height: '164cm',
    house: 'Commoner (Adopted by House Gaspard)',
    crest: 'N/A',
    likes: 'Sweets, tales of chivalry, travel journals, looking after children, violets, cooking',
    dislikes: 'Ghosts, enclosed spaces, violence, deception'
  },
  {
    id: 'blueLions5',
    imageKey: 'felix',
    name: 'Felix Hugo Fraldarius',
    age: 17,
    height: '174cm',
    house: 'Fraldarius',
    crest: 'Major Crest of Fraldarius',
    likes: 'Fighting, high-quality weapons, spicy foods, hunting, meat, training',
    dislikes: 'Levity, sweets, chivalry, his father, the boar prince'
  },
  {
    id: 'blueLions6',
    imageKey: 'mercedes',
    name: 'Mercedes von Martritz',
    age: 22,
    height: '169cm',
    house: 'Martritz (Commoner)',
    crest: 'Minor Crest of Lamine',
    likes: 'Sweets, needlework, ghost stories, adorable things, painting, reading, fragrant flowers',
    dislikes: 'Spicy foods, exercise, scary stories (but loves them anyway)'
  },
  {
    id: 'blueLions7',
    imageKey: 'ingrid',
    name: 'Ingrid Brandl Galatea',
    age: 17,
    height: '165cm',
    house: 'Galatea',
    crest: 'Minor Crest of Daphnel',
    likes: 'Food samples, meaty meals, looking after horses, tales of chivalry, virtuous knights',
    dislikes: 'Extravagance, hunger, laziness'
  },
  {
    id: 'blueLions8',
    imageKey: 'sylvain',
    name: 'Sylvain Jose Gautier',
    age: 19,
    height: '186cm',
    house: 'Gautier',
    crest: 'Minor Crest of Gautier',
    likes: 'Women, lively places, board games, flirting',
    dislikes: 'Unclean spaces, jealousy, hot days, crests'
  }
];

// ============================================
// GOLDEN DEER - Leicester Alliance
// Led by Claude von Riegan
// ============================================
export const goldenDeerData = [
  {
    id: 'goldenDeer1',
    imageKey: 'claude',
    name: 'Claude von Riegan',
    age: 17,
    height: '175cm',
    house: 'Riegan',
    crest: 'Minor Crest of Riegan',
    likes: 'Feasts, long rides, archery, topics of curiosity, schemes',
    dislikes: 'Blind reliance on gods, leaving things to chance, being bound by common sense'
  },
  {
    id: 'goldenDeer2',
    imageKey: 'hilda',
    name: 'Hilda Valentine Goneril',
    age: 18,
    height: '154cm',
    house: 'Goneril',
    crest: 'Minor Crest of Goneril',
    likes: 'Fashion, chatting, persuasion, singing, dancing, colorful flowers, accessories',
    dislikes: 'Effort, exhaustion, responsibility, extreme heat or cold'
  },
  {
    id: 'goldenDeer3',
    imageKey: 'leonie',
    name: 'Leonie Pinelli',
    age: 19,
    height: '168cm',
    house: 'Commoner',
    crest: 'N/A',
    likes: 'Captain Jeralt, military arts, competition, hunting, fishing, gardening, saving money',
    dislikes: 'Defeat, decadence, debt, poisonous creatures, wasting money'
  },
  {
    id: 'goldenDeer4',
    imageKey: 'lorenz',
    name: 'Lorenz Hellman Gloucester',
    age: 18,
    height: '188cm',
    house: 'Gloucester',
    crest: 'Minor Crest of Gloucester',
    likes: 'Tea, red roses, art, poetry, worthy women, nobility',
    dislikes: 'Coffee, injustice, filth, foul odors, vulgarity'
  },
  {
    id: 'goldenDeer5',
    imageKey: 'lysithea',
    name: 'Lysithea von Ordelia',
    age: 15,
    height: '148cm',
    house: 'Ordelia',
    crest: 'Major Crest of Gloucester, Minor Crest of Charon',
    likes: 'Sweets, cute things, lilies, being treated as an adult',
    dislikes: 'Being treated like a child, anything physically laborious, ghosts, bitter foods'
  },
  {
    id: 'goldenDeer6',
    imageKey: 'raphael',
    name: 'Raphael Kirsten',
    age: 17,
    height: '190cm',
    house: 'Commoner',
    crest: 'N/A',
    likes: 'Pure protein, muscles, training, his baby sister Maya, meat',
    dislikes: 'Book learning, unfinished meals, complicated things'
  },
  {
    id: 'goldenDeer7',
    imageKey: 'marianne',
    name: 'Marianne von Edmund',
    age: 17,
    height: '163cm',
    house: 'Edmund (Adopted)',
    crest: 'Crest of the Beast',
    likes: 'The goddess, birds and other animals, reading, delicate flowers, solitude',
    dislikes: 'Herself, crests, tidying up, talking to people'
  },
  {
    id: 'goldenDeer8',
    imageKey: 'ignatz',
    name: 'Ignatz Victor',
    age: 17,
    height: '164cm',
    house: 'Commoner',
    crest: 'N/A',
    likes: 'Art, the goddess, the four saints, striking landscapes, faraway lands, peace and quiet, beautiful flowers',
    dislikes: "People who don't appreciate art, stressful situations, lightning"
  }
];

// ============================================
// CHURCH OF SEIROS
// To be populated later
// ============================================
export const churchOfSeirosData = [
  // Characters like Seteth, Flayn, Rhea, etc. can be added here
];

// Export all data as a single object for convenience
export const allCharacterData = {
  blackEagles: blackEaglesData,
  blueLions: blueLionsData,
  goldenDeer: goldenDeerData,
  churchOfSeiros: churchOfSeirosData
};
