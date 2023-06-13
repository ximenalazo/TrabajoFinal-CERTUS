/* Referencia a los botones Agregar el escucha de evento a los botones*/
let botones = document.querySelectorAll("article > button");

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", agregarcarrito);
}

function agregarcarrito(e) {
    let carrito = document.querySelector("#carrito");
    if (document.querySelector("#carritovacio")) {
        document.querySelector("#carritovacio").remove();
        document.querySelector("#carrito > figcaption").remove();
    }

    /* Obtener el elemento padre donde se hizo clic */
    let elementoBoton = e.target;
    let elementoPadre = elementoBoton.parentElement;

    /* Sacar información */
    let titulo = elementoPadre.querySelector("h3").innerHTML;
    let parrafo = elementoPadre.querySelector("p").innerHTML;

    /* Agregar la información al carrito */
    let nuevoelemento = document.createElement("div");

    nuevoelemento.innerHTML = "<div><h3>" + titulo + "</h3><p>" + parrafo + "</p></div>";
    document.querySelector("#carrito").append(nuevoelemento);
    
    alert("Se agregó correctamente al carrito.")
}

