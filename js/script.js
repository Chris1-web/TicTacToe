const documentMock = (() => ({
  querySelector: (selector) => ({
    innerHTML: null,
  }),
}))();

const Gameboard = (function (doc) {
  let currMarker = "X";
  const currOrderX = [];
  const currOrderO = [];

  const winningConditions = [
    // same columns
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // same row
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // cross section
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = function () {
    let conditionZero = winningConditions[0];
    let conditionOne = winningConditions[1];
    let conditionTwo = winningConditions[2];
    let conditionThree = winningConditions[3];
    let conditionFour = winningConditions[4];
    let conditionFive = winningConditions[5];
    let conditionSix = winningConditions[6];
    let conditionSeven = winningConditions[7];
    return {
      conditionZero,
      conditionOne,
      conditionTwo,
      conditionThree,
      conditionFour,
      conditionFive,
      conditionSix,
      conditionSeven,
    };
  };

  console.log(checkWinner().checkResult("X"));

  const makePlay = function () {
    document.addEventListener("click", function (e) {
      const chosenDOM = document.querySelector(
        `.section-${e.target.dataset.number}`
      );
      // if chosen dom is empty, input text on screen and board array, else return
      if (!chosenDOM.textContent) {
        chosenDOM.textContent = currMarker;
        let indexNumber = parseInt(chosenDOM.dataset.number - 1);
        if (currMarker === "X") {
          currOrderX.push(indexNumber);
          console.log(currOrderX);
          currMarker = "O";
        } else {
          currOrderO.push(indexNumber);
          console.log(currOrderO);
          currMarker = "X";
        }
        if (currOrderX.length >= 3) {
          let checker = (arr, target) => target?.every((v) => arr.includes(v));
          const result =
            checker(currOrderX, checkWinner().conditionZero) ||
            checker(currOrderX, checkWinner().conditionOne) ||
            checker(currOrderX, checkWinner().conditionTwo) ||
            checker(currOrderX, checkWinner().conditionThree) ||
            checker(currOrderX, checkWinner().conditionFour) ||
            checker(currOrderX, checkWinner().conditionFive) ||
            checker(currOrderX, checkWinner().conditionSix) ||
            checker(currOrderX, checkWinner().conditionSeven);
          if (result) alert("player X is the winner");
        }
        if (currOrderO.length >= 3) {
          let checker = (arr, target) => target?.every((v) => arr.includes(v));
          const result =
            checker(currOrderO, checkWinner().conditionZero) ||
            checker(currOrderO, checkWinner().conditionOne) ||
            checker(currOrderO, checkWinner().conditionTwo) ||
            checker(currOrderO, checkWinner().conditionThree) ||
            checker(currOrderO, checkWinner().conditionFour) ||
            checker(currOrderO, checkWinner().conditionFive) ||
            checker(currOrderO, checkWinner().conditionSix) ||
            checker(currOrderO, checkWinner().conditionSeven);
          if (result) alert("player O is the winner");
        }
      } else {
        return;
      }
    });
  };

  return { makePlay };
})(document || documentMock);

const player = function () {};

const displayController = (function () {})();

// Gameboard.writeToDOM();
Gameboard.makePlay();
