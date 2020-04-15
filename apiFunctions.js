
const httpr = new XMLHttpRequest(); // initiates const used for http requests
const apiKey = "&app_key=57a337e5cb04182f79286217569dfb49"; // My api key (michael mehr) with text needed for url
const apiID = "&app_id=fe76b0fc"; // my api id (michael mehr) with text needed for url

function searchTesting(){
	var searchIn = document.getElementById("searchBox").value; // gets input value from search box
	searchIn = encodeURIComponent(searchIn.trim()); // .trim() removes leading and trailing white space, encodeURIComponent() converts inner white space to "%20"
	var url='https://api.edamam.com/api/food-database/parser?ingr=' + searchIn + apiID + apiKey; // concatenates search , id, and key into full URL
	httpr.open("GET", url); // prepares GET http request
	httpr.send(); // sends http request
}

// logs the return from the API call into the console (cntr+shift+I on chrome to see console/inspect)
httpr.onreadystatechange = (e) => {
  console.log(httpr.responseText) 
}