// Blinking subscribe message
let cx = document.querySelector("canvas").getContext("2d");
cx.font = "30px optima";
cx.fillStyle = "#F04902";
cx.margin = 0;
cx.fillText("SUBSCRIBE!", 70, 100);

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
blink(); // Blinking subscribe message end.

//Accept cookie by Vue.js
var app = new Vue({
    el: '#app',
    data(){
      return {
          message: 'Hello!',
          isHidden: false,
      }
    },
    
    methods: {
        acceptCookie() {
          this.isHidden = true; 
          // console.log('click cookie button!!');
          // alert("Thank you !!😃");
        },

        // hello(){
        //   console.log('click cookie button!!');
        //   alert("Thank you !!😃");
        // }
    },
 });

 //Green sock animation
 gsap.from("header", {duration: 3, x: "-100%", ease: 'bounce'})
//about us animation
 gsap.from(".about-us-item", {duration: 4, opacity:0, delay: 1, stagger: .5})


