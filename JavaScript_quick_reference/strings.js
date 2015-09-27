(function() {
	document.getElementById("frmContact").onsubmit = function() {
		var myString = (document.getElementsByName("Name")[0]).value;
		document.getElementById("errorMessage").innerHTML = "The length of string is :"
				+ myString.length
				+ "<br> toUpperCase() method: "
				+ myString.toUpperCase()
				+ "<br> split method(this will split at a):"
				+ myString.split("a")
				+ "<br> toLowerCase()method:"
				+ myString.toLowerCase()
				+ "<br> search() method:"
				+ myString.search('a');
		return false;
	};
}());