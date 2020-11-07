/*window.onload = function() {
    alert("Bienvenido");
    document.getElementById('Mostrar Json').onclick = function () {
        alert("1")
        var mydata1 = JSON.parse(data.json);
        alert("2");
        Mostrar=document.getElementById('Mostrar Json');
        var mydata2 = JSON.parse(data.json);
        alert(mydata1);
    }
}

window.addEventListener('load',iniciar,false);*/
function iniciar() {
    maximo=600;
    // esto permite almacenar los 
    medio=document.getElementById('medio');
    reproducir=document.getElementById('reproducir');
    barra=document.getElementById('barra'); 
    progreso=document.getElementById('progreso');

    reproducir.addEventListener('click', presionar, false);
    barra.addEventListener('click', mover, false);
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
   
