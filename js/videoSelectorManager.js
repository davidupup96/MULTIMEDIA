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


   /* playYoutubeVideo: function(replaceUrl){
        var videoUrl = document.getelementbyid('videoUrl');
        var replacementUrl = document.getElementById('miurl');
        videoUrl.setAttribute('src', replacementUrl);
        
             
    }*/

}


    
