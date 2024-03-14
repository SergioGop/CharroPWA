
window.addEventListener('load', () => {
    const imagen = document.querySelector('.imagen');
    const alturaVH = window.innerHeight * 0.01;
    imagen.style.minHeight = `${window.innerHeight}px`;
  });


  $(document).ready(function() {
    $("#sidebarToggle").click(function() {
      showOverlay();
    });
  });

  $('#closeOverlay').click(function(event) {
    hideOverlay();
  });

  $('a').click(function(event) {
    event.preventDefault();
    
    var buttonClicked = event.currentTarget.innerHTML;

    if(buttonClicked == "Descargar PC"){
        hideOverlay();
    }

    if(buttonClicked == "Inicio"){
        hideOverlay();
        $("#contenido-dinamico").load("paginas/historia.html");
    }

    if(buttonClicked == "Estadisticas"){
        hideOverlay();
    }

  });

  var audio = new Audio("assets/sounds/sound.mp3");

  audio.volume = 0.03;

  audio.play();


//Cargar Service Worker
if('serviceWorker' in navigator) 
{
    console.log("Puedes usar el Service Worker");
    //configuración del SW
    navigator.serviceWorker.register('./sw.js')
                            .then(res=>console.log('SW cargado correctamente',res))
                            .catch(err => console.log('service Worker no se ha podido registrar',err));
}   
else
{
    console.log("No se puede usar el Service Worker");
}