import React from 'react';
import * as images from '../assets/images';

/**
 * Creates an image element for a character based on their imageKey
 * @param {string} imageKey - Key matching the export name in assets/images
 * @param {string} altText - Alt text for accessibility
 * @returns {JSX.Element} - Image element
 */
export const getCharacterImage = (imageKey, altText) => {
  const imageSrc = images[imageKey];
  return <img src={imageSrc} alt={altText} />;
};
