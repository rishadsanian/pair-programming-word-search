const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch(
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
      "FRANK"
    );

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch(
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
      "SEINFELD"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present by searching horizontally backwards", function() {
    const result = wordSearch(
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
      "PAW"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present by searching vertically down", function() {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "V", "L"],
        ["S", "E", "I", "N", "F", "E", "E", "D"],
        ["Y", "F", "C", "F", "Q", "U", "R", "L"],
        ["H", "M", "J", "T", "E", "V", "T", "G"],
        ["W", "H", "C", "S", "Y", "E", "I", "L"],
        ["B", "F", "R", "E", "N", "E", "C", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "L", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "VERTICAL"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present by searching vertically up", function() {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "L", "I", "N", "F", "E", "L", "D"],
        ["Y", "A", "C", "F", "Q", "U", "A", "L"],
        ["H", "C", "J", "T", "E", "V", "R", "G"],
        ["W", "I", "C", "S", "Y", "E", "R", "L"],
        ["B", "T", "R", "E", "N", "E", "Y", "B"],
        ["U", "R", "T", "W", "A", "P", "A", "I"],
        ["O", "E", "C", "A", "K", "U", "A", "S"],
        ["E", "V", "K", "F", "Q", "U", "A", "L"],
      ],
      "PAW"
    );

    assert.isTrue(result);
  });



  it("should return true if the word is present by searching diagonally top left to bottom right", function() {
    const result = wordSearch(
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
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present by searching diagonally bottom left to top right", function() {
    const result = wordSearch(
      [
        ["A", "W", "S", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "YET"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present by searching diagonally bottom right to top left", function() {
    const result = wordSearch(
      [
        ["A", "W", "S", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "N", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "C", "U", "A", "L"],
      ],
      "RUN"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present by searching diagonally top right to bottom left", function() {
    const result = wordSearch(
      [
        ["A", "W", "S", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "N", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "T", "A", "S"],
        ["E", "Z", "K", "F", "H", "U", "A", "L"],
      ],
      "RUN"
    );

    assert.isTrue(result);
  });
});
