// jshint ignore: start
if (Process.loopProtectionEnabled) {
    Process.loopProtectionEnabled = false;
    Process.restart();
}

function calcNumPaths(gridSize) {
    let ways = [[1,0], [0,1]];
    let numMoves = gridSize * 2;
    
    for (let j = 0; j < numMoves - 1; j++) {
        for (let i = 0, l = ways.length; i < l; i++) {
            ways.push([ways[i][0] + 1, ways[i][1]]);
            ways[i][1]++;
        }
    }
    
    let num = 0;
    for (let j = 0; j < ways.length; j++) {
        if (ways[j][0] === ways[j][1]) num++;
    }
    
    return num;
}

println(calcNumPaths(12));


