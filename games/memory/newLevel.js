// ----------- MAKE NEW LEVEL --------------------------------------------------
function newLevel() {
    if (levelNumber != 6) {
        if (levelNumber == 1) {
            quantityOfCoupleCards = 2;
            timeValue = 100;
            timeFunctionSpeed = 100;
        }
        if (levelNumber == 2) {
            quantityOfCoupleCards = 8;
            timeValue = 100;
            timeFunctionSpeed = 200;
        }
        if (levelNumber == 3) {
            quantityOfCoupleCards = 18;
            timeValue = 100;
            timeFunctionSpeed = 500;
        }
        if (levelNumber == 4) {
            quantityOfCoupleCards = 32;
            timeValue = 100;
            timeFunctionSpeed = 600;
        }
        if (levelNumber == 5) {
            quantityOfCoupleCards = 56;
            timeValue = 100;
            timeFunctionSpeed = 700;
        }

        level.innerHTML = `Level ${levelNumber}`;
        counterForChangeLevel = 0;
        createGrid();
        memCard = document.querySelectorAll('.mem-card');
        front = document.querySelectorAll('.front');
        back = document.querySelectorAll('.back');
        for (let i = 0; i < memCard.length; i++) {
            cards.push(memCard[i]);
        };
        addEventOnCard();
        timeCount();
        changeDimension(levelNumber);
    } else {
        gameBox.style.visibility = 'hidden';
        timer.style.visibility = 'hidden';
        level.innerHTML = `# Congratulation #`;
        congratulation.style.display = 'block';
    }
}
// -----------------------------------------------------------------------------

// ---- TIMER FOR LEVEL... -----------------------------------------------------
let timeValue = 100;
let timeFunctionSpeed = 100;
let startTime;

function timeCount() {
    if (timeValue > 0) {
        timeValue -= 1;
        time.style.width = timeValue + '%';
        startTime = setTimeout(timeCount, timeFunctionSpeed);
    } else {
        clearTimeout(startTime);
        for (let i = 0; i < memCard.length; i++) {
            memCard[i].removeEventListener('click', openCard);
        }
        level.innerHTML = 'to slow';
        level.style.background = 'red';
        level.style.color = '#FFF';
        trayAgainBtn.style.display = 'block';
        levelNumber = 1;
        counterForChangeLevel = 0;
        quantityOfCoupleCards = 2;
    }
    level.removeEventListener('click', startGame)
}

function changeDimension(levelNumber) {
    if (levelNumber == 1) {
        box.style.width = '20vw';
        box.style.height = '20vw';
        box.style.marginTop = '20px';
        for (var i = 0; i < quantityOfCoupleCards*2; i++) {
            memCard[i].style.width = '10vw';
            memCard[i].style.height = '10vw';
            front[i].style.width = '10vw';
            back[i].style.width = '10vw';
            front[i].style.height = '10vw';
            back[i].style.height = '10vw';
        }
    }
    if (levelNumber == 2) {
        box.style.width = '40vw';
        box.style.height = '40vw';
        box.style.marginTop = '20px';
        for (var i = 0; i < quantityOfCoupleCards*2; i++) {
            memCard[i].style.width = '10vw';
            memCard[i].style.height = '10vw';
            front[i].style.width = '10vw';
            back[i].style.width = '10vw';
            front[i].style.height = '10vw';
            back[i].style.height = '10vw';
        }
    }
    if (levelNumber == 3) {
        box.style.width = '90vw';
        box.style.height = '40vw';
        box.style.marginTop = '20px';
        for (var i = 0; i < quantityOfCoupleCards*2; i++) {
            memCard[i].style.width = '10vw';
            memCard[i].style.height = '10vw';
            front[i].style.width = '10vw';
            back[i].style.width = '10vw';
            front[i].style.height = '10vw';
            back[i].style.height = '10vw';
        }
    }
    if (levelNumber == 4) {
        box.style.width = '100vw';
        box.style.height = 'auto';
        box.style.marginTop = '20px';
        for (var i = 0; i < quantityOfCoupleCards*2; i++) {
            memCard[i].style.width = '6vw';
            memCard[i].style.height = '6vw';
            front[i].style.width = '6vw';
            back[i].style.width = '6vw';
            front[i].style.height = '6vw';
            back[i].style.height = '6vw';
        }
    }
    if (levelNumber == 5) {
        box.style.width = '96vw';
        box.style.height = '100vh';
        box.style.marginTop = '45px';
        for (var i = 0; i < quantityOfCoupleCards*2; i++) {
            memCard[i].style.width = '6vw';
            memCard[i].style.height = '6vw';
            front[i].style.width = '6vw';
            back[i].style.width = '6vw';
            front[i].style.height = '6vw';
            back[i].style.height = '6vw';
        }
    }
}

// -----------------------------------------------------------------------------