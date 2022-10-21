let amigos = [];
let btnGuardar = document.querySelector("#btnGuardar");
let btnCancelar = document.querySelector("#btnCancelar");



let lista = document.querySelector(".listaAmigos");
let formulario = document.querySelector("#formulario");

validacion();

function validacion()
    if ("contacto.nombre" =="") {
        return a ;
    } else {
        return false;
        document.write("revise el nombre")
    }


pintar();

function limpiar() {

    formulario[0].value = "";
    formulario[1].value = "";
    formulario[2].value = "";
    formulario[3].value = "";
}


function pintar() {
    if (amigos.length > 0) {
        lista.innerHTML = "";
        amigos.forEach((contacto, index) => {
            let amigo = document.createElement("div");
            amigo.innerHTML = `<p>${contacto.nombre}</p><button class="muestraDetalles"><input type="hidden" value="${contacto.telefono}" />Detalles</button><button class="eliminarContacto" indice="${index}">Borrar</button`;
            lista.appendChild(amigo);
        });
        let botones = document.getElementsByClassName("muestraDetalles");
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click", () => {
                showDetalles(element.children[0].value);
            });
        }
        botones = document.getElementsByClassName("eliminarContacto");
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click", () => {
                amigos.splice(element.getAttribute("indice"), 1);
                pintar();
            });
        }


    }
    else {
        lista.innerHTML = "<h2>No tenemos amigos</h2>";
    }
}

function showDetalles(tel) {
    let detalles = document.getElementById("detallesAmigo");
    let amigo = amigos.find(a => {
        if (a.telefono == tel) {
            return a;
        }
    });
    detalles.innerHTML = `<img src="${amigo.foto}" alt="">
    <h3>${amigo.nombre}<h3/>
    <p><span>teléfono:</span>${amigo.telefono}<p/>
    <p><span>Correo:</span>${amigo.correo}</p>
    <button id="cerrar1">Cerrar</button>`;
    detalles.classList.remove("oculto");
    let cerrar1 = document.getElementById("cerrar1")
    cerrar1.addEventListener("click", (event) => {

        detalles.classList.add("oculto");

    });
}


btnCancelar.addEventListener("click", (Event) => {
    limpiar();
    Event.preventDefault();
});

btnGuardar.addEventListener("click", (Event) => {


    let contacto = {
        nombre: formulario["nombre"].value,
        telefono: formulario["telefono"].value,
        correo: formulario["correo"].value,
        foto: formulario["foto"].value
    };
    
    if(validacion())
    {
return a;
    }
    else{
        document.write("revise el nombre")
    }
    amigos.push(contacto);
    limpiar();
    pintar();
    Event.preventDefault();
   
});
