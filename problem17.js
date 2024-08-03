let words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];

function wordify(n, inHundreds=false) {
    // println("W: " + n)
    let chars = n.toString();
    let out = "";

    if (n >= 1000) {
        out += words[chars[0]] + " thousand";

        if (n % 1000 !== 0) {
            out += " and ";
        }

        n -= floor(n / 100) * 100;
        inHundreds = true;
    } else if (n >= 100) {
        out += words[chars[0]] + " hundred";

        if (n % 100 !== 0) {
            out += " and ";
        }

        n -= floor(n / 100) * 100;
        inHundreds = true;
    }

    if (n < 20) {
        if (!(n === 0 && inHundreds)) {
            out += words[n];
        }
    } else{
        // println(n)
        let tens = n < 100 && (!inHundreds || n !== 0) ? words[18 + floor(n / 10)] : "";
        let ones = "";
        if (!chars.endsWith("0")) {
            ones = (inHundreds ? "-" : (n < 100 ? "-" : " and ")) + wordify(Number(chars.split("").reverse()[0]), inHundreds);
        }
        out += (!ones.startsWith(tens) ? tens : "---") + ones;
    }

    return out;
}

let sum = 0;
for (let i = 1; i <= 1000; i++) {
    sum += wordify(i).replaceAll(" ", "").replaceAll("-", "").length;
}
console.log(sum);
