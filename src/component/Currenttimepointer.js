import React, { PropTypes } from 'react';
import styles from './Currenttimepointer.css'

function Currenttimepointer(props) {
    //var time = new Date();
//var thIndex=0;
//if (time.getHours() >=7){
//    thIndex=time.getHours()-6;
//    for (var i=2;i<=thIndex;i++){
//        document.getElementsByTagName('th')[i].classList.add('room-full');
//    }
//}
//var thElement = document.getElementsByTagName('th')[thIndex];
//var left = thElement.getBoundingClientRect().left+window.scrollX;
//var calcOffset= (thElement.clientWidth/60*time.getMinutes())+left;
//
//var lineBlock = document.getElementsByClassName('current-time')[0];
//lineBlock.style.height = document.getElementsByTagName('table')[0].clientHeight+"px";
//lineBlock.style.left=calcOffset+"px";
//
//var timeBlock= document.getElementsByClassName('cur-time')[0];
//timeBlock.style.left=calcOffset-timeBlock.clientWidth/2+"px";
//
//var mm = time.getMinutes();
//if (mm < 10) mm= '0' + mm;
//timeBlock.innerHTML=time.getHours() +":"+mm;

    var thIndex=0;
    var time=new Date();
    if (time.getHours() >=8){
   thIndex=time.getHours()-6;
//    for (var i=2;i<=thIndex;i++){
//        document.getElementsByTagName('th')[i].classList.add('room-full');
//    }
}
var firstEl = document.getElementById('first');
console.log(firstEl)
var left = firstEl.getBoundingClientRect().left+window.scrollX;
var calcOffset= (firstEl.clientWidth/60*time.getMinutes())+left;

var lineBlock = document.getElementsById('currenttimeline');
lineBlock.style.height = "400px";
lineBlock.style.left=calcOffset+"px";

var timeBlock= document.getElementsById('currenttime');
timeBlock.style.left=calcOffset-timeBlock.clientWidth/2+"px";

var mm = time.getMinutes();
if (mm < 10) mm= '0' + mm;
timeBlock.innerHTML=time.getHours() +":"+mm;
    return <div>
        <div id="currenttime" className={styles.currenttime}></div>
        <div id="currenttimeline" className={styles.currenttimeline}></div>
    </div>
}

export default Currenttimepointer