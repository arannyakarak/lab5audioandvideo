/**
 * main.js
 * The init script for this HTML5 Video Application
 * This app is used as a demo for creating a video application utilizing the video API
 * built into HTML5. It is inspired by Bruce Lawson's example hack for creating video captions.
 * I added the ability to associate custom callbacks with moments in time of the video.
 *
 * 
 * @NOTE: Mozilla released Popcorn and Butter for doing the same thing right after I got this working.
 * @UPDATE: Popcorn and Butter are dead. This is now useful again. I've updated it to be vanilla JS 
 * with no dependencies. by Troy Bennett 7-2010 (updated 12-2021)
 */

import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", (e) => {

    var myCues = [
        { seconds: 5, callback: func1 },
        { seconds: 11, callback: func2 },
        { seconds: 21, callback: func3 },
        { seconds: 27, callback: func4 }
    ];

    //this activates the cuepoints module.
    // Pass it the ID of the video to watch
    // and the array of cuepoint objects.
    cueTimer.setup("vid", myCues);

    //shortcut variables
    const vid = document.querySelector("#vid");
    const selectList = document.querySelector("#video_select");
    
    // make the select list control what video format to play
    selectList.addEventListener("change", (e) => {
        selectVideo(e, vid);
    });

});
// var vid = document.getElementById("#vid"); 
function playVid() { 
    vid.play(); 
  } 
  
  function pauseVid() { 
    vid.pause(); 
  } 
//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks
//feel free to rename the functions to be more descriptive of what they do.
function func1() {
    document.querySelector("#web").src = "images/flag.jpg";
    
   
    document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.filter= "blur(5px)";
}

function func2() {
    document.querySelector("#web").src = "images/info6.jpg"; 
    document.body.style.backgroundImage = "url('images/background2.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition="center"; 
    document.body.style.color = "black";
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Mahishasura Mardini Stotram</p>";
    document.querySelector(".pop").classList.toggle("hide");
    
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000); 
}

function func3() {
    const vid = document.querySelector("#vid");

    vid.pause();

    setTimeout(() => {
        vid.play();
        document.querySelector("#web").src = "";
    }, 36000);


    document.querySelector("#web").src =
        "assets/About Bharatanatyam.mp4";
        
        document.querySelector("#web").style.borderRadius = "5px";
}

function func4() {
    document.querySelector("#web").src =
    "https://en.wikipedia.org/wiki/Bharatanatyam";
    document.querySelector("body").style = "background-image: linear-gradient(orange, white, green);";
    // document.querySelector("body").style = "background-image: url('images/cover.jpg');"
    document.querySelector("#web").style.borderRadius = "2px";

    }


