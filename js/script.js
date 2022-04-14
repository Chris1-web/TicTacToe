const player = function (symbol) {
  return { symbol };
};

const Gameboard = (function () {
  const section = document.querySelector(".gameboard");
  const restartBtn = document.querySelector(".restart");
  const winner = document.querySelector(".winner");
  const overlay = document.querySelector(".overlay-background");
  const gameOverScreen = document.querySelector(".game-over-screen");
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  let availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // set default player to X
  let currentPlayer = player("X");

  const clearDOM = function () {
    gameboard = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".section").forEach(function (element) {
      element.textContent = "";
    });
    availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  };

  const openAndCloseWindow = function () {
    overlay.classList.toggle("open");
    gameOverScreen.classList.toggle("open");
  };

  const checkers = function (playerSymbol, one, two, three) {
    if (
      gameboard[one] === playerSymbol &&
      gameboard[two] === playerSymbol &&
      gameboard[three] === playerSymbol
    ) {
      setTimeout(openAndCloseWindow, 500);
      setTimeout(clearDOM, 500);
      // openAndCloseWindow();
      winner.textContent = "";
      const html = `
        player <span class="player-symbol">${playerSymbol}</span> is the Winner
      `;
      winner.insertAdjacentHTML("beforeend", html);
      return true;
    } else {
      return false;
    }
  };

  overlay.addEventListener("click", function () {
    clearDOM();
    openAndCloseWindow();
  });

  const checkWinner = function (currentPlayerSymbol) {
    checkers(currentPlayerSymbol, 0, 1, 2) ||
      checkers(currentPlayerSymbol, 3, 4, 5) ||
      checkers(currentPlayerSymbol, 6, 7, 8) ||
      checkers(currentPlayerSymbol, 0, 3, 6) ||
      checkers(currentPlayerSymbol, 1, 4, 7) ||
      checkers(currentPlayerSymbol, 2, 5, 8) ||
      checkers(currentPlayerSymbol, 0, 4, 8) ||
      checkers(currentPlayerSymbol, 2, 4, 6);
  };

  restartBtn.addEventListener("click", function () {
    clearDOM();
    currentPlayer = player("X");
  });

  const makeComputerPlay = function () {
    const random = Math.floor(Math.random() * availableNumbers.length);
    let number = availableNumbers[random];
    document.querySelector(`.section-${number}`).textContent =
      currentPlayer.symbol;
    let computerChoice = availableNumbers.indexOf(Number(number));
    availableNumbers.splice(computerChoice, 1);
    gameboard[number - 1] = currentPlayer.symbol;
    checkWinner("0");
    currentPlayer = player("X");
  };

  section.addEventListener("click", function (e) {
    if (!e.target.textContent) {
      const boxNumber = e.target.dataset.number;
      // put player symbol in selected DOM
      document.querySelector(`.section-${boxNumber}`).textContent =
        currentPlayer.symbol;
      // store in gameboard array
      gameboard[boxNumber - 1] = currentPlayer.symbol;
      let chosenNumber = availableNumbers.indexOf(Number(boxNumber));
      availableNumbers.splice(chosenNumber, 1);
      currentPlayer = player("0");
      checkWinner("X");
      setTimeout(makeComputerPlay, 1000);
    }
  });
})();