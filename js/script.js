const documentMock = (() => ({
  querySelector: (selector) => ({
    innerHTML: null,
  }),
}))();

const Gameboard = (function (doc) {
  const boardArray = ["0", "X", "0", "X", "0", "X", "0", "X", "0"];
  let currMarker = "X";
  // when write to DOM is called, loop over board array and insert in DOM when it is ready
  const writeToDOM = function () {
    boardArray.forEach(function (board, i) {
      if (!!doc && "querySelector" in doc) {
        document.querySelector(`.section-${i + 1}`).textContent = board;
      }
    });
  };

  const makePlay = function () {
    document.addEventListener("click", function (e) {
      const chosenDOM = document.querySelector(
        `.section-${e.target.dataset.number}`
      );
      if (!chosenDOM.textContent) {
        chosenDOM.textContent = currMarker;
        if (currMarker === "X") {
          currMarker = "O";
        } else {
          currMarker = "X";
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
