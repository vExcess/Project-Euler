frameRate(max);

var a = 1,
    b = 2,
    c = 0;

var searchNum = 1000;

draw = function() {
    for (var j = 0; j < 100000; j++) {
        c = sqrt(sq(a) + sq(b));
        
        if(b > c){
            b = c-1;
        }
        if(a > b){
            a = b-1;
        }
        
        c = sqrt(sq(a) + sq(b));
        
        if(a < b){
            a++;
            c = sqrt(sq(a) + sq(b));
        }else{
            b++;
            a = 0;
        }
        
        if(a+b+c > searchNum){
            b++;
            a = 0;
        }
        
        if(a+b+c === searchNum){
            println(a*b*c);
        }
    }
    
    
    background(255, 255, 255);
    textSize(20);
    fill(0, 0, 0);
    text(a, 100, 100);
    text(b, 100, 150);
    text(c, 100, 200);
    text(a+b+c, 100, 250);
    text(a*b*c, 100, 300);
    
};
