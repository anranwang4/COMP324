 window.toggleLeft = function() {
    var element = document.getElementById("offcanvas-left");
    element.classList.toggle("hide");
}

/*
window.toggleRight = function() {
    var element = document.getElementById("offcanvas-right");
    element.classList.toggle("hide");
}
*/

function bubbles(){
  var element = document.getElementById("offcanvas-left");
  element.classList.toggle("hide");
  var bub =  document.getElementById("bubbles");
  var bubr = document.getElementById("bubbles-right");
  if (bub.style.display === "none") {
    bub.style.display = "block";
	  if (bubr.style.display === "none") {
		bubr.style.display = "block";
	  } else {
		bubr.style.display = "none";
	  }
  } else {
    bub.style.display = "none";
	  if (bubr.style.display === "none") {
		bubr.style.display = "block";
	  } else {
		bubr.style.display = "none";
	  }
  }
}

function reset(){
	var bub =  document.getElementById("bubbles");
	var bubr = document.getElementById("bubbles-right")
}

// Taken from W3Schools!
function myBtn() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeBtn() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

fetch('https://api.edamam.com/api/food-database/parser')
