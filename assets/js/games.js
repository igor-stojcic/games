window.addEventListener("load", getYear);
	function getYear() {
		const d = new Date();
	  	const year = d.getFullYear();
	  	document.getElementById("year").innerHTML = year;
	}
// Tooltips
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
//  ****************************************************************************