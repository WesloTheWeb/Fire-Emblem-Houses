/**
 * House-related utility functions
 */

/**
 * House keys constant for type safety
 */
export const HOUSES = {
  BLACK_EAGLES: 'blackEagles',
  BLUE_LIONS: 'blueLions',
  GOLDEN_DEER: 'goldenDeer',
  CHURCH: 'churchOfSeiros'
};

/**
 * Get roster array based on selected house
 * @param {string|null} selectedHouse - The currently selected house key
 * @param {Object} houseData - Object containing all house rosters
 * @returns {Array} - Array of character objects
 */
export const getRoster = (selectedHouse, houseData) => {
  if (!selectedHouse) return [];
  return houseData[selectedHouse] || [];
};

/**
 * Toggle house selection - returns new selection or null if same house
 * @param {string} house - House to toggle
 * @param {string|null} currentSelection - Currently selected house
 * @returns {string|null} - New selection
 */
export const toggleHouseSelection = (house, currentSelection) => {
  return currentSelection === house ? null : house;
};
