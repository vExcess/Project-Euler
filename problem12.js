function nTriangleNumber (n) {
  var num = 0;
  for (var i = 0; i < n + 1; i++) {
    num += i;
  }
  return num;
}

function calcFactors (num) {
  var factors = [1, num];
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

// remove loop protector to boost speed
(function() {return this;})().LoopProtector.prototype.leave = function() {};

var num = 6000;
var maxFactors = 0;
var answerFound = false;

draw = function () {
  var currLen = calcFactors(nTriangleNumber(num)).length;
  
  if (!answerFound && currLen < 500) {
    num++;
    
    if (currLen > maxFactors) {
      maxFactors = currLen;
    }
  } else {
    answerFound = true;
    println(nTriangleNumber(num));
    noLoop();
  }
  
  background(255, 255, 255);
  
  fill(0, 0, 0);
  
  textSize(20);
  textAlign(CENTER);
  text("Curr Num: " + num, 200, 30);
  text("Max Factors: " + maxFactors, 200, 59);
  text("FPS: " + this.__frameRate, 200, 89);
  
  rect(50, 100, 300, 20);
  
  fill(4, 255, 0);
  rect(50, 100, (maxFactors / 500) * 300, 20);
  
};





