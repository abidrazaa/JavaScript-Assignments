var timer;
function startWatch(){
    timer = setInterval(startTimer,1000)
}
var hours = 0;
var minutes = 0;
var seconds = 0;

function startTimer(){
    seconds+=1
    if(seconds==60){
        minutes+=1;
        seconds = 0;
    }
    if(minutes==60){
        hours+=1;
        minutes = 0;
    }
    // seconds = seconds<10 ? "0"+seconds : seconds;
    // hours = hours<10 ? "0"+hours : hours;
    // hours = hours<10 ? "0"+hours : hours;

    printTime()

    // hours = hours<10 ? hours.toString().length<2 ? "0"+hours : hours : hours;
    
}
function printTime(){

    document.getElementById("hours").innerHTML = hours + ":";
    document.getElementById("minutes").innerHTML = minutes+ ":"; 
    document.getElementById("seconds").innerHTML = seconds;
}

function reset(){
    hours=0;
    minutes=0;
    seconds=0;
    printTime()
    clearInterval(timer);
}
