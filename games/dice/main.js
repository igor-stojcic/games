let newGameButton = document.querySelector('#start');
let resetPlayers = document.querySelector('#reset');
let player1 = document.querySelector('#name1');
let player2 = document.querySelector('#name2');
let player1ScoreDisplay = document.querySelector('#t1');
let player2ScoreDisplay = document.querySelector('#t2');
let roundText = document.querySelector('#round');
let player1Roll = document.querySelector('.left');
let player2Roll = document.querySelector('.right');
let winner1 = document.querySelector('#winner1');
let winner2 = document.querySelector('#winner2');
let circle1Clearing = document.querySelectorAll('.circle1');
let circle2Clearing = document.querySelectorAll('.circle2');
let totalWinsPl1 = document.querySelector('#total-winner1');
let totalWinsPl2 = document.querySelector('#total-winner2');
let totalWinsPlayer1 = document.querySelector('#total-winner1 span');
let totalWinsPlayer2 = document.querySelector('#total-winner2 span');
newGameButton.addEventListener('click',newGame);

let round = 1;
let counterPlayers = 0;
let player1Score = 0;
let player2Score = 0;
let player1Name = '';
let player2Name = '';
let player1StorageCounter;
let player2StorageCounter;
let player1Value;
let player2Value;

function newGame () {
  round = 1;
  counterPlayers = 0;
  player1Score = 0;
  player2Score = 0;
  player1ScoreDisplay.innerHTML = player1Score;
  player2ScoreDisplay.innerHTML = player2Score;
  winner1.style.display = 'none';
  winner2.style.display = 'none';
  totalWinsPl1.style.visibility = 'visible';
  totalWinsPl2.style.visibility = 'visible';
  for (let i = 0; i < 7; i++) {
    circle1Clearing[i].style.background = 'transparent';
    circle2Clearing[i].style.background = 'transparent';
  };
  player1Name = prompt('PLAYER NAME 1 : ');
  player1.innerHTML = player1Name;
  player2Name = prompt('PLAYER NAME 2 : ');
  player2.innerHTML = player2Name;
  roundText.innerHTML = `ROUND ${round}`;
  resetPlayers.addEventListener('click',resetGame);
  resetPlayers.style.cursor = 'pointer';

  player1Value = JSON.parse(localStorage.getItem(player1Name));
  player2Value = JSON.parse(localStorage.getItem(player2Name));

  if ((!player1Value || !player2Value) || player1Value[1] != player2Value[1]) {
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

  totalWinsPlayer1.innerHTML = player1StorageCounter;
  totalWinsPlayer2.innerHTML = player2StorageCounter;
  changePlayer();
}

function changePlayer() {
  if (counterPlayers % 2 == 0) {
    player1Roll.addEventListener('click',player1Counting);
    player1Roll.style.cursor = 'pointer';
    player1Roll.style.background = 'red';
    player1Roll.style.color = '#FFF';
    player2Roll.removeEventListener('click',player2Counting);
    player2Roll.style.background = '#000';
    counterPlayers++;
  }else{
    player2Roll.addEventListener('click',player2Counting);
    player2Roll.style.cursor = 'pointer';
    player2Roll.style.background = 'red';
    player2Roll.style.color = '#FFF';
    player1Roll.removeEventListener('click',player1Counting);
    player1Roll.style.background = '#000';
    counterPlayers++;
  }
}

function player1Counting() {
  let numDice = Math.floor(Math.random() * 6) + 1;
  let diceDotList = circle1Clearing;
  playerDiceDisplay(numDice, diceDotList);
  player1Score += numDice;
  player1ScoreDisplay.innerHTML = player1Score;
  changePlayer();
}

function player2Counting() {
  let numDice = Math.floor(Math.random() * 6) + 1;
  let diceDotList = circle2Clearing;
  playerDiceDisplay(numDice, diceDotList);
  player2Score += numDice;
  player2ScoreDisplay.innerHTML = player2Score;
  round++;
  if (round < 11) {
    (round != 0)? roundText.innerHTML = `ROUND ${round}` : 'ROUND';
    changePlayer();
  }else{
    player2Roll.removeEventListener('click',player2Counting);
    winner();
    player2Roll.style.background = '#000';
  }
}

function playerDiceDisplay(numDice, diceDotList) {
  for (let i = 0; i < 7; i++) {
    diceDotList[i].style.background = 'transparent';
  };
  if (numDice == 1) {
    diceDotList[3].style.background = '#FFF';
  }
  else if (numDice == 2) {
    diceDotList[0].style.background = '#FFF';
    diceDotList[6].style.background = '#FFF';
  }
  else if (numDice == 3) {
    diceDotList[0].style.background = '#FFF';
    diceDotList[3].style.background = '#FFF';
    diceDotList[6].style.background = '#FFF';
  }
  else if (numDice == 4) {
    diceDotList[0].style.background = '#FFF';
    diceDotList[1].style.background = '#FFF';
    diceDotList[5].style.background = '#FFF';
    diceDotList[6].style.background = '#FFF';
  }
  else if (numDice == 5) {
    diceDotList[0].style.background = '#FFF';
    diceDotList[1].style.background = '#FFF';
    diceDotList[3].style.background = '#FFF';
    diceDotList[5].style.background = '#FFF';
    diceDotList[6].style.background = '#FFF';
  }
  else if (numDice == 6) {
    diceDotList[0].style.background = '#FFF';
    diceDotList[1].style.background = '#FFF';
    diceDotList[2].style.background = '#FFF';
    diceDotList[4].style.background = '#FFF';
    diceDotList[5].style.background = '#FFF';
    diceDotList[6].style.background = '#FFF';
  }
}


function winner() {
  let d = new Date();
  let time = d.getTime();

  if (player1Score > player2Score) {
    winner1.style.display = 'block';
    player1StorageCounter++;
    
  }
  else if (player1Score < player2Score) {
    winner2.style.display = 'block';
    player2StorageCounter++;
    
  } else {
    winner1.innerHTML = 'DRAW';
    winner2.innerHTML = 'DRAW';
    winner1.style.display = 'block';
    winner2.style.display = 'block';
  }

  let player1Storage = [player1StorageCounter,time];
  let player2Storage = [player2StorageCounter,time];

  localStorage.setItem(player1Name, JSON.stringify(player1Storage));
  localStorage.setItem(player2Name, JSON.stringify(player2Storage));
  totalWinsPlayer1.innerHTML = JSON.parse(localStorage.getItem(player1Name))[0];
  totalWinsPlayer2.innerHTML = JSON.parse(localStorage.getItem(player2Name))[0];
}

function resetGame() {
  round = 1;
  counterPlayers = 0;
  player1Score = 0;
  player2Score = 0;
  player1ScoreDisplay.innerHTML = player1Score;
  player2ScoreDisplay.innerHTML = player1Score;
  roundText.innerHTML = `ROUND ${round}`;
  winner1.style.display = 'none';
  winner2.style.display = 'none';
  for (let i = 0; i < 7; i++) {
    circle1Clearing[i].style.background = 'transparent';
    circle2Clearing[i].style.background = 'transparent';
  };
  changePlayer();
}
