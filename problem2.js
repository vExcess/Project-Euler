var fibonacciarray = [];
var fibonaccievens = [];

var answer = 0;

var arrayspace = 0;
var count = 2;

while(arrayspace < 4000000){
    if(arrayspace === 0){
        fibonacciarray.push(0+1);
    }
    if(arrayspace === 1){
        fibonacciarray.push(fibonacciarray[0]+1);
    }
    if(arrayspace === count){
        if(fibonacciarray[count-2]+fibonacciarray[count-1] <= 4000000){
            fibonacciarray.push(fibonacciarray[count-2]+fibonacciarray[count-1]);
            count++;
        }
    }
    arrayspace++;
}

for(var i = 0; i < fibonacciarray.length; i++){
    if (fibonacciarray[i] % 2 === 0) {
        fibonaccievens.push(fibonacciarray[i]);
        answer += fibonacciarray[i];
    }
}


println("\n\n"+fibonacciarray);
println(fibonaccievens);
println(answer);

