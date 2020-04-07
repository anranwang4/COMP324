function bubblesF(){
  var element = document.getElementById("offcanvas-left");
  var bub =  document.getElementById("fruit");
  var bubr = document.getElementById("fruitR");
  if (bub.style.display === "block" && bubr.style.display === "block") {

  } else {
    resetButton();
    bub.style.display = "block";
		bubr.style.display = "block";
    element.classList.toggle("hide");
  }
}

function bubblesV(){
  var element = document.getElementById("offcanvas-left");
  var bub =  document.getElementById("vegie");
  var bubr = document.getElementById("vegieR");
  if (bub.style.display === "block" && bubr.style.display === "block") {

  } else {
    resetButton();
    bub.style.display = "block";
		bubr.style.display = "block";
    element.classList.toggle("hide");
  }
}

function bubblesG(){
  var element = document.getElementById("offcanvas-left");
  var bub =  document.getElementById("grains");
  var bubr = document.getElementById("grainsR");
  if (bub.style.display === "block" && bubr.style.display === "block") {

  } else {
    resetButton();
    bub.style.display = "block";
		bubr.style.display = "block";
    element.classList.toggle("hide");
  }
}

function bubblesM(){
  var element = document.getElementById("offcanvas-left");
  var bub =  document.getElementById("meats");
  var bubr = document.getElementById("meatsR");
  if (bub.style.display === "block" && bubr.style.display === "block") {

  } else {
    resetButton();
    bub.style.display = "block";
		bubr.style.display = "block";
    element.classList.toggle("hide");
  }
}

function bubblesD(){
  var element = document.getElementById("offcanvas-left");
  var bub =  document.getElementById("dairy");
  var bubr = document.getElementById("dairyR");
  if (bub.style.display === "block" && bubr.style.display === "block") {

  } else {
    resetButton();
    bub.style.display = "block";
		bubr.style.display = "block";
    element.classList.toggle("hide");
  }
}
