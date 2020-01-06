const secondHand = document.querySelector(".secondHand");
const minuteHand = document.querySelector(".minHand");
const hourHand = document.querySelector(".hourHand");


function rotateHands(){
    let time = new Date();
    let second = time.getSeconds();
    let minute = time.getMinutes();
    let hour = time.getHours();
 
    let secondPos = second * 6;
    let minutePos = (minute * 6) + (second * 0.1);
    let hourPos = (hour * 30)+ (minute * 0.5) + (second * (1 / 120));

    secondHand.style.transform = "rotate(" + secondPos + "deg)";
    minuteHand.style.transform = "rotate(" + minutePos + "deg)";
    hourHand.style.transform = "rotate(" + hourPos + "deg)";
};


setInterval(rotateHands,1000);