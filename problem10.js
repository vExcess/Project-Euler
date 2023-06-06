var number = 0;
var result = 0;

var searchNum = 2000000;
var gobyNum = 50000;

var prime = function(number) {
    for(var i = 2, j = sqrt(number); i < j; i++) {
        if(number % i === 0){
            return false;
        }
    }
    return true;
};

frameRate(max);
textAlign(CENTER);
textSize(20);
var draw = function(){
	background(255, 255, 255);
    
    fill(0, 0, 0);
    text(number, 200, 100);
    text(result.toFixed(0), 200, 125);
    text((number/searchNum*100).toFixed(3) + "%", 200, 150);
    text("FPS: " + round(this.__frameRate), 200, 175);
    text("Time Remaining: " + round((searchNum-number)/gobyNum/this.__frameRate/60) + " minutes", 200, 200);
    
    if(number < searchNum){
        for(var j = 0; j < gobyNum; j++){
            if(prime(number+j) && number+j < searchNum) {
                result += number+j;
            }
        }
        number += gobyNum;
    }else{
        println(result);
        noLoop();
    }

};
