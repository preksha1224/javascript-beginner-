const cars = ["BMW", "Volvo", "Mini"];

document.writeln("<ol> Cars are: </o>");

for (const car of cars) {
  document.writeln("<li>" + car + "</li>");
}

const person = { fname: "John", lname: "Doe", age: 25 };

for (const key in person) {
  document.writeln("<p>" + key + ": " + person[key] + "</p>");
}
