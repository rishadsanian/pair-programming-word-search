const wordSearch = (letters, word) => {


  //Check Surroundings method

  const rows = letters.length;
  const cols = letters[0].length;
  const totalLetters = rows * cols;
  const search = []; //records positive search letter matches
  let count = 0; //to keep track of how many letters it scanned through to get first letter match
  let wordIndex = 0; //index of each letter in word
  let i = 0;
  let j = 0;
  const directions = {
    right: [0, 1],
    left: [0, -1],
    up: [-1, 0],
    down: [1, 0],
    diag1: [1, 1],
    diag2: [-1, 1],
    diag3: [1, -1],
    diag4: [-1, -1],
  };

  const checkSurrounding = (searchLetter, wordLetter) => {
    if (searchLetter !== wordLetter) {
      //if first letter doesn't match
      count++;
      return false;
    }

    search.push(searchLetter);
    wordIndex++;

    //if word is not matched or the whole grid has been scanned keeps scanning
    while (search.length < word.length || count < totalLetters) {
      for (const direction in directions) {//loop through each direction
        const [di, dj] = directions[direction];
        const newI = i + di;//set direction
        const newJ = j + dj;//set direction

        //stay inside the grid
        if (
          newI >= 0 &&
          newI < rows &&
          newJ >= 0 &&
          newJ < cols &&
          letters[newI][newJ] === word[wordIndex]
        ) {//maintain same direction
          i = newI;
          j = newJ;
          return true;
        }
      }
      count++;//keeps track of each starting letter
      return false;//counted through all the letters
    }

    return search === word; // if fully matched returns true
  };

  //loops through each starting letter
  for (i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
    // and checks for matches for the word
      if (checkSurrounding(letters[i][j], word[0])) {
        return true;
      }
    }
  }

  return false;
};

/*

  //Traverse method;
  //horizontal
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const backHorJoin = letters.map((ls) => ls.reverse().join(""));

  //vertical

  const transpose = function (matrix) {
    // Replace this code with your solution
    let output = [];
    for (const index in matrix[0]) {
      //determine the length of each array
      let rows = [];
      for (const array of matrix) {
        //for all arrays convert  each column as row
        rows.push(array[index]);
      }
      output.push(rows); //push rows to new array
    }
    return output;
  };

  const transposedGrid = transpose(letters);
  const columnJoindown = transposedGrid.map((ls) => ls.join(""));
  const columnJoinUp = transposedGrid.map((ls) => ls.reverse().join(""));

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

  //
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

  /////check this
  // for (let i = 1; i < cols; i++) {
  //   const diagonal = [];
  //   for (let j = 0; j < rows; j++) {
  //     if (letters[i] && letters[i + j]) {
  //       diagonal.push(letters[j][i + j - 1]);
  //     }
  //   }
  //   if (diagonal.length > 0) {
  //     diagonals.push(diagonal);
  //   }
  // }

  console.log(diagonals);

  const diagonalBackJoin = diagonals.map((ls) => ls.reverse().join(""));
  const digonalHorJoin = diagonals.map((ls) => ls.join(""));

  //straight row - works
  for (const item of horizontalJoin) {
    if (item.includes(word)) return true;
  }
  //bakwards row- works
  for (const item of backHorJoin) {
    if (item.includes(word)) return true;
  }

  //column down
  for (const item of columnJoindown) if (item.includes(word)) return true;

  //column up
  for (const item of columnJoindown) {
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
}; */

/* console.log(
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
); */

module.exports = wordSearch;
