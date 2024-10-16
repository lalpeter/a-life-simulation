const nodes = [500][500];

function letLive(x, y){
    let nbrs = 0;
    if (x != 0 && nodes[y][x-1] == 1){
        nbrs += 1;
    }
    if (x != 499 && nodes[y][x+1] == 1){
        nbrs += 1;
    }
    if (y != 0 && nodes[y-1][x] == 1){
        nbrs += 1;
    }
    if (y != 499 && nodes[y+1][x] == 1){
        nbrs += 1;
    }
    return 0
}

function run(){
    for(let y = 0; y < 500; y++){
        for(let x = 0; x < 500; x++){
            let px = nodes[y][x];
        }
    }
}

function draw(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 300, 300);
    // ctx.fillClear(0,0,500,500);
}
draw();