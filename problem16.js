let arr = (2n**1000n).toString().split("").map(BigInt);
let sum = 0n;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
println(sum);
