
var hours;
var seconds;
var minutes;
var stopped;


function converter(){
    var duration = parseInt(prompt("Enter timer value in seconds: "))

    if(duration<3600 && duration != 0){
        hours = 0;
    }else{
        hours = Math.floor(duration/3600)    
    }

    minutes = Math.floor((duration - hours*3600)/60);
    seconds = duration - hours * 3600 - minutes * 60;

}

function start(){
    clearInterval(stopped)
    converter()
    stopped = setInterval(main,1000)
}

function main(){
    if(hours == 0 && minutes == 0 && seconds == 1){
        clearInterval(stopped)
    }

    if(seconds>0){
        seconds--
    }else if(seconds == 0){
        minutes--;
        seconds = 59;
    }

    if(minutes==0 && seconds==0 && hours>0){
        hours--;
        minutes = 59;
    }

    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
}



// start()