/**
 * Root of the module 
 */
// import tokens.js
import * as tokens from './dist/tokens';

exports.printMsg = function() {
  console.log("Test from token library", tokens.ColorGray10);
};

export default tokens;