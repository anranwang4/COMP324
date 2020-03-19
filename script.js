 window.toggleLeft = function() {
    var element = document.getElementById("offcanvas-left");
    element.classList.toggle("hide");
}

window.toggleRight = function() {
    var element = document.getElementById("offcanvas-right");
    element.classList.toggle("hide");
}

window.bubbles = function(){
  var element = document.getElementById("offcanvas-left");
  element.classList.toggle("hide");
  var bub =  document.getElementsByClassName('free');
}

fetch('https://api.edamam.com/api/food-database/parser')
