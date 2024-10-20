const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

const INITIAL_COLOR = "#black";
//Must notice canvas size to draw ; stroke()
//canvas = <canvas id="jsCanvas" class="canvas" width="700" height="700">
//But, canvas.height=150  wtf??? width=300
//     canvas.offsetHeight=700   offsetWidth=700
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function startPainting() {
  painting = true;
}
function stopPainting() {
  painting = false;
}
function onMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(e) {
  ctx.strokeStyle = e.target.style.backgroundColor;
  ctx.fillStyle = ctx.strokeStyle;
}

function handleRange(e) {
  ctx.lineWidth = e.target.value;
}

function handleModeClick() {
  if (filling) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleCM(e) {
  e.preventDefault();
}

function handleSaveClick() {
  const img = canvas.toDataURL("image");
  console.log(img);
  const link = document.createElement("a"); //Make Link (HTML anchor)
  link.href = img; //URL
  link.download = "PaintJS save.png"; //File Name
  link.click(); //Follow link -> Download
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mousedown", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (save) {
  save.addEventListener("click", handleSaveClick);
}
