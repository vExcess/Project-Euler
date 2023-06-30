// jshint ignore: start
let start = performance.now();
let primeFactors = [];
let sqrt = Math.sqrt;
for (let num = 4, stop = sqrt(600851475143); num < stop; num++) {
    if (600851475143 % num === 0) {
        let i = 5;
        let is_prime = true;
        let sqNum = sqrt(num);
        while (i <= sqNum) {
            if (num % i === 0 || num % (i + 2) === 0) {
                is_prime = false;
                break;
            }
            i += 6;
        }
        if (is_prime) primeFactors.push(num);
    }
}
let end = performance.now();
console.log(primeFactors.slice(-1)[0], (end - start) + "ms")
