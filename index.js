//import './animate.css';


let cx = document.querySelector("canvas").getContext("2d");
cx.font = "30px optima";
cx.fillStyle = "red";
cx.textAlign = "left";
cx.fillText("SUBSCRIBE!", 70, 30);
/*index.html, CANVAS */

let flg=true;
function blink(){
if(flg){
document.querySelector("canvas").style.visibility="visible";
}else{
document.querySelector("canvas").style.visibility="hidden";
}
flg=!flg;
setTimeout(blink,777);
}
blink();
