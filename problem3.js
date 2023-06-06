var primeFactors = [];
var number = 0;

var prime = function(number) {
    for(var i = 2; i < sqrt(number); i++) {
        if(number % i === 0){
            return false;
        }
    }
    return true;
};

frameRate(max);
textAlign(CENTER);
textSize(20);

frameRate(250);
var draw = function(){
	background(255, 255, 255);
    
    
    fill(0, 0, 0);
    text(number, 300, 100);
    
    text(((number/775146)*100) + "%", 300, 150);
    
    fill(0, 0, 0);
    rect(50, 200, 500, 20);
    
    fill(4, 255, 0);
    rect(50, 200, (number/1551), 20);
    
    if(number <= 775146){
        for(var j = 0; j < 5000; j++){
            if(prime(number+j) && 600851475143 % (number+j) === 0) {
                primeFactors.push(number+j);
            }
        }
        
        number += 5000;
    }else{
        println(primeFactors);
        noLoop();
    }

};
