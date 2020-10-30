window.onload = function() {
    alert("Function");
    document.getElementById('Mostrar Json').onclick = function () {
        alert("1")
        var mydata1 = JSON.parse(data.json);
        alert("2");
        Mostrar=document.getElementById('Mostrar Json');
        var mydata2 = JSON.parse(data.json);
        alert(mydata1);
    }
}

window.addEventListener('load',iniciar,false);