var global=true;
function iniciar() {
    bucle=setInterval(cronos, 1);
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
    
}
//esta funcion permite coger la url de youtube
/*function playYoutubeVideo(){
    var videoReemplazo = document.getElementById('miurl')
    var videoReproducido = document.getelementbyid('videoReproducido');
    var replacementUrl = videoReemplazo.getAttribute(value)
    videoReproducido.setAttribute('src', replacementUrl);
    
}*/
window.addEventListener('load', iniciar, false);

