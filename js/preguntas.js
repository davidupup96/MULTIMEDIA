var checkbox = false;
/*
var videoHalfWay=0;
var formatedHalfWay=0;




$(document).ready(function(){
    $.featherLight.default.afterClose=playPauseVideo;

    video1=$('$mainVideo')
    $('.box1').on('click',function(){
        playPauseVideo('.pregunta1');
    });
    $('.box2').on('click',function(){
        playPauseVideo('');
    });
});

function playPauseVideo(popup){
    if(mainVideo[0].paused){
        mainVideo[0].play();
    }else{
        mainVideo[0].pause();
    }
}*/

function iniciar() {
    bucle=setInterval(preguntaUno, 1);
    
}
function preguntaUno(){
    if(mainVideo.currentTime<6.9){
        document.getElementById('box4').style.display = 'none';
        document.getElementById('box5').style.display = 'none';
        document.getElementById('box6').style.display = 'none';
        document.getElementById('box7').style.display = 'none';
        document.getElementById('box8').style.display = 'none';
    }
    if(mainVideo.currentTime>7 &&  mainVideo.currentTime<7.1){ 
        
        document.getElementById('box4').style.display = 'block';
        document.getElementById('box5').style.display = 'block';
        document.getElementById('box6').style.display = 'block';
        document.getElementById('box7').style.display = 'block';
        document.getElementById('box8').style.display = 'block';
        mainVideo.currentTime=7; 
    }

    if (mainVideo.currentTime>7.2){
        
        document.getElementById('box4').style.display = 'none';
        document.getElementById('box5').style.display = 'none';
        document.getElementById('box6').style.display = 'none';
        document.getElementById('box7').style.display = 'none';
        document.getElementById('box8').style.display = 'none';
    }

    if(mainVideo.currentTime<59){
        document.getElementById('box1').style.display = 'none';
        document.getElementById('box2').style.display = 'none';
        document.getElementById('box3').style.display = 'none';
    }
    if(mainVideo.currentTime>59 &&  mainVideo.currentTime<68){ 
        mainVideo.pause();
        document.getElementById('box1').style.display = 'block';
        document.getElementById('box2').style.display = 'block';
        document.getElementById('box3').style.display = 'block';
        
        
    }
    if (mainVideo.currentTime>69){
        mainVideo.play();
        document.getElementById('box1').style.display = 'none';
        document.getElementById('box2').style.display = 'none';
        document.getElementById('box3').style.display = 'none';
    }
}

function ornitorrinco(){

    box3.addEventListener("click", mainVideo.currentTime=70);
}

function perryElOrnitorrinco(){
    box2.addEventListener("click", mainVideo.currentTime=74);
}
function correcta(){
    box5.addEventListener("click", mainVideo.currentTime=7.25);
}
function falsa(){
    box6.addEventListener("click", alert('te has equivocado'));
    box7.addEventListener("click", alert('te has equivocado'));
    box8.addEventListener("click", alert('te has equivocado'));
}
window.addEventListener('load', iniciar, false);
