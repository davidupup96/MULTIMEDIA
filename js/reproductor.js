function iniciar() {
    maximo=600;
    // esto permite almacenar las variables usadas en HTML
    medio=document.getElementById('medio');
    reproducir=document.getElementById('reproducir');
    barra=document.getElementById('barra'); 
    progreso=document.getElementById('progreso');
   
    // esto permite escuchar los eventos que se realicen a lo largo de la interaccion
    
    barra.addEventListener('click', mover, false);

    //bucle=setInterval(asesina, 1100);
}

function presionar(){
    if(!medio.paused && !medio.ended) {
        medio.pause();
        reproducir.innerHTML='Reproducir';
        window.clearInterval(bucle);
    }else{
        medio.play();
        reproducir.innerHTML='Pausa';
        bucle=setInterval(estado, 1000);
    }
}

function estado(){
    if(!medio.ended){
        var total=parseInt(medio.currentTime*maximo/medio.duration);
        progreso.style.width=total+'px';
    }else{
        progreso.style.width='0px';
        reproducir.innerHTML='Reproducir';
        window.clearInterval(bucle);
    }
}

function mover(e){
    if(!medio.paused && !medio.ended){
        var ratonX=e.pageX-barra.offsetLeft;
        var nuevoTiempo=ratonX*medio.duration/maximo;
        medio.currentTime=nuevoTiempo;
        progreso.style.width=ratonX+'px';
    }
}

 function asesina(){
    if(medio.currentTime>3){
        medio.currentTime=medio.currentTime-1;
    }
 }
//esta funcion permite coger la url de youtube
 function youtube(){


 }

window.addEventListener('load', iniciar, false);
//como hacemos para añadir subtitulos,
