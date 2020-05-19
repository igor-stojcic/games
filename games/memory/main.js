let box = document.querySelector('.card');
let trayAgainBtn = document.querySelector('#try-again');
let gameBox = document.querySelector('#gameBox');
let startBtn = document.querySelector('.start-btn');
let level = document.querySelector('.level');
let timer = document.querySelector('.timer');
let time = document.querySelector('.time');
let congratulation = document.querySelector('.pyro');
let startCounter = document.querySelector('#start-counter p');
let numOfMemCards = 4;

let levelNumber = 1;
let counterForChangeLevel = 0;
let quantityOfCoupleCards = 2; 

startBtn.addEventListener('click', startGame);
trayAgainBtn.addEventListener('click', newGame);

createGrid();

let memCard = document.querySelectorAll('.mem-card');
let front = document.querySelectorAll('.front');
let back = document.querySelectorAll('.back');

let openSymbolsArr = []; //  Arrays-i za manipulacije
let cards = [];          //      sa
let openCardsArr = [];   //    karticama
for (let i = 0; i < memCard.length; i++) {
    cards.push(memCard[i]);
};

gameBox.style.visibility = 'hidden';
timer.style.visibility = 'hidden';

function startGame() { // START GAME
    congratulation.style.display = 'none';
    startBtn.style.display = 'none';
    box.style.display = 'none';
    gameBox.style.visibility = 'hidden';
    timer.style.visibility = 'hidden';
    level.innerHTML = ``;
    startCounter.style.display = 'block';
    (function () {
        let time = 5;
        startCounter.innerHTML = time;
        let loop = setInterval(function () {
            time--;
            startCounter.innerHTML = time;
            if (time == 0) {
                clearInterval(loop);
                startCounter.style.display = 'none';
                box.style.display = 'block';
                level.innerHTML = `Level ${levelNumber}`;
                gameBox.style.visibility = 'visible';
                timer.style.visibility = 'visible';
                addEventOnCard();
                timeCount();
            }
        },1000);
    })();
}

function openCard(e) {
    this.children[0].style.transform = `perspective(900px) rotateY(180deg)`; // front
    this.children[1].style.transform = `perspective(900px) rotateY(0deg)`; // back
    let indexOfSymbol = symbols.indexOf(this.children[1].children[0].innerHTML); //uzimam indexe od otvorenog simbola
    let indexOfCard = cards.indexOf(this); //uzimam indexe od otvorene kartice
    openSymbolsArr.push(indexOfSymbol); //ubacujem u array 2 indexa od otvorenih simbola
    openCardsArr.push(indexOfCard); //ubacujem u array 2 indexa od otvorenih kartica
    let firstOpenCard = cards[openCardsArr[0]]; // Prva otvorena kartica
    let secondOpenCard = cards[openCardsArr[1]]; // Druga otvorena kartica
    this.removeEventListener('click', openCard);
    if (counterForChangeLevel != quantityOfCoupleCards) { //provera da li su svi parovi kartica pronadjeni
        if (openCardsArr.length == 2) {
            if (openSymbolsArr[0] === openSymbolsArr[1] && firstOpenCard != secondOpenCard) { // provera identicnosti 2 otvorena simbola
                firstOpenCard.style.visibility = 'hidden'; //sakrivamo karticu 1
                secondOpenCard.style.visibility = 'hidden'; //sakrivamo karticu 2
                counterForChangeLevel++;
                timeValue += 5;
                openSymbolsArr.splice(0, 2); //brisem indexe simbola iz array-a
                openCardsArr.splice(0, 2);
            } else {
                setTimeout(closeCards, 1000);
            }
        } else if (openCardsArr.length > 2) { //uslov ako u array-u od indexa kartica ima 2 indexa
            secondOpenCard.children[0].style.transform = `perspective(900px) rotateY(0deg)`; // back
            secondOpenCard.children[1].style.transform = `perspective(900px) rotateY(-180deg)`; // front
            firstOpenCard.children[0].style.transform = `perspective(900px) rotateY(0deg)`; // back/
            firstOpenCard.children[1].style.transform = `perspective(900px) rotateY(-180deg)`; // front
            addEventOnCard() //vracamo click event handler na sve kartice
            this.removeEventListener('click', openCard); //skidam click sa trenutno otvorene kartice
            openSymbolsArr.splice(0, 2); //brisem indexe simbola iz array-a
            openCardsArr.splice(0, 2); //brisem indexe kartica iz array-a
        }
    }
    if (counterForChangeLevel == quantityOfCoupleCards) { //provera da li su svi parovi kartica pronadjeni
        levelNumber++;
        cards = [];
        setTimeout(newLevel, 3000);
        clearTimeout(startTime);
    }
}

function addEventOnCard() { //stavlja Event handler 'click' na kartice
    for (let i = 0; i < memCard.length; i++) {
        memCard[i].addEventListener('click', openCard);
    }
}

function createGrid() {
    makeSymbols();
    let randomCardsBackground = `url(background/${Math.floor(Math.random() * 7) + 1}.jpg)`;
    let quantityOfCoupleCardsArr = [];
    for (let j = 0; j < quantityOfCoupleCards; j++) {
        quantityOfCoupleCardsArr.push(j);
        quantityOfCoupleCardsArr.push(j);
    }
    let styleGrid = '';
    if (levelNumber == 1 || levelNumber == 2) {
        for (let i = 0; i < levelNumber*2; i++) {
            styleGrid += 'auto ';
        }
    }
    if (levelNumber == 3) {
        for (let i = 0; i < 9; i++) {
            styleGrid += 'auto ';
        }
    }
    if (levelNumber == 4) {
        for (let i = 0; i < 16; i++) {
            styleGrid += 'auto ';
        }
    }
    if (levelNumber == 5) {
        for (let i = 0; i < 16; i++) {
            styleGrid += 'auto ';
        }
    }
        gameBox.style.gridTemplateColumns = styleGrid;
    let text = '';
    for (let i = 0; i < quantityOfCoupleCards*2; i++) {
        let random = Math.floor(Math.random() * quantityOfCoupleCardsArr.length);
        text += `<div class="mem-card">
                    <div class="front" style="background-image:${randomCardsBackground}"></div>
                    <div class="back"><p>${symbols[quantityOfCoupleCardsArr[random]]}</p></div>
                </div>`;
        quantityOfCoupleCardsArr.splice(random, 1);
    }
    gameBox.innerHTML = text;
}

function startTimer() {
    setTimeout(function () {
        let time = 5;
        startCounter.innerHTML = time;
        let loop = setInterval(function () {
            time--;
            startCounter.innerHTML = time;
            if (time == 0) {
                clearInterval(loop);
                startCounter.style.display = 'none';
                startGame();
            }
        },1000);
    },2000);
}

function newGame() {
    trayAgainBtn.style.display = 'none';
    level.style.background = 'transparent';
    level.style.color = '#000';
    levelNumber = 1
    counterForChangeLevel = 0;
    quantityOfCoupleCards = 2;
    timeValue = 100;
    timeFunctionSpeed = 200;
    changeDimension(levelNumber);
    createGrid();
    memCard = document.querySelectorAll('.mem-card');
    front = document.querySelectorAll('.front');
    back = document.querySelectorAll('.back');
    openSymbolsArr = []; //  Arrays-i za manipulacije
    cards = [];          //      sa
    openCardsArr = [];   //    karticama
    for (let i = 0; i < memCard.length; i++) {
        cards.push(memCard[i]);
    };
    startGame();
}