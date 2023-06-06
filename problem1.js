var threemultiples = [0];
var fivemultiples = [0];
var crossover = [0];
var number1 = 0;
var number2 = 0;
var number3 = 0;
var answer = 0;

for(var i = 1; i < 1000; i++){
if(i*3 < 1000){
    threemultiples.push(i*3);
}
}
for(var i = 1; i < 1000; i++){
if(i*5 < 1000){
    fivemultiples.push(i*5);
}
}
for(var i = 1; i < 1000; i++){
if(i*15 < 1000){
    crossover.push(i*15);
}
}   


for(var i = 0; i < threemultiples.length; i++){
number1 += threemultiples[i];
}
for(var i = 0; i < fivemultiples.length; i++){
number2 += fivemultiples[i];
}
for(var i = 0; i < crossover.length; i++){
number3 -= crossover[i];
}

answer = number1 + number2 - number3;

println("Multiples of 3:\n" + threemultiples + "\nMultiples of 5:\n" + fivemultiples + "\nCrossovers:\n" + crossover);
println("number1: " + number1);
println("number2: " + number2);
println("number3: " + number3);
println("Answer: " + answer);


