let startButton = document.querySelector('#start-button');
let resetButton = document.querySelector('#reset-button');
let circle = document.querySelectorAll('.circle');
resetButton.style.visibility = 'hidden';
resetButton.addEventListener('click',resetRace);
startButton.addEventListener('click',startRace);
let animateBack;

function startRace(e) {
  startButton.removeEventListener('click',startRace);
  repeatCircleMove();

  function repeatCircleMove() {
    let animate = setTimeout(startRace,1);
    for (let i = 0; i < 10; i++) {
      let x = Math.random() * 3;
        circle[i].style.left = circle[i].offsetLeft + x +'px';
      if(circle[i].offsetLeft >= 1371){
        circle[i].style.background = 'cadetblue';
        circle[i].style.color = '#000';
        circle[i].style.fontWeight = '900';
        clearTimeout(animate);
        resetButton.style.visibility = 'visible';
      }
    };
  }
  resetButton.addEventListener('click',resetRace);
}

function resetRace(e) {
  resetButton.removeEventListener('click',resetRace);
  resetButton.style.visibility = 'hidden';
  circle.forEach(function (el) {
    el.style.background = 'tomato';
    el.style.color = 'cadetblue';
    el.style.fontWeight = '400';
    el.offsetLeft = '0px';
  });
  repeatMoveBack();

  function repeatMoveBack () {
    animateBack = setTimeout(repeatMoveBack,1);
    for (let i = 0; i < 10; i++) {
      let y = Math.random() * 10;
      circle[i].style.left = (circle[i].offsetLeft - y) +'px';
      if (circle[i].offsetLeft < 0) {
        circle[i].style.left = '0px';
      } 
    }
    let circle1 = circle[0].style.left;
    let circle2 = circle[1].style.left;
    let circle3 = circle[2].style.left;
    let circle4 = circle[3].style.left;
    let circle5 = circle[4].style.left;
    let circle6 = circle[5].style.left;
    let circle7 = circle[6].style.left;
    let circle8 = circle[7].style.left;
    let circle9 = circle[8].style.left;
    let circle10 = circle[9].style.left;
    if (circle1 == '0px' && circle2 == '0px' && circle3 == '0px' && circle4 == '0px' && circle5 == '0px' && 
        circle6 == '0px' && circle7 == '0px' && circle8 == '0px' && circle9 == '0px' && circle10 == '0px') {
      startButton.addEventListener('click',startRace);
      clearTimeout(animateBack);
    }
  }
}