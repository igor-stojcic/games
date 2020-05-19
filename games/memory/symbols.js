let symbols = [];

let symbolsArr = ['<i class="fas fa-toilet-paper"></i>', '<i class="fas fa-shower"></i>', 
				'<i class="fas fa-lightbulb"></i>', '<i class="far fa-lightbulb"></i>',
    			'<i class="fas fa-dungeon"></i>', '<i class="fas fa-bath"></i>', 
    			'<i class="fas fa-coffee"></i>', '<i class="fas fa-fan"></i>', 
    			'<i class="fas fa-bell"></i>', '<i class="far fa-bell"></i>', 
			    '<i class="fas fa-satellite-dish"></i>', '<i class="fas fa-meteor"></i>', 
			    '<i class="fas fa-atom"></i>', '<i class="fab fa-galactic-republic"></i>', 
			    '<i class="fas fa-globe"></i>', '<i class="fas fa-moon"></i>', 
			    '<i class="far fa-moon"></i>', '<i class="far fa-hand-spock"></i>', 
			    '<i class="fab fa-500px"></i>', '<i class="fab fa-accessible-icon"></i>',
			    '<i class="fas fa-address-book"></i>', '<i class="far fa-address-card"></i>', 
			    '<i class="fas fa-air-freshener"></i>', '<i class="fab fa-angellist"></i>', 
			    '<i class="fas fa-archway"></i>', '<i class="fas fa-adjust"></i>', 
			    '<i class="fas fa-allergies"></i>', '<i class="fas fa-anchor"></i>', 
			    '<i class="fas fa-angry"></i>', '<i class="fab fa-apple"></i>',
			    '<i class="fab fa-asymmetrik"></i>', '<i class="fas fa-hiking"></i>',
			    '<i class="fas fa-bone"></i>', '<i class="fas fa-bong"></i>',
			    '<i class="fas fa-candy-cane"></i>', '<i class="fas fa-cannabis"></i>',
			    '<i class="fas fa-cat"></i>', '<i class="fas fa-cash-register"></i>',
			    '<i class="fas fa-carrot"></i>', '<i class="fas fa-check-double"></i>',
			    '<i class="fas fa-chess-board"></i>', '<i class="fas fa-chess"></i>',
			    '<i class="fab fa-chrome"></i>', '<i class="fas fa-cloud-meatball"></i>',
			    '<i class="fas fa-cloud-sun-rain"></i>', '<i class="fas fa-cogs"></i>',
			    '<i class="fas fa-comment-dots"></i>', '<i class="fab fa-creative-commons-sampling"></i>',
			    '<i class="fab fa-hornbill"></i>', '<i class="fas fa-chair"></i>',
			    '<i class="fas fa-charging-station"></i>', '<i class="fas fa-code-branch"></i>',
			    '<i class="fas fa-coins"></i>', '<i class="fab fa-css3"></i>',
			    '<i class="fab fa-css3-alt"></i>', '<i class="fab fa-critical-role"></i>',
			    '<i class="fas fa-dice"></i>', '<i class="fas fa-fingerprint"></i>',
			    '<i class="fab fa-fly"></i>', '<i class="fas fa-frog"></i>',
			    '<i class="fas fa-democrat"></i>', '<i class="fas fa-drumstick-bite"></i>'];


// ----- Make random Symbols --------------
function makeSymbols() {
	symbols.splice(0);
	let tempArr = [];

	for (let j = 0; j < 60; j++) {
	    tempArr.push(j);
	}

	for (let i = 0; i < 60; i++) {
	    let random = Math.floor(Math.random() * tempArr.length);
	    symbols.push(symbolsArr[tempArr[random]]);
	    tempArr.splice(random, 1);
	}
}
//------------------------------------------
