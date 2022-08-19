// select chart element
const chart=document.querySelector(".chart");

//create canvas element
const canvas=document.createElement("canvas")
canvas.width=50;
canvas.height=50;
//append canvas to chart
chart.appendChild(canvas);

//to draw on canvas,we need to get context of canvas
const ctx=canvas.getContext("2d");

//change the line width
ctx.lineWidth=8;

// radius
const r=20;

function drawCircle(color,ratio,anticlockwise) {
    ctx.strokeStyle=color;
    ctx.beginPath();
    ctx.arc(canvas.width/2,canvas.height/2,r,0,ratio*2*Math.PI,anticlockwise)
    ctx.stroke();
}

function updateChart(income,outcome) {
    ratio=income/(income-outcome);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircle("#fff",ratio,true);
    drawCircle("#f0624D",ratio-1,false)

}
