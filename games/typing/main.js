let textZaKucanje = [];
let startBtn = document.querySelector('#start');
let textHolder = document.querySelector('#textHolder');
let textAreaPlayer = document.querySelector('#player-area');
let textAreaComp1 = document.querySelector('#comp1-area');
let textAreaComp2 = document.querySelector('#comp2-area');
let textAreaComp3 = document.querySelector('#comp3-area');
let positionPlayer = document.querySelector('#position-player');
let positionComp1 = document.querySelector('#position-comp1');
let positionComp2 = document.querySelector('#position-comp2');
let positionComp3 = document.querySelector('#position-comp3');
let randomText;
let level = 1;
let positionNumber = 0;
let playerCounter = 0;
let compsCounter = 0;
let timeCallStartTyping = 100;
let changeCompsSpeedTyping;
startBtn.addEventListener('click',timer);

function timer() {
	restartAllValue();
	setTimeout(function () {
		let time = 5;
		startBtn.innerHTML = time;
		let loop = setInterval(function () {
			time--;
			startBtn.innerHTML = time;
			if (time == 0) {
				clearInterval(loop);
				startBtn.style.display = 'none';
				displayText();
			}
		},1000);
	},2000);
}

function displayText() {
	makeTextAndLevel();
	randomText = textZaKucanje[Math.floor(Math.random() * textZaKucanje.length)];
	textHolder.innerHTML = randomText;
	textHolder.style.display = 'block';
	startGame();
}

function startGame() {
	textAreaPlayer.focus();
	comp1StartTyping();
	comp2StartTyping();
	comp3StartTyping();
	playerStartTyping();
}

function comp1StartTyping() {
	let counter = 0;
	startTyping();
	function startTyping() {
		textAreaComp1.value += randomText[counter];
		counter++;
		timeCallStartTyping += Math.floor(Math.random() * changeCompsSpeedTyping);
		let loop = setTimeout(startTyping , timeCallStartTyping);
		timeCallStartTyping = 100;
		if (counter == randomText.length) {
			clearTimeout(loop);
			positionNumber++;
			positionComp1.innerHTML = `Position: ${positionNumber}`;
			positionComp1.style.backgroundColor = 'rgb(40, 167, 69)';//Za ovu boju sam koristio getComputedStyle
			positionComp1.style.color = '#FFF';
			compsCounter++;
			checkWictory();
		}
	}
}

function comp2StartTyping() {
	let counter = 0;
	startTyping();
	function startTyping() {
		textAreaComp2.value += randomText[counter];
		counter++;
		timeCallStartTyping += Math.floor(Math.random() * changeCompsSpeedTyping);
		let loop = setTimeout(startTyping , timeCallStartTyping);
		timeCallStartTyping = 100;
		if (counter == randomText.length) {
			clearTimeout(loop);
			positionNumber++;
			positionComp2.innerHTML = `Position: ${positionNumber}`;
			positionComp2.style.backgroundColor = 'rgb(40, 167, 69)';
			positionComp2.style.color = '#FFF';
			compsCounter++;
			checkWictory();
		}
	}
}

function comp3StartTyping() {
	let counter = 0;
	startTyping();
	function startTyping() {
		textAreaComp3.value += randomText[counter];
		counter++;
		timeCallStartTyping += Math.floor(Math.random() * changeCompsSpeedTyping);
		let loop = setTimeout(startTyping , timeCallStartTyping);
		timeCallStartTyping = 100;
		if (counter == randomText.length) {
			clearTimeout(loop);
			positionNumber++;
			positionComp3.innerHTML = `Position: ${positionNumber}`;
			positionComp3.style.backgroundColor = 'rgb(40, 167, 69)';
			positionComp3.style.color = '#FFF';
			compsCounter++;
			checkWictory();
		}
	}
}

function playerStartTyping() {
	textAreaPlayer.addEventListener('keyup',playerEnter);
	function playerEnter(e) {
		if (e.keyCode == 13) {
			let playerArea = textAreaPlayer.value.trim();
			textAreaPlayer.removeEventListener('keyup',playerEnter);
			if (playerArea == randomText && positionNumber < 2) {
				playerCounter++;
				positionNumber++;
				positionPlayer.innerHTML = `Position: ${positionNumber}`;
				positionPlayer.style.backgroundColor = 'rgb(40, 167, 69)';
				positionPlayer.style.color = '#FFF';
			}
			else if (playerArea == randomText && positionNumber >= 2) {
				positionNumber++;
				positionPlayer.innerHTML = `Position: ${positionNumber} - You are to slow!!!`;
				positionPlayer.style.backgroundColor = 'red';
				positionPlayer.style.color = '#FFF';
				playerCounter = 2;
			}
			else if (playerArea != randomText) {
				positionPlayer.innerHTML = 'Wrong typing';
				positionPlayer.style.backgroundColor = 'red';
				positionPlayer.style.color = '#FFF';
				playerCounter = 2;
			}
		}
	}
}

function checkWictory() {
	if (compsCounter == 3 && playerCounter == 1) {
		level++;
		textHolder.style.display = 'none';
		startBtn.innerHTML = `You passed in next Level!`;
		startBtn.style.display = 'block';
		setTimeout(timer,2000);
	}
	else if (compsCounter == 3 && playerCounter == 2) {
		level = 1;
		textHolder.style.display = 'none';
		startBtn.style.display = 'block';
		startBtn.style.backgroundColor = 'rgb(255, 193, 7)';
		startBtn.style.color = '#000';
		startBtn.innerHTML = `Restart Game`;
		startBtn.addEventListener('click',timer);
	}
	else if (compsCounter == 3 && playerCounter == 0) {
		positionPlayer.innerHTML = `Position: 4 - You are to slow!!!`;
		positionPlayer.style.backgroundColor = 'red';
		positionPlayer.style.color = '#FFF';
		level = 1;
		textHolder.style.display = 'none';
		startBtn.style.display = 'block';
		startBtn.style.backgroundColor = 'rgb(255, 193, 7)';
		startBtn.style.color = '#000';
		startBtn.innerHTML = `Restart Game`;
		startBtn.addEventListener('click',timer);
	}
}

function restartAllValue() {
	startBtn.removeEventListener('click',timer);
	positionNumber = 0;
	playerCounter = 0;
	compsCounter = 0;
	textHolder.innerHTML = '';
	textAreaPlayer.value = '';
	textAreaComp1.value = '';
	textAreaComp2.value = '';
	textAreaComp3.value = '';
	startBtn.style.backgroundColor = 'rgb(40, 167, 69)';
	startBtn.style.color = '#FFF';
	startBtn.innerHTML = `Level ${level} - Get ready!`;
	positionPlayer.innerHTML = `Position: ${positionNumber}`;
	positionPlayer.style.backgroundColor = 'rgb(255, 193, 7)';
	positionPlayer.style.color = '#000';
	positionComp1.innerHTML = `Position: ${positionNumber}`;
	positionComp1.style.backgroundColor = 'rgb(255, 193, 7)';
	positionComp1.style.color = '#000';
	positionComp2.innerHTML = `Position: ${positionNumber}`;
	positionComp2.style.backgroundColor = 'rgb(255, 193, 7)';
	positionComp2.style.color = '#000';
	positionComp3.innerHTML = `Position: ${positionNumber}`;
	positionComp3.style.backgroundColor = 'rgb(255, 193, 7)';
	positionComp3.style.color = '#000';
	textZaKucanje.splice(0);
}
