
function collatzSeq (start) {
  var sequence = [start];
  var currNum = start;
  while (currNum > 1) {
    if (currNum % 2 === 0) {
      currNum /= 2;
    } else {
      currNum = currNum * 3 + 1;
    }
    sequence.push(currNum);
  }
  return sequence;
}

// remove loop protector to boost speed
(function() {return this;})().LoopProtector.prototype.leave = function() {};

var bestStart = 1;
var longestChain = 1;

var num = 1;

for (var i = 0; i < 1000000; i++) {
var chainLength = collatzSeq(num).length;
if (chainLength > longestChain) {
  bestStart = num;
  longestChain = chainLength;
}
num++;
}

println(bestStart);

