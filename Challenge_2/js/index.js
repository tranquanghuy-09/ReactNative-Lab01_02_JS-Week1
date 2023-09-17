// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"


var mark = {
    mass: 78,
    height: 1.69,
}
var john = {
    mass: 92,
    height: 1.95,
}

var mark2 = {
    mass: 95,
    height: 1.88,
}
var john2 = {
    mass: 85,
    height: 1.76,
}

function calculateBMI(mass, height){
    return mass / height ** 2;
}

var markBMI = calculateBMI(mark.mass, mark.height);
var johnBMI = calculateBMI(john.mass, john.height);
// var markBMI = calculateBMI(mark2.mass, mark2.height);
// var johnBMI = calculateBMI(john2.mass, john2.height);

var markHigherBMI = markBMI > johnBMI;
var result1 = "";
var result2 = "";

if(markHigherBMI){
    result1 = "Mark's BMI is higher than John's!";
    result2 = `Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`
}else{
    result1 = "John's BMI is higher than Mark's!";
    result2 = `John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`
}
console.log(result1);
console.log(result2);