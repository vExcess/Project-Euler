var number1 = 999;

var stringResult = "";

var output = [];
var flippedOutput = [];

var result = 0;
var resultsArray = [];
var results = "";

var newNum1 = "";
var newNum2 = "";

var sorted = false;
var resultsStrungified = false;
var printed = false;

//setup some text stuff
textSize(20);
textAlign(CENTER);
frameRate(250);
draw = function() {
    background(255, 255, 255);
    if(number1 > 100){
        //multiply the 2 numbers
        for(var n2 = 999; n2 > 100; n2--){
            //find the results
            result = number1 * n2;
            
            //stringify the result
            stringResult = result.toString();
            
            //reset the variables
            output = [];
            flippedOutput = [];
            newNum1 = "";
            newNum2 = "";
            
            //seperate the digits into 2 arrays
            for (var i = 0, len = stringResult.length; i < len; i++) {
                output.push(stringResult.charAt(i));
                flippedOutput.push(stringResult.charAt(i));
            }
            
            //flip the flippedOutput array
            flippedOutput.reverse();
            
            //convert the arrays back into numbers
            for(var i = 0; i < output.length; i++){
                newNum1 += output[i];
                newNum2 += flippedOutput[i];
            }
            
            //detect if its a palindrome
            if(newNum1 === newNum2){
                resultsArray.push(newNum1);
            }
        }
        
        number1--;
    }else if(!sorted){
        resultsArray.sort(function(a, b) {
            return a - b;
        });
        
        sorted = true;
    }else if(!resultsStrungified){
        for(var i = 0; i < resultsArray.length; i++){
            results += ", "+resultsArray[i];
        }
        
        resultsStrungified = true;
    }else if(!printed){
        println("results: " + results);
        
        printed = true;
    }

    
    //some background stuff to ignore for now
    fill(0, 0, 0);
    text(number1, 200, 25);
    text("sorted: " + sorted, 200, 50);
    text("resultsStrungified: " + resultsStrungified, 200, 75);
    text("printed: " + printed, 200, 100);
    text(110-round((number1/999)*100) + "%", 200, 125);
    
    rect(50, 150, 300, 20);
    
    fill(4, 255, 0);
    rect(50, 150, 330-(number1/3.33), 20);
    
};

mouseReleased = function(){
    printed = false;
};


