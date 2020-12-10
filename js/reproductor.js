var global=true;
function iniciar() {
    //Esto permite almacenar las variables usadas en HTML
    //medio=document.getElementById('mainVideo');
    //if(mainVideo.currentTime>2){
    //mainVideo.currentTime=0;
    //}
   
    //con esta funcion ejecuta un bucle eterno
    
    bucle=setInterval(cronos, 1);
    //clearInterval(bucle);
}
function cronos(){
    if(global==true){
        if(mainVideo.currentTime>1.5){
        mainVideo.currentTime=0.5;
        }

    }
}
function asesina(){
    global=false;
    //mainVideo.currentTime=3;
}
//esta funcion permite coger la url de youtube
/*function playYoutubeVideo(){
    var videoReemplazo = document.getElementById('miurl')
    var videoReproducido = document.getelementbyid('videoReproducido');
    var replacementUrl = videoReemplazo.getAttribute(value)
    videoReproducido.setAttribute('src', replacementUrl);
    
}*/
window.addEventListener('load', iniciar, false);
//como hacemos para añadir subtitulos,
