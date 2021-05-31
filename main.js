mouseEvent="";
var last_x,last_y;
  

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
currentX=e.clientX-canvas.offsetLeft;
currentY=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.moveTo(last_x,last_y);
ctx.lineTo(currentX,currentY);
ctx.stroke();
}
last_x=currentX;
last_y=currentY;
}