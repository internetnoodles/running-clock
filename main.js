function renderTime(){

    var mydate = new Date();
    var year = mydate.getFullYear();
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
    var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if(h==24){
            h=0;
        }
        else if(h>12){
            h=h-0;
        }

        if(h<10){
            h="0"+h;             //will show 01:20 instead of 1:20
        }
        if(m<10){
            m="0"+m;
        }
        if(s<10){
            s="0"+s;
        }

    var myClock = document.getElementById("clockDisplay");  //targeting div id of clockDisplay
    myClock.textContent = "" +dayarray[day]+ " " +montharray[month]+ " " +daym+ " " +year+ " | " +h+ ":" +m+ ":" +s;
    myClock.innerText = "" +dayarray[day]+ " " +montharray[month]+ " " +daym+ " " +year+ " | " +h+ ":" +m+ ":" +s;    

    //textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows “human-readable” elements.

    setTimeout("renderTime()", 1000); //every 1000ms (1sec) the function will be triggered and update the time
}

renderTime();

/*
function renderTime(){

    var today = new Date();
    var date = (today.getMonth()+1)+'-'+today.getDate()+"-"+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds(); 
    var midday = 'am'
        if (h>= 12){
            midday = 'pm'
        }
        
        if(h==24){
            h=12;
        }
        else if(h>12){
            h=h-12;
        }

        if(h<10){
            h = "0" + h;             //will show 01:20 instead of 1:20
        }
        if(m<10){
            m = "0" + m;
        }
        if (s<10){
            s = "0" + s;
        }


    var dayarray = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
    var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = "" + date + " | " +h+ ":" +m+ ":" +s + " " + midday;
    myClock.innerText = "" + date + " | " +h+ ":" +m+ ":" +s + " " + midday; 

    setTimeout("renderTime()", 1000);
}
renderTime();  */

//document.querySelector('html').onclick = 

