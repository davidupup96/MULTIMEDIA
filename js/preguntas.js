
$(document).ready(function(){

    video1=$('#video1');
    $('.box1').on('click',function(){
        playpausevideo('.Pregunta1');
    });
    $('.box2').on('click',function(){
        playpausevideo('.Pregunta1');
    });
});

function playpausevideo(texto){
    if(video1[0].paused){
        video[0].play();
    }else{
        video1[0].paused();
        $.featherlight($(texto));
    }

}