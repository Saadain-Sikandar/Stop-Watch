var millsecheading = document.getElementById("millsec");
var secondsheading = document.getElementById("seconds");
var minheading = document.getElementById("minutes");
var hoursheading = document.getElementById("hours");
var strbtn = document.getElementById("startBtn");

var millsec = 0;
var sec = 0;
var min = 0;
var hour = 0;
var interval;


function watch(){

 millsec++;
 millsecheading.innerHTML = millsec;
 
 if(millsec>=100){

  sec++;
  secondsheading.innerHTML = sec;
  millsec = 0;
   

    if(sec>=60){

        min++;
        minheading.innerHTML = min;
        sec = 0 ;



        if(min>=60){

            hour++;
            hoursheading.innerHTML=hour;
            min = 0;


            }


        }


    }

}

function start(){


    interval = setInterval(watch,10);
    strbtn.disabled = true;
    strbtn.style.backgroundColor ="grey";


}


function stop(){
    
    clearInterval(interval);
    strbtn.disabled = false;
    strbtn.style.backgroundColor = "#007BFF";

}


function reset(){

    
 millsec = 0;
 sec = 0;
 min = 0;
 hour = 0;
 interval;



 hoursheading.innerHTML = hour;
 minheading.innerHTML = min;
 secondsheading.innerHTML = sec;
 millsecheading.innerHTML = millsec;

 stop();


}