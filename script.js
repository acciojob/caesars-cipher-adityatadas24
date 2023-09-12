// Your Script here.
function rot13(str) {
  // Define a function to decode a single character
  function decodeChar(char) {
    // Check if the character is a letter
    if (/[A-Za-z]/.test(char)) {
      // Determine the character code offset based on case
      const offset = char >= 'a' ? 97 : 65;
      // Apply the ROT13 shift (13 positions forward or backward)
      return String.fromCharCode(((char.charCodeAt(0) - offset + 13) % 26) + offset);
    }
    // If the character is not a letter, return it unchanged
    return char;
  }

  // Use the decodeChar function to decode each character in the input string
  const decodedChars = str.split('').map(decodeChar);
  // Join the decoded characters back into a string
  const decodedStr = decodedChars.join('');
  return decodedStr;
}

// Example usage:
const encodedString = 'Gur dhvpx oebja sbk whzcf bire gur ynml qbt.';
const decodedString = rot13(encodedString);
console.log(decodedString); // Output: 'The quick brown fox jumps over the lazy dog.'


const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line

  return; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
