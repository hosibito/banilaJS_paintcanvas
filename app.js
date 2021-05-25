const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPanting(){
    painting = false;
}

function onMouseUp(event){
    stopPanting();
}

function onMouseDown(event){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;   
}

if (canvas) {
    canvas.addEventListener("mousemove",onMouseMove );
    canvas.addEventListener("mousedown",onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPanting);
    
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