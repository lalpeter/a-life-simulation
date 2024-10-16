const nodes = [500][500];
const nds = [500][500];
// for(let y = 0; y < 500; y++){
//     for(let x = 0; x < 500; x++){
//         nodes[y][x]=1;nds[y][x]=1;
//     }
// }

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
    if(nbrs<2 || nbrs >3){
        return 0;
    }
    else{
        return 1;
    }
}

function run(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(100, 100, 300, 300);
    // ctx.fillClear(0,0,500,500);
    // for(let y = 0; y < 500; y++){
    //     for(let x = 0; x < 500; x++){
    //         const alive = letLive(x, y);
    //         nds[y][x] = alive;
    //     }
    // }
    // for(let y = 0; y < 500; y++){
    //     for(let x = 0; x < 500; x++){
    //         // nodes[y][x] = nds[y][x];
    //         if(nodes[y][x] == 1){
    //             ctx.fillRect(x, y, 1, 1);
    //         }
    //     }
    // }
}

function draw(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 300, 300);
    // ctx.fillClear(0,0,500,500);
}
// CTRL + SHIFT + R
nodes[250][250] = 1;
nodes[251][250] = 1;
nodes[249][250] = 1;
// draw();
// setInterval(run, 100);
run();