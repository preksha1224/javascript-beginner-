const person={}

function tryText() {
	  person.name = "Preksha";
 console.log(person.name);
    document.getElementById("output").innerHTML += "<p>Name: " + person.name + "</p>";
//  document.writeln("Name: " + person.name);
}

function tryText1() {
	  person.city = "Vadodara";
 console.log(person.city);
 document.getElementById("output1").innerHTML += "<p>City: " + person.city + "</p>";
}

function tryText2() {
	  person.phone = "7490945369";
 console.log(person.phone);
document.getElementById("output2").innerHTML += "<p>Phone: " + person.phone + "</p>";
}

function tryText3(){
	  person.address = "SignetHub";
 console.log(person.address);
document.getElementById("output3").innerHTML += "<p>Address: " + person.address + "</p>";
}

function tryText4() {
person.email = "pp@4f0.de";
 console.log(person.email);
document.getElementById("output4").innerHTML += "<p>Email: " + person.email + "</p>";
}