var canvas = document.querySelector("canvas");

var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var red = Math.floor(Math.random() * 255);
var green = Math.floor(Math.random() * 255);
var blue = Math.floor(Math.random() * 255);


ctx.fillStyle = "red";
ctx.beginPath();

var particle = [];


var create = function () {
    
    var p = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 15,
        xVel: (Math.random() - 0.5),
        yVel: (Math.random() - 0.5),
    color: "rgb(" + red + "," + green + "," + blue + ")",
};

particle.push(p);
    
};



function draw (){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    
    particle.forEach(function (p){
    
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

}
    
    
)};

var move = function() {
   
    particle.forEach(function (p){
        
    p.x += p.xVel;
    p.y += p.yVel;
        
    });
    
};

var fade = function ()
 {
     
    particle.forEach(function (p){
        
    p.radius *= 0.99;
        
    });
    
};


var loop = function () {
    
    create();
    fade();
    move();
    draw();
    
    window.requestAnimationFrame(loop);
}

loop();

