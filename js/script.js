let computerPoints = 0,
  userPoints = 0;

if (computerPoints < 5 && userPoints < 5) {
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
      document.getElementById("computer_points").innerHTML =
        "computer points: " + computerPoints;
    } else {
      console.log(
        "the computer gets a " + cTurn + ", you win this match, 1 point for you"
      );
      userPoints++;
      document.getElementById("user_points").innerHTML =
        "you´r points: " + userPoints;
    }
    console.log("user:" + userPoints + " computer:" + computerPoints);
    winner();
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
      document.getElementById("user_points").innerHTML =
        "you´r points: " + userPoints;
    } else if (random == 2) {
      console.log("the computer gets a " + cTurn + ", tie match, no points");
    } else {
      console.log(
        "the computer gets a " +
          cTurn +
          ", computer win this mathc, 1 point for the computer"
      );
      computerPoints++;
      document.getElementById("computer_points").innerHTML =
        "computer points: " + computerPoints;
    }
    console.log("user:" + userPoints + " computer:" + computerPoints);
    winner();
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
      document.getElementById("computer_points").innerHTML =
        "computer points: " + computerPoints;
    } else if (random == 2) {
      console.log(
        "the computer gets a " + cTurn + ", you win this match, 1 point for you"
      );
      userPoints++;
      document.getElementById("user_points").innerHTML =
        "you´r points: " + userPoints;
    } else {
      console.log("the computer gets a " + cTurn + ", tie match, no points");
    }
    winner();
    console.log("user:" + userPoints + " computer:" + computerPoints);
  }
}

function winner() {
  if (computerPoints >= 5) {
    computerPoints = 0;
    userPoints = 0;
    document.getElementById("restart").style.display = "flex";
    console.log("the computer win the GAME!");
  } else if (userPoints >= 5) {
    computerPoints = 0;
    userPoints = 0;
    console.log("you win the GAME!");
    document.getElementById("restart").style.display = "flex";
  } else {
    document.getElementById("restart").style.display = "none";
  }
}

function restartGame() {
  computerPoints = 0;
  userPoints = 0;
  document.getElementById("user_points").innerHTML =
    "you´r points: " + userPoints;
  document.getElementById("computer_points").innerHTML =
    "computer points: " + computerPoints;
  document.getElementById("restart").style.display = "none";
}
