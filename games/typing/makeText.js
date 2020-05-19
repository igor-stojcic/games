function makeTextAndLevel() {
	let smallLevel = ['These are books', 'Milk is good to eat', 'Javascript is the best','The door is not opened','I have bought the car','This vase is made of glass','It is wonderful'];
	let bigLevel = ['There are two pencils in my box','This should help you to remember it','You ask some body to tell you time','You find people expressing many different opinions', 'They can be divided into three groups','You must know the sound of each letter in the English alphabet','It would be quite impossible to enumerate all the things'];
	let randomNum = Math.floor(Math.random() * 7);
		if (level == 1) {
			textZaKucanje.push(smallLevel[randomNum]);
			changeCompsSpeedTyping = 800;
		}
		if (level == 2) {
			textZaKucanje.push(smallLevel[randomNum]);
			changeCompsSpeedTyping = 700;
		}
		if (level == 3) {
			textZaKucanje.push(smallLevel[randomNum]);
			changeCompsSpeedTyping = 600;
		}
		if (level == 4) {
			textZaKucanje.push(bigLevel[randomNum]);
			changeCompsSpeedTyping = 500;
		}
		if (level == 5) {
			textZaKucanje.push(bigLevel[randomNum]);
			changeCompsSpeedTyping = 400;
		}
		if (level == 6) {
			textZaKucanje.push(bigLevel[randomNum]);
			changeCompsSpeedTyping = 300;
		}
		if (level == 7) {
			textZaKucanje.push(bigLevel[randomNum]);
			changeCompsSpeedTyping = 200;
		}
		if (level == 8) {
			textZaKucanje.push(bigLevel[randomNum]);
			changeCompsSpeedTyping = 100;
		}
}

