// const score = {
//     Wins: 0,
//     Losses: 0,
//     Ties: 0
// };

// Function to handle button clicks
function playgame(playerMove) {
  let computerMove = pickComputer();
  let results;

  if (computerMove === playerMove) {
    results = "Tie";
  }

  if (playerMove === "Rock") {
    if (computerMove === "Paper") {
      results = "You Lose";
    } else if (computerMove === "Scissors") {
      results = "You Win";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      results = "You Win";
    } else if (computerMove === "Scissors") {
      results = "You Lose";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      results = "You Lose";
    } else if (computerMove === "Paper") {
      results = "You Win";
    }
  }

  if (results === "You Win") {
    score.Wins += 1;
  } else if (results === "You Lose") {
    score.Losses += 1;
  } else if (results === "Tie") {
    score.Ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  const outcome = document.querySelector(".js-outcome");
  outcome.innerHTML = `${results} <br>`;

  const selection = document.querySelector(".js-selection");
  selection.innerHTML = ` You
        <img src="images/${playerMove}-emoji.png" class="move-icon"/>
         <img src="images/${computerMove}-emoji.png" class="move-icon"/>
         Computer`;

  updateScore();
}

// Update the score display
function updateScore() {
  document.querySelector(
    ".js-gameData"
  ).innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

// Function to pick a random move for the computer
function pickComputer() {
  const randomMove = Math.random();
  let computerMove = "";

  if (randomMove >= 0 && randomMove < 1 / 3) {
    computerMove = "Rock";
  } else if (randomMove >= 1 / 3 && randomMove < 2 / 3) {
    computerMove = "Paper";
  } else if (randomMove >= 2 / 3 && randomMove < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}

// Initialize score from localStorage or set to default
let score = JSON.parse(localStorage.getItem("score"));
if (score === null) {
  score = {
    Wins: 0,
    Losses: 0,
    Ties: 0,
  };
}

// Reset the score & display on page load
function resetScore() {
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;
  localStorage.removeItem("score");
  updateScore();
  const outcome = (document.querySelector(".js-outcome").innerHTML =
    "Score Reset");
  const selection = (document.querySelector(".js-selection").innerHTML = "");
}

// To display instructions
function instructions() {
  const instructions = document.querySelector(".js-instructions");

  if (!instructions.classList.contains(".show-instr")) {
    instructions.classList.add(".show-instr");
    instructions.innerHTML = `
        <h2>How to Play</h2>
        <p>Choose Rock, Paper, or Scissors <br>by clicking the buttons above. <br> Computer chooses randomly</p>
        <p>Rock beats Scissors <br> Scissors beats Paper <br> Paper beats Rock.</p>
        <p>Good luck!</p>
      `;
  } else {
    instructions.classList.remove(".show-instr");
    instructions.innerHTML = ``;
  }
}
