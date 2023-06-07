const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const backHorJoin = letters.map((ls) => ls.reverse().join(""));

  // diagonals - does not work yet
  const rows = letters.length;
  const cols = letters[0].length;
  const diagonals = [];

  // Top-right - bottom-left
  for (let i = 0; i < rows; i++) {
    const diagonal = [];
    for (let j = 0; j < cols; j++) {
      if (letters[i + j]) {
        diagonal.push(letters[i + j][j]);
      }
    }
    if (diagonal.length > 0) {
      diagonals.push(diagonal);
    }
  }

  // Top-left - bottom-right
  for (let i = 1; i < cols; i++) {
    const diagonal = [];
    for (let j = 0; j < rows; j++) {
      if (letters[j] && letters[i - j]) {
        diagonal.push(letters[j][i - j]);
      }
    }
    if (diagonal.length > 0) {
      diagonals.push(diagonal);
    }
  }

  for (let i = 1; i < rows; i++) {
    const diagonal = [];
    for (let j = 0; j < cols; j++) {
      if (letters[i] && letters[i + j]) {
        diagonal.push(letters[j][i + j - 1]);
      }
    }
    if (diagonal.length > 0) {
      diagonals.push(diagonal);
    }
  }

  const diagonalBackJoin = diagonals.map((ls) => ls.reverse().join(""));
  const digonalHorJoin = diagonals.map((ls) => ls.join(""));


  //straight - works
  for (const item of horizontalJoin) {
    if (item.includes(word)) return true;
  }
  //bakwards - works
  for (const item of backHorJoin) {
    if (item.includes(word)) return true;
  }

  //diagonally straight
  for (const item of digonalHorJoin) {
    if (item.includes(word)) return true;
  }

  //diagonally back
  for (const item of diagonalBackJoin) {
    if (item.includes(word)) return true;
  }

  return false; //works
};

console.log(
  wordSearch(
    [
      ["A", "W", "C", "F", "Q", "U", "A", "L"],
      ["S", "E", "I", "N", "F", "E", "L", "D"],
      ["Y", "F", "C", "F", "Q", "U", "A", "L"],
      ["H", "M", "J", "T", "E", "V", "R", "G"],
      ["W", "H", "C", "S", "Y", "E", "R", "L"],
      ["B", "F", "R", "E", "N", "E", "Y", "B"],
      ["U", "B", "T", "W", "A", "P", "A", "I"],
      ["O", "D", "C", "A", "K", "U", "A", "S"],
      ["E", "Z", "K", "F", "Q", "U", "A", "L"],
    ],
    "WIFE"
  )
);

module.exports = wordSearch;
