if (Process.loopProtectionEnabled) {
    Process.loopProtectionEnabled = false;
    Process.restart();
}

function factorial(n) {
    let product = n;
    for (let i = n - 1; i > 0; i--) {
        product *= i;
    }
    return product;
}

function nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function nPr(n, r) {
    return factorial(n) / factorial(n - r);
}

function calcNumPaths(gridSize) {
    let ways = [[1,0], [0,1]];
    let numMoves = gridSize * 2;
    
    for (let j = 0; j < numMoves - 1; j++) {
        for (let i = 0, l = ways.length; i < l; i++) {
            let path = ways[i];
            ways.push([path[0] + 1, path[1]]);
            path[1]++;
        }
    }
    
    let num = 0;
    for (let j = 0; j < ways.length; j++) {
        if (ways[j][0] === ways[j][1]) num++;
    }
    
    return num;
}

// println(calcNumPaths(12));
