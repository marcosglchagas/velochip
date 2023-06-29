var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.fillStyle = "FF0000";

canvas.onpointerdown = function(event){
    context.fillRect(event.layerX, event.layerY,5, 5);
}
canvas.onpointerup = function(event){
    context.fillRect(event.layerX, event.layerY,5, 5);
};

canvas.onpointermove = function(event){
    context.fillRect(event.layerX, event.layerY,5, 5);
};
