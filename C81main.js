
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth =2;
ctx.arc(50 , 200 , 30 , 0 ,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{

    color = document.getElementById("color").value;

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    circle();
}

function circle()
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth =2;
    ctx.arc(mouse_x , mouse_y , 30 , 0 ,2*Math.PI);
    ctx.stroke();
}
