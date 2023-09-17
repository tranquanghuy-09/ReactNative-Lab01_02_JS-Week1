// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

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
var result = "";

if(markHigherBMI){
    result = `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`;
}else{
    result = `John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`;
}
console.log(result);