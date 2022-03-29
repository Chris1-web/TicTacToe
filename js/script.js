const documentMock = (() => ({
  querySelector: (selector) => ({
    innerHTML: null,
  }),
}))();

const Gameboard = (function (doc) {
  const boardArray = ["", "", "", "", "", "", "", "", ""];
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
          // let target = conditionZero;
          let conditionZero = winningConditions[0];
          let conditionOne = winningConditions[1];
          let conditionTwo = winningConditions[2];
          let conditionThree = winningConditions[3];
          let conditionFour = winningConditions[4];
          let conditionFive = winningConditions[5];
          let conditionSix = winningConditions[6];
          let conditionSeven = winningConditions[7];
          let conditionEight = winningConditions[8];
          let checker = (arr, target) => target.every((v) => arr.includes(v));
          const result =
            checker(currOrderX, conditionZero) ||
            checker(currOrderX, conditionOne) ||
            checker(currOrderX, conditionTwo) ||
            checker(currOrderX, conditionThree) ||
            checker(currOrderX, conditionFour) ||
            checker(currOrderX, conditionFive) ||
            checker(currOrderX, conditionSix) ||
            checker(currOrderX, conditionSeven) ||
            checker(currOrderX, conditionEight);
          result
            ? alert("player X is the winner")
            : alert("player O is the winner");
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

/*
currOrderX.includes(0) &&
            currOrderX.includes(1) &&
            currOrderX.includes(2) &&
            console.log("WINNER");
          currOrderX.includes(3) &&
            currOrderX.includes(4) &&
            currOrderX.includes(5) &&
            console.log("WINNER");
          currOrderX.includes(6) &&
            currOrderX.includes(7) &&
            currOrderX.includes(8) &&
            console.log("WINNER");
          currOrderX.includes(0) &&
            currOrderX.includes(3) &&
            currOrderX.includes(6) &&
            console.log("WINNER");
          currOrderX.includes(1) &&
            currOrderX.includes(4) &&
            currOrderX.includes(7) &&
            console.log("WINNER");
          currOrderX.includes(2) &&
            currOrderX.includes(5) &&
            currOrderX.includes(8) &&
            console.log("WINNER");
          currOrderX.includes(0) &&
            currOrderX.includes(4) &&
            currOrderX.includes(8) &&
            console.log("WINNER");
          currOrderX.includes(2) &&
            currOrderX.includes(4) &&
            currOrderX.includes(6) &&
            console.log("WINNER");
          console.log(currOrderX);
        } else if (currOrderO.length >= 3) {
          currOrderO.includes(0) &&
            currOrderO.includes(1) &&
            currOrderO.includes(2) &&
            console.log("WINNER");
          currOrderO.includes(3) &&
            currOrderO.includes(4) &&
            currOrderO.includes(5) &&
            console.log("WINNER");
          currOrderO.includes(6) &&
            currOrderO.includes(7) &&
            currOrderO.includes(8) &&
            console.log("WINNER");
          currOrderO.includes(0) &&
            currOrderO.includes(3) &&
            currOrderO.includes(6) &&
            console.log("WINNER");
          currOrderO.includes(1) &&
            currOrderO.includes(4) &&
            currOrderO.includes(7) &&
            console.log("WINNER");
          currOrderO.includes(2) &&
            currOrderO.includes(5) &&
            currOrderO.includes(8) &&
            console.log("WINNER");
          currOrderO.includes(0) &&
            currOrderO.includes(4) &&
            currOrderO.includes(8) &&
            console.log("WINNER");
          currOrderO.includes(2) &&
            currOrderO.includes(4) &&
            currOrderO.includes(6) &&
            console.log("WINNER");
          console.log(currOrderO);
          */
