// alert('External JavaScript Works!');

window.addEventListener("load", dofirst);
// These are a set of eventListeners that waits for the user's action to excute the functions
function dofirst() {
	document.getElementById("btnCheck").addEventListener("click", checkValue);
	document.getElementById("btnLoop").addEventListener("click", loopValue);
	document.getElementById("btnCheckName").addEventListener("click", nameInput);
	}
// This function gives a condition if the numerical value is within their ranges
function checkValue() {
	var testVar;
	testVar = document.getElementById("txtA").value;
	if (testVar > 100){
		document.getElementById("answer").innerHTML = testVar + ' is greater than 100';
		}
	else if (testVar > 50) {
		document.getElementById("answer").innerHTML = testVar + ' is greater than 50';
		}
	else {
		document.getElementById("answer").innerHTML = testVar + ' is less than 50';
		}
	}	
// This function uses a loop "while" to create a number of buttons specified by the user
function loopValue() {
	var i = 1;
	var buttonsHTML = "";
	var testVar;
	testVar = document.getElementById("txtB").value;
	while (i <= testVar) {
		buttonsHTML = buttonsHTML + '<div id="container"><h1>' + i + '</h1></div>'; i++
		};
	document.getElementById("buttons").innerHTML = buttonsHTML;
	}
	
//This function prints a string of the user's input with a time-based greeting
function nameInput() {
	var firstName = document.getElementById("textFirstName").value;
	var middleName = document.getElementById("textMiddleName").value;
	var lastName = document.getElementById("textLastName").value;
	var fullName;
	var greetings;
    var time = new Date().getHours();
	if (time < 12) {
		greetings = "Good morning";
		}
	else if (time < 18) {
		greetings = "Good afternoon";
		} 
	else {
		greetings = "Good evening";
		}
	fullName = greetings + "," + "&nbsp;" + firstName + "&nbsp;" + middleName + "&nbsp;" + lastName + ".";	
	document.getElementById("textFullName").innerHTML = fullName;
	}

