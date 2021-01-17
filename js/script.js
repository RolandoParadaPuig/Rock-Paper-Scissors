let computerPoints = 0,
  userPoints = 0;

function rockFunction() {
  function randomNum(a, b) {
    return Math.round(Math.random() * (b - a) + a);
  }
  let random = randomNum(1, 3);
  function computerSelection() {
    if (random == 1) {
      return "rock";
    } else if (random == 2) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  let cTurn = computerSelection();
  if (random == 1) {
    console.log("the computer gets a " + cTurn + ", tie match, no points");
  } else if (random == 2) {
    console.log(
      "the computer gets a " +
        cTurn +
        ", computer win this mathc, 1 point for the computer"
    );
    computerPoints++;
  } else {
    console.log(
      "the computer gets a " + cTurn + ", you win this match, 1 point for you"
    );
    userPoints++;
  }
  console.log("user:" + userPoints + " computer:" + computerPoints);
  if (computerPoints >= 5) {
    computerPoints = 0;
    userPoints = 0;
    console.log("the computer win the GAME!");
    alert("the computer win the GAME!");
  }
  if (userPoints >= 5) {
    computerPoints = 0;
    userPoints = 0;
    console.log("you win the GAME!");
    alert("you win the GAME!");
  }
}

function paperFunction() {
  function randomNum(a, b) {
    return Math.round(Math.random() * (b - a) + a);
  }
  let random = randomNum(1, 3);
  function computerSelection() {
    if (random == 1) {
      return "rock";
    } else if (random == 2) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  let cTurn = computerSelection();
  if (random == 1) {
    console.log(
      "the computer gets a " + cTurn + ", you win this match, 1 point for you"
    );
    userPoints++;
  } else if (random == 2) {
    console.log("the computer gets a " + cTurn + ", tie match, no points");
  } else {
    console.log(
      "the computer gets a " +
        cTurn +
        ", computer win this mathc, 1 point for the computer"
    );
    computerPoints++;
  }
  console.log("user:" + userPoints + " computer:" + computerPoints);
  if (computerPoints >= 5) {
    computerPoints = 0;
    userPoints = 0;
    console.log("the computer win the GAME!");
    alert("the computer win the GAME!");
  }
  if (userPoints >= 5) {
    computerPoints = 0;
    userPoints = 0;
    console.log("you win the GAME!");
    alert("you win the GAME!");
  }
}

function scissorsFunction() {
  function randomNum(a, b) {
    return Math.round(Math.random() * (b - a) + a);
  }
  let random = randomNum(1, 3);
  function computerSelection() {
    if (random == 1) {
      return "rock";
    } else if (random == 2) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  let cTurn = computerSelection();
  if (random == 1) {
    console.log(
      "the computer gets a " +
        cTurn +
        ", computer win this mathc, 1 point for the computer"
    );
    computerPoints++;
  } else if (random == 2) {
    console.log(
      "the computer gets a " + cTurn + ", you win this match, 1 point for you"
    );
    userPoints++;
  } else {
    console.log("the computer gets a " + cTurn + ", tie match, no points");
  }

  console.log("user:" + userPoints + " computer:" + computerPoints);
  if (computerPoints >= 5) {
    computerPoints = 0;
    userPoints = 0;
    console.log("the computer win the GAME!");
    alert("the computer win the GAME!");
  }
  if (userPoints >= 5) {
    computerPoints = 0;
    userPoints = 0;
    console.log("you win the GAME!");
    alert("you win the GAME!");
  }
}
