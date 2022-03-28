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
        if (currOrderX.length >= 3 || currOrderO.length >= 3) {
          console.log(currOrderX.includes(1));
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
