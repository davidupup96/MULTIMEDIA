videoSelectoManagerJS={


    playThisVideo: function(replaceVideoId) {//inicializa funcion con un id que le pasamos
        //guarda el elemento del video que esta mostrando
        var mainVideo = document.getElementById("mainVideo");
        //guarda el elemento del video que queremos reemplazar
        var replacementVideo = document.getElementById(replaceVideoId);
        //sacamos src de nuevo video seleccionado
        var srcReplaceVideo = replacementVideo.src;
        //cambia el src al nuevo video
        mainVideo.setAttribute('src', srcReplaceVideo);
    }


}
urlSelectorManagerJS={
    playYoutubeVideo: function(){
        var videoReemplazo = document.getElementById('miurl')
        var videoReproducido = document.getelementbyid('videoReproducido');
        var replacementUrl = videoReemplazo.getAttribute(value)
        videoReproducido.setAttribute('src', replacementUrl);
    }
}


    
