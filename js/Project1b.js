//Project 1b Eric Deokie Javascript Code

var buttons = document.getElementsByClassName("button");
var screen = document.getElementById("screen");
var data = new Array();
var player = 1;
var numPlays = 0;
var winner = 0;
var winsPlayer1 = 0;
var winsPlayer2 = 0;
var Xwon = document.getElementById("Xscore");
var Owon = document.getElementById("Oscore");

Xwon.innerHTML = 0;
Owon.innerHTML = 0;
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clkBox);
}

screen.addEventListener("click", reset);

function clkBox() {
  var buttontarget = event.target;
  var index = Array.from(buttons).indexOf(buttontarget);

  if (event.target.innerHTML == "" && winner == 0) {
    if (player == 1) {
      buttontarget.innerHTML = "X";
      buttontarget.setAttribute("class", "button Xselected");
      player = 2;
      data[index] = 1;
    } else if (player == 2) {
      buttontarget.innerHTML = "O";
      buttontarget.setAttribute("class", "button Oselected");
      player = 1;
      data[index] = -1;
    }

    checkWinner(index);
  }
}

function checkWinner(index) {
  numPlays++;

  var sum;
  sum = data[0] + data[1] + data[2];

  if (sum == 3) {
    winner = 1;
    winsPlayer1++;
    Xwon.innerHTML = winsPlayer1;

    for (i = 0; i < buttons.length; i++) {
      if (i != 0 && i != 1 && i != 2) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  sum = data[3] + data[4] + data[5];
  if (sum == 3) {
    winner = 1;
    winsPlayer1++;
    Xwon.innerHTML = winsPlayer1;

    for (i = 0; i < buttons.length; i++) {
      if (i != 3 && i != 4 && i != 5) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  sum = data[6] + data[7] + data[8];

  if (sum == 3) {
    winner = 1;
    winsPlayer1++;
    Xwon.innerHTML = winsPlayer1;

    for (i = 0; i < buttons.length; i++) {
      if (i != 6 && i != 7 && i != 8) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  sum = data[0] + data[1] + data[2];

  if (sum == -3) {
    winner = 2;
    winsPlayer2++;
    Owon.innerHTML = winsPlayer2;

    for (i = 0; i < buttons.length; i++) {
      if (i != 0 && i != 1 && i != 2) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  sum = data[3] + data[4] + data[5];

  if (sum == -3) {
    winner = 2;
    winsPlayer2++;
    Owon.innerHTML = winsPlayer2;

    for (i = 0; i < buttons.length; i++) {
      if (i != 3 && i != 4 && i != 5) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  sum = data[6] + data[7] + data[8];

  if (sum == -3) {
    winner = 2;
    winsPlayer2++;
    Owon.innerHTML = winsPlayer2;

    for (i = 0; i < buttons.length; i++) {
      if (i != 6 && i != 7 && i != 8) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  sum = data[0] + data[3] + data[6];

  if (sum == 3) {
    winner = 1;
    winsPlayer1++;
    Xwon.innerHTML = winsPlayer1;

    for (i = 0; i < buttons.length; i++) {
      if (i != 0 && i != 3 && i != 6) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  sum = data[1] + data[4] + data[7];
  if (sum == 3) {
    winner = 1;
    winsPlayer1++;
    Xwon.innerHTML = winsPlayer1;

    for (i = 0; i < buttons.length; i++) {
      if (i != 1 && i != 4 && i != 7) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  sum = data[2] + data[5] + data[8];

  if (sum == 3) {
    winner = 1;
    winsPlayer1++;
    Xwon.innerHTML = winsPlayer1;

    for (i = 0; i < buttons.length; i++) {
      if (i != 2 && i != 5 && i != 8) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  sum = data[0] + data[3] + data[6];

  if (sum == -3) {
    winner = 2;
    winsPlayer2++;
    Owon.innerHTML = winsPlayer2;

    for (i = 0; i < buttons.length; i++) {
      if (i != 0 && i != 3 && i != 6) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  sum = data[1] + data[4] + data[7];
  if (sum == -3) {
    winner = 2;
    winsPlayer2++;
    Owon.innerHTML = winsPlayer2;

    for (i = 0; i < buttons.length; i++) {
      if (i != 1 && i != 4 && i != 7) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  sum = data[2] + data[5] + data[8];

  if (sum == -3) {
    winner = 2;
    winsPlayer2++;
    Owon.innerHTML = winsPlayer2;

    for (i = 0; i < buttons.length; i++) {
      if (i != 2 && i != 5 && i != 8) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  sum = data[0] + data[4] + data[8];

  if (sum == 3) {
    winner = 1;
    winsPlayer1++;
    Xwon.innerHTML = winsPlayer1;

    for (i = 0; i < buttons.length; i++) {
      if (i != 0 && i != 4 && i != 8) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  } else if (sum == -3) {
    winner = 2;
    winsPlayer2++;
    Owon.innerHTML = winsPlayer2;

    for (i = 0; i < buttons.length; i++) {
      if (i != 0 && i != 4 && i != 8) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  sum = data[2] + data[4] + data[6];

  if (sum == 3) {
    winner = 1;
    winsPlayer1++;
    Xwon.innerHTML = winsPlayer1;

    for (i = 0; i < buttons.length; i++) {
      if (i != 2 && i != 4 && i != 6) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  } else if (sum == -3) {
    winner = 2;
    winsPlayer2++;
    Owon.innerHTML = winsPlayer2;

    for (i = 0; i < buttons.length; i++) {
      if (i != 2 && i != 4 && i != 6) {
        buttons[i].setAttribute("class", "button inactive");
        player = null;
      }
    }
  }

  if (numPlays == 9 && winner == 0) {
    for (i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("class", "button inactive");
    }
  }
}

function reset() {
  numPlays = 0;
  player = 1;
  winner = 0;

  for (i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "";
    buttons[i].setAttribute("class", "button");
    data[i] = 0;
  }
}
