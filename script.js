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

function homeBtn(){
  location.replace("home.html");
}

function resetButton(){
	var bub =  document.getElementById("fruit");
	var bubr = document.getElementById("fruitR");
  bub.style.display = "none";
  bubr.style.display = "none";

  bub =  document.getElementById("vegie");
  bubr = document.getElementById("vegieR");
  bub.style.display = "none";
  bubr.style.display = "none";

  bub =  document.getElementById("grains");
  bubr = document.getElementById("grainsR");
  bub.style.display = "none";
  bubr.style.display = "none";

  bub =  document.getElementById("meats");
  bubr = document.getElementById("meatsR");
  bub.style.display = "none";
  bubr.style.display = "none";

  bub =  document.getElementById("dairy");
  bubr = document.getElementById("dairyR");
  bub.style.display = "none";
  bubr.style.display = "none";
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
