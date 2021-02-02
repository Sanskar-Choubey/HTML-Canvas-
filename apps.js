const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 80;

var lastX = 0;
var lastY = 0;
var hue = 0;

let direction = 0;
let isDrawing = false;

function draw(event) {
    if(!isDrawing)
        return

    ctx.strokeStyle = `hsl(${hue} 100% 50%)`
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();

    [lastX,lastY] = [event.offsetX,event.offsetY];
    hue++;
    if(hue >= 360){
        hue = 0;
    }

    if(ctx.lineWidth >=100 || ctx.lineWidth <= 1){
        direction = !direction;
    }

    // if(direction){
    //     ctx.lineWidth++;
    // }else{
    //     ctx.lineWidth--;
    // }
      
}

canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mousedown',(event) => {
    isDrawing = true;
    [lastX,lastY] = [event.offsetX,event.offsetY]; //this is added to increment the value of lastX and lastY in order to update the initial point
});
canvas.addEventListener('mouseup',() => isDrawing = false);
canvas.addEventListener('mouseout',() => isDrawing = false);