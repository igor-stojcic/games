//  -----------  CLOSE OPEN CARDS -----------------
function closeCards() {
    cards[openCardsArr[1]].children[0].style.transform = `perspective(900px) rotateY(0deg)`; // back
    cards[openCardsArr[1]].children[1].style.transform = `perspective(900px) rotateY(-180deg)`; // front
    cards[openCardsArr[0]].children[0].style.transform = `perspective(900px) rotateY(0deg)`; // back
    cards[openCardsArr[0]].children[1].style.transform = `perspective(900px) rotateY(-180deg)`; // front
    addEventOnCard() //vracamo click event handler na sve kartice
    this.removeEventListener('click', openCard); //skidam click sa trenutno otvorene kartice
    openSymbolsArr.splice(0, 2); //brisem indexe simbola iz array-a
    openCardsArr.splice(0, 2); //brisem indexe kartica iz array-a
}
//  -----------------------------------------------