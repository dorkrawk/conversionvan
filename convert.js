// code for Conversion Van to find and convert units



// GOOGLE "api" for unit conversion: http://www.google.com/ig/calculator?hl=en&q=1foot=?meter

var meters = document.body.innerHTML.match("[0-9]+m");
$.getJSON("http://www.google.com/ig/calculator?hl=en&q=1foot=?meter", function(json) {
		alert(json);
	});


//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("[0-9]+m", "g"), "[0-9]+miles");
//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Steve Jobs", "g"), "Dave Schwantes");
