// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
var dolphins = [96, 108, 89];
var koalas = [88, 91, 110];

var dolphins2 = [97, 112, 101];
var koalas2 = [109, 95, 123];

var dolphins3 = [97, 112, 101];
var koalas3 = [109, 95, 106];

Array.prototype.average = function(){
    var sum = 0;
    for(var i = 0; i < this.length; i++){
        sum += this[i];
    }
    return sum / this.length;
}

var dolphinsAverage = dolphins3.average();
var koalasAverage = koalas3.average();


var result = "";
if(dolphinsAverage == koalasAverage && dolphinsAverage >= 100){
    result = "Dolphins and Koalas are draw";
}else if(dolphinsAverage > koalasAverage && dolphinsAverage >= 100){
    result = `Dolphins won with an average score of ${dolphinsAverage}`;
}else if(dolphinsAverage < koalasAverage && koalasAverage >= 100){
    result = `Koalas won with an average score of ${koalasAverage}`;
}else{
    result = "No one wins";
}
console.log(result);