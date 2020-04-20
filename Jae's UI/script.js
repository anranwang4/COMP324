// window.onscroll = function() {stickyNavBar()};
// window.onscroll = document.getElementById('navbar');
// var sticky = navbar.offsetTop(); // "offsetTop returns top position relative to the top of the offsetParent element" (w3schools).

// function stickyNavBar() {
// 	if (window.pageYOffset >= sticky) {
// 		navbar.classList.add('sticky')
// 	}
// 	else {
// 		navbar.classList.remove('sticky');
// 	}
// }

// Above code from demonstrative purposes from w3schools. Have not implemented yet as we are utilizing CSS selector instead of DOM for the fixed position.

// Toggle button for smaller screens
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})

