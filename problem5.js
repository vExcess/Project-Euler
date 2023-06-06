var number = 0;

var result = 0;

var R = function(num1, num2){
    if(num1 % num2 === 0){
        return true;
    }
};

var isFound = function(num){
    if(R(num, 1)&&R(num, 2)&&R(num, 3)&&R(num, 4)&&R(num, 5)&&R(num, 6)&&R(num, 7)&&R(num, 8)&&R(num, 9)&&R(num, 10)&&R(num, 11)&&R(num, 12)&&R(num, 13)&&R(num, 14)&&R(num, 15)&&R(num, 16)&&R(num, 17)&&R(num, 18)&&R(num, 19)&&R(num, 20)){
        return true;
    }
};

frameRate(max);
draw = function() {
    if(result === 0){
        for(var i = 0; i < 1000000; i++){
            if(isFound(number+i) && result === 0){
                result = number+i;
            }
        }
        
        number += 1000000;
    }else{
        println(result);
    }
    background(255, 255, 255);
    
    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    text(number, 200, 50);
    text(result, 200, 100);
};
