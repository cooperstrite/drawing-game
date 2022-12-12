import './style.css'

let app : HTMLCanvasElement = document.querySelector('#app');
app.style = "border: 5px solid white"

const ctx = app.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(500, 500, 100, 100);