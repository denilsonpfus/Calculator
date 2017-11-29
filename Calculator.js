

// FRONT-ENMD JAVESCRIPT, LEAVE AS-IS, RUNS ON THE BROWSER 
function run1() {document.getElementById("display").value += "1";} 
function run2() {document.getElementById("display").value += "2";}
function run3() {document.getElementById("display").value += "3";}
function run4() {document.getElementById("display").value += "4";}
function run5() {document.getElementById("display").value += "5";}
function run6() {document.getElementById("display").value += "6";}
function run7() {document.getElementById("display").value += "7";}
function run8() {document.getElementById("display").value += "8";}
function run9() {document.getElementById("display").value += "9";}
function run0() {document.getElementById("display").value += "0";}

function runPlus() {document.getElementById("display").value += "+";}
function runMinus() {document.getElementById("display").value += "-";}
function runMultiply() {document.getElementById("display").value += "*";}
function runDivide() {document.getElementById("display").value += "/";}
function runC() {document.getElementById("display").value = "";}
function runDot() {document.getElementById("display").value += ".";}



// THIS IS THE SERVICE THAT NEEDS TO GO TO THE BACKEND (DOCKER) //

// var x = document.getElementById("display").value;

// function callDockerEquals (x) {something heere;} <<<<<<<<<<<<<<<<<<<<<<<<<<

// below code becomes a service in Docker. The docker service will need the following images: NodeJS (npm), Express.JS, HTTP server, actual program logic, use port 8080, success code 200
function runEquals() {
	var chain = document.getElementById("display").value;
	var render = new XMLHttpRequest();
	render.onload = function() {
		if(render.status === 200) {
			document.getElementById("display").value = render.responseText;
		}
	};
	var link = "http://localhost:32770/";
	render.open('GET', link, true);
	render.setRequestHeader("Content-Type", "'Content-Type': 'text/plain'");
	render.send(chain);
}
