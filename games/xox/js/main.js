let startGameBtn = document.querySelector('#play');
let playAgainBtn = document.querySelector('#play-again');
let container = document.querySelector('.container');
let player1Box = document.querySelector('#player1');
let player2Box = document.querySelector('#player2');
let player1 = document.querySelector('.pl1-text');
let player2 = document.querySelector('.pl2-text');
let player1Score = document.querySelector('.score1 span');
let player2Score = document.querySelector('.score2 span');
let congratulation = document.querySelector('.pyro');
createGrid();
let boxes = document.querySelectorAll('.box');
let symbol = 'O';
let gameCounter = 0;
let player1Name = '';
let player2Name = '';
let player1StorageCounter;
let player2StorageCounter;
let player1Value;
let player2Value;

let lines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

startGameBtn.addEventListener('click',newGame);
playAgainBtn.addEventListener('click',playAgain);

function newGame() {
  let d = new Date();
  let time = d.getTime();
  player1Name = prompt('PLAYER NAME 1 : ');
  player1.innerHTML = player1Name;
  player2Name = prompt('PLAYER NAME 2 : ');
  player2.innerHTML = player2Name;

  player1Value = JSON.parse(localStorage.getItem(player1Name));
  player2Value = JSON.parse(localStorage.getItem(player2Name));

  if ((!player1Value && !player2Value) || player1Value[1] != player2Value[1]) {
    let d = new Date();
    let time = d.getTime();
    player1StorageCounter = 0;
    player2StorageCounter = 0;
    let player1Storage = [player1StorageCounter,time];
    let player2Storage = [player2StorageCounter,time];
    localStorage.setItem(player1Name, JSON.stringify(player1Storage));
    localStorage.setItem(player2Name, JSON.stringify(player2Storage));
  }else{
    player1StorageCounter = player1Value[0];
    player2StorageCounter = player2Value[0];
  }

  player1Score.innerHTML = player1StorageCounter;
  player2Score.innerHTML = player2StorageCounter;

  startGameBtn.style.display = 'none';
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',insertSymbol);
  }
}

function playAgain() {
  createGrid();
  boxes = document.querySelectorAll('.box');
  playAgainBtn.style.display = 'none';
  congratulation.style.display = 'none';
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',insertSymbol);
  }
}


function insertSymbol() {
  this.removeEventListener('click', insertSymbol);
  (symbol == 'X')? symbol = 'O' : symbol = 'X';
  this.innerHTML = symbol;
  gameCounter++;
  checkLine();
}

function checkLine() {
  for (let i = 0; i < lines.length; i++) {
    if (boxes[lines[i][0]].innerHTML == 'X' && boxes[lines[i][1]].innerHTML == 'X' && boxes[lines[i][2]].innerHTML == 'X') {
        boxes[lines[i][0]].style.background = 'tomato';
        boxes[lines[i][1]].style.background = 'tomato';
        boxes[lines[i][2]].style.background = 'tomato';
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener('click', insertSymbol);
      }
      player1StorageCounter++;
      playGameAgain();
    }
    if (boxes[lines[i][0]].innerHTML == 'O' && boxes[lines[i][1]].innerHTML == 'O' && boxes[lines[i][2]].innerHTML == 'O') {
        boxes[lines[i][0]].style.background = 'tomato';
        boxes[lines[i][1]].style.background = 'tomato';
        boxes[lines[i][2]].style.background = 'tomato';
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener('click', insertSymbol);
      }
      player2StorageCounter++;
      playGameAgain();
    }
  };
  if (gameCounter == 9) {
    playGameAgain();
  }
}

function createGrid() {
  let text = '';
  for (var i = 0; i < 9; i++) {
    text += '<div class="box"></div>';
  }
  container.innerHTML = text;
}

function playGameAgain() {
  congratulation.style.display = 'block';
  let d = new Date();
  let time = d.getTime();
  let player1Storage = [player1StorageCounter,time];
  let player2Storage = [player2StorageCounter,time];

  localStorage.setItem(player1Name, JSON.stringify(player1Storage));
  localStorage.setItem(player2Name, JSON.stringify(player2Storage));
  player1Score.innerHTML = JSON.parse(localStorage.getItem(player1Name))[0];
  player2Score.innerHTML = JSON.parse(localStorage.getItem(player2Name))[0];

  symbol = 'O';
  gameCounter = 0;
  playAgainBtn.style.display = 'block';
}
