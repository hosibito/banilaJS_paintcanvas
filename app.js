const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700

canvas.height = CANVAS_SIZE;
canvas.width = CANVAS_SIZE;

ctx.fillStyle = 'white';
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;




let painting = false;
let filling = false;

function stopPanting(){
    painting = false;
}

function startPanting(event){
    console.log(event.button)
    if (event.button === 0){
        painting= true;        
    }
}

function onMouseMove(event){    
    const x = event.offsetX;
    const y = event.offsetY;   
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
        console.log(`${x},${y}, ${painting} `)
    }else{        
        ctx.lineTo(x,y); /* 이전 lineTo 포지션이랑 연결된다. */
        ctx.stroke();
        console.log(`${x},${y}, ${painting} `)
    }
}

function haneleColorClick(event){
    // console.log(event);
    // console.log(event.srcElement.style.backgroundColor);
    const color = event.target.style.backgroundColor;    
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    //console.log(event.target.value);
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "채우기";
    } else {
        filling = true;
        mode.innerText = "그리기";
    }
}

function handleCanversClick(){
    if(filling){
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);

    }
}

function handleCM(event){
    //console.log(event);
    event.preventDefault();
}

function handleSaveClick(){
    const image = canvas.toDataURL("image/jpeg");
    //console.log(image);
    const link = document.createElement("a");
    // link.download = image;
    // //console.log(link);
    // link.click();
    link.href = image;
    link.download = "PanitJS[EXPORT]";
    //console.log(link);
    link.click();

}

if (canvas) {
    canvas.addEventListener("mousemove",onMouseMove );
    canvas.addEventListener("mousedown",startPanting);
    canvas.addEventListener("mouseup", stopPanting);
    canvas.addEventListener("mouseleave", stopPanting);  
    canvas.addEventListener("click", handleCanversClick);  
    canvas.addEventListener("contextmenu" , handleCM); /* 마우스 오른클릭시 나타나는메뉴 */
}

//console.log(colors);
//Array.from(colors).forEach( (color) => console.log(color.style.backgroundColor));
Array.from(colors).forEach( (color) => color.addEventListener("click", haneleColorClick)   );


if (range){
    range.addEventListener("input", handleRangeChange)
}

if (mode){
    mode.addEventListener("click", handleModeClick)
}

if (saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}
// function onMouseMove(event){
//     const x = event.offsetX;
//     const y = event.offsetY;
//     console.log(x,y)  // 332 386
// }

// function onMouseMove(event){
//    console.log(event);
// }    콘솔에 표시된다. 이중 
//     MouseEvent {isTrusted: true, screenX: 1265, screenY: 446, clientX: 991, clientY: 147, …}
//     altKey: false
//     bubbles: true
//     button: 0
//     buttons: 0
//     cancelBubble: false
//     cancelable: true
//     clientX: 991
//     clientY: 147
//     composed: true
//     ctrlKey: false
//     currentTarget: null
//     defaultPrevented: false
//     detail: 0
//     eventPhase: 0
//     fromElement: null
//     isTrusted: true
//     layerX: 697
//     layerY: 97
//     metaKey: false
//     movementX: 2
//     movementY: -3
//     offsetX: 697  이거랑
//     offsetY: 97   이거 필요
//     pageX: 991
//     pageY: 147
//     path: (5) [canvas#jsCanvas.canvas, body, html, document, Window]
//     relatedTarget: null
//     returnValue: true
//     screenX: 1265
//     screenY: 446
//     shiftKey: false
//     sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
//     srcElement: canvas#jsCanvas.canvas
//     target: canvas#jsCanvas.canvas
//     timeStamp: 66411.73500008881
//     toElement: canvas#jsCanvas.canvas
//     type: "mousemove"
//     view: Window {window: Window, self: Window, document: document, name: "", location: Location, …}
//     which: 0
//     x: 991
//     y: 147
//     __proto__: MouseEvent