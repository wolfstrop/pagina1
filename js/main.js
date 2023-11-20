window.addEventListener("load", function(){
    this.document.getElementById("loader").classList.toggle("loader2")
})

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=> {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
})


//modal
function abrirModal(idModal, event) {
  // Obtener las coordenadas del clic
  //var x = event.clientX || event.pageX;
  //var y = event.clientY || event.pageY;

  // Obtener la ventana modal
  var modal = document.getElementById(idModal);


  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var topPosition = scrollTop + window.innerHeight / 2;
  // Posicionar la ventana modal en las coordenadas del clic
  //modal.style.top = y + 'px';
  //modal.style.left = x + 'px';

  modal.style.top = Math.max(topPosition, window.innerHeight / 2) + 'px';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';


  // Mostrar la ventana modal
  modal.style.display = 'block';

  window.onclick = function(event) {
    if (event.target === modal) {
      cerrarModal(idModal);
    }
  };
}

function cerrarModal(idModal) {
  var modal = document.getElementById(idModal);
  modal.style.display = 'none';

  window.onclick = null;
}

//LINEA DE TIEMPO
window.addEventListener('scroll', function() {
  var lineaDeTiempo = document.querySelector('.timeline');
  var eventos = document.querySelectorAll('.contenedor');
  var offset = window.scrollY;

  lineaDeTiempo.style.height = 500 + offset + 'px';

  eventos.forEach(function(evento) {
    var isInViewport = isElementInViewport(evento);

    if (isInViewport && !evento.classList.contains('mostrar')) {
      evento.classList.add('mostrar'); // Agrega la clase 'mostrar' si el evento está visible
    } else if (!isInViewport && evento.classList.contains('mostrar')) {
      evento.classList.remove('mostrar'); // Quita la clase 'mostrar' si el evento ya no está visible
    }
  });
});

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


var capaOscura = document.createElement('div');
capaOscura.className = 'capa-oscura';
document.body.appendChild(capaOscura);

window.addEventListener('scroll', function() {
  var offset = window.scrollY;
  var opacity = Math.min(offset / 500, 1); // Ajusta el número para controlar la velocidad de oscurecimiento

  capaOscura.style.background = 'linear-gradient(to bottom, rgba(116, 3, 3, 0), rgba(66, 6, 6, ' + opacity + '))';
});


