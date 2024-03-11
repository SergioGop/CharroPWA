
// document.addEventListener("DOMContentLoaded", function () {
//     // var imagenes = ["assets/image/imagen-1.webp", "assets/image/imagen-2.webp", "assets/image/imagen-3.webp"]; // Lista de rutas de las imágenes
//     var imagenes = ["assets/image/imagen-1.webp"]; // Lista de rutas de las imágenes
//     var indiceImagen = 0; // Índice de la imagen actual

//     var imagenElement = document.getElementById("imagen");

//     setInterval(function () {
//         // Cambiar la imagen
//         indiceImagen = (indiceImagen + 1) % imagenes.length;

//         // Ocultar la imagen actual
//         imagenElement.classList.add("oculto");

//         // Esperar un poco para que se complete la transición
//         setTimeout(function () {
//             imagenElement.src = imagenes[indiceImagen];
//             // Mostrar la nueva imagen
//             imagenElement.classList.remove("oculto");
//         }, 500); // Tiempo de espera igual a la mitad de la duración de la transición
//     }, 5000); // Cambia la imagen cada 5 segundos (5000 milisegundos)

//     // Función para desplegar el sidebar
//     document.getElementById('sidebarToggle').addEventListener('click', function () {
//         var sidebar = document.getElementById('sidebar');
//         if (sidebar.style.right === '-250px') {
//             sidebar.style.right = '0';
//         } else {
//             sidebar.style.right = '-250px';
//         }
//     });
// });

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