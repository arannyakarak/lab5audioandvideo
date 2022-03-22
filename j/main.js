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

const vid = document.querySelector("#vid");

document.addEventListener("DOMContentLoaded", (e) => {

    var myCues = [
        { seconds: 5, callback: func1 },
        { seconds: 11, callback: func2 },
        { seconds: 21, callback: func3 },
        { seconds: 27, callback: func4 },
        { seconds: 36, callback: func5 }
    ];

    //this activates the cuepoints module.
    // Pass it the ID of the video to watch
    // and the array of cuepoint objects.
    cueTimer.setup("vid", myCues);

    //shortcut variables
    
    const selectList = document.querySelector("#video_select");
    
    // make the select list control what video format to play
    // selectList.addEventListener("change", (e) => {
    //     selectVideo(e, vid);
    // });

});
////video control buttons
const myplay = document.getElementById('myplay');
const mypause = document.getElementById('mypause');
const slo = document.getElementById('slo');
const normalSpeed = document.getElementById('normalSpeed');

//add event listners for controls
myplay.addEventListener('click', (e) => {
    vid.play();
});

mypause.addEventListener('click', (e) => {
    vid.pause();
});

slo.addEventListener('click', (e) => {
    vid.playbackRate = 0.25;
});

normalSpeed.addEventListener('click', (e) => {
    vid.playbackRate = 1;
});
//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks
//feel free to rename the functions to be more descriptive of what they do.
function func1() {
    document.querySelector("#web").src = "images/flag.jpg";
}

function func2() {
    document.body.style.backgroundImage = "url('images/background2.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.backgroundPosition="center"; 
    document.body.style.color = "black";

    setTimeout(() => {
        document.querySelector("#web").src = "images/info6.jpg";
    }, 2000); 

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

    document.querySelector("#web").src = "assets/About Bharatanatyam.mp4";
    document.querySelector("#web").style.borderRadius = "5px";
}

function func4() {
   
    document.body.style.backgroundImage = "url('images/vishnu.jpg')";
    document.body.style.backgroundPosition="center";
    document.body.style.color = "white";
    document.querySelector("#vid").style = "border: 10px solid white";

    }

function func5() {
    document.querySelector("#web").src =
    "https://en.wikipedia.org/wiki/Bharatanatyam";
    document.querySelector("body").style = "background-image: linear-gradient(orange, white, green);";
    // document.querySelector("body").style = "background-image: url('images/cover.jpg');"
    document.querySelector("#web").style.borderRadius = "2px";
    document.querySelector("#vid").style = "border: 10px solid orange";
    // document.querySelector(".btn").style = "border: 2px solid orange";
    myplay.style = "border: 2px solid orange";
    mypause.style = "border: 2px solid orange";
    slo.style = "border: 2px solid orange";
    normalSpeed.style = "border: 2px solid orange";

    }
