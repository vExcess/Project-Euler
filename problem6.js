var thing = [];
var result1 = 0;
var result2 = 0;

for(var i = 1; i < 101; i++){
    thing.push(i);
}

for(var i = 0; i < 100; i++){
    result1 += thing[i];
}

for(var i = 0; i < 100; i++){
    thing[i] = sq(thing[i]);
}

for(var i = 0; i < 100; i++){
    result2 += thing[i];
}

println(sq(result1)-result2);

