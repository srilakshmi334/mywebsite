// window.addEventListener("load", function() {
	// if (window.location.hash) {
		// const projectButton = document.querySelector(window.location.hash);
		// if(projectButton) {
			// projectButton.scrollIntoView({behaviour: "smooth"});
		// }
	// }
// });

// document.getElementById("linkToProj").addEventListener("click", function() {
	// window.location.hash = "#projects";
// });

/**
Button that leads to project section of webpage
*/

document.addEventListener('DOMContentLoaded', function() {	// DOMContentLoaded -> checks that the HTML page is loaded before processing actions
	const projectButton = document.getElementById('linkToProj');	// gets the id of the HTML button
	
	projectButton.addEventListener('click', function() {
		const findProj = document.getElementById('projects');		// gets the id of the section that the HTML button should link to
		findProj.scrollIntoView({behavior: 'smooth'});				// makes the scroll movement to the section "smooth"
	});
});
