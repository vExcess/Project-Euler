let i = 0;
let str = "";
while (str.length <= 1000000) {
    str += i++;
}
let d = n => Number(str.charAt(n));
println(d(1) * d(10) * d(100) * d(1000) * d(10000) * d(100000) * d(1000000));
