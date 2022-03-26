const documentMock = (() => ({
  querySelector: (selector) => ({
    innerHTML: null,
  }),
}))();

const Gameboard = (function (doc) {
  const boardArray = ["0", "X", "0", "X", "0", "X", "0", "X", "0"];
  // when write to DOM is called, loop over board array and insert in DOM when it is ready
  const writeToDOM = function () {
    boardArray.forEach(function (board, i) {
      if (!!doc && "querySelector" in doc) {
        document.querySelector(`.section-${i + 1}`).textContent = board;
      }
    });
  };
  return { writeToDOM };
})(document || documentMock);

const player = function () {};

const displayController = (function () {})();

Gameboard.writeToDOM();
