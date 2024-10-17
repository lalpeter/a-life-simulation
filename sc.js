const nodes = Array.from({ length: 512 }, () => Array(512).fill(0));
const nds = Array.from({ length: 512 }, () => Array(512).fill(0));

function letLive(x, y){
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],  // Top-left, top, top-right
        [0, -1],         [0, 1],      // Left,      , right
        [1, -1], [1, 0], [1, 1]       // Bottom-left, bottom, bottom-right
    ];
    let count = 0;
    const numRows = nodes.length;
    const numCols = nodes[0].length;
    directions.forEach(([dx, dy]) => {
        const newX = x + dx;
        const newY = y + dy;
        if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols) {
            if (nodes[newY][newX] == 1) {
                count++;
            }
        }
    });
    return count
}

function run(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.clearRect(0,0,512,512);
    for(let y = 0; y < 512; y++){
        for(let x = 0; x < 512; x++){
            const count = letLive(x, y);
            if(count == 3){
                nds[y][x] = 1;
            }
            else if(count == 2 && nodes[y][x] == 1){
                nds[y][x] = 1;
            }
            else{
                nds[y][x] = 0;
            }
        }
    }
   
    for(let y = 0; y < 512; y++){
        for(let x = 0; x < 512; x++){
            if(nds[y][x] == 1){
                ctx.fillRect(x, y, 1, 1);
            }
            nodes[y][x] = nds[y][x];
        }
    }
}

// CTRL + SHIFT + R

function load(pattern){
    const txtArr = pattern.split("\n");
    const h = txtArr.length;
    let w = 0;
    for (let str of txtArr) {
        if (str.length > w) {
            w = str.length;
        }
    }
    const x0 = parseInt(nodes[0].length/2) - parseInt(w/2);
    const y0 = parseInt(nodes.length/2) - parseInt(h/2);
    for(let y = y0; y < y0 + h; y++){
        for(let x = 0; x < x0 + w; x++){
            nodes[y][x] = (txtArr[y-y0].substring(x-x0,x-x0+1) == "O")? 1 : 0;
        }
    }
}

const usePattern = `................O...O
..........OO....O...O....OO
..........O.....O...O.....O
.......OO.O...............O.OO
......O.O.OO.............OO.O.O
......O.O......O.....O......O.O
....OO..O.....OOO...OOO.....O..OO
...O....OO.................OO....O
...OOOOO.....................OOOOO
.......O.....................O
.OOOO...........................OOOO
.O..O...........................O..O

...............OO...OO
......O.........O...O.........O
.....OO......O.........O......OO
OOO...O......OO.......OO......O...OOO



OOO...O......OO.......OO......O...OOO
.....OO......O.........O......OO
......O.........O...O.........O
...............OO...OO

.O..O...........................O..O
.OOOO...........................OOOO
.......O.....................O
...OOOOO.....................OOOOO
...O....OO.................OO....O
....OO..O.....OOO...OOO.....O..OO
......O.O......O.....O......O.O
......O.O.OO.............OO.O.O
.......OO.O...............O.OO
..........O.....O...O.....O
..........OO....O...O....OO
................O...O`;
load(usePattern);
setInterval(run, 100);