// Blinking subscribe message
let cx = document.querySelector("canvas").getContext("2d");
cx.font = "30px optima";
cx.fillStyle = "#F04902";
cx.margin = 0;
cx.fillText("SUBSCRIBE!", 70, 100);

/*index.html, CANVAS */

let flg=true;
function blink(){
if(flg){
document.querySelector("canvas").style.visibility="visible";
}else{
document.querySelector("canvas").style.visibility="hidden";
}
flg=!flg;
setTimeout(blink, 1000);
}
blink();
