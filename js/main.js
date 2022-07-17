class Actividad{
    constructor(nombre, dia, horario, direccion){
        this.nombre = nombre;
        this.dia = dia;
        this.horario = horario;
        this.direccion = direccion;
    }
}

let nombreUsuario;
const contenedorRegistro = document.getElementById("toDo-registro");
const contenedorActividades = document.getElementById("contenedor-actividades");
const actividades = JSON.parse(localStorage.getItem(nombreUsuario));

function guardarActividad(){
    const nombre = document.getElementById("nombre-actividad").value;
    const dia = document.getElementById("dia-actividad").value;
    const horario = document.getElementById("horario-actividad").value;
    const direccion = document.getElementById("direccion-actividad").value;

    const actividad = new Actividad(nombre, dia, horario, direccion);

    const actividadesGuardadas = JSON.parse(localStorage.getItem(nombreUsuario));

    if (actividadesGuardadas == null) {
        localStorage.setItem(nombreUsuario, JSON.stringify([actividad]));

        contenedorActividades.innerHTML = `
        <h2>Todavía no guardaste ninguna actividad</h2>
        `;
    } else {
        actividadesGuardadas.push(actividad);
        localStorage.setItem(nombreUsuario, JSON.stringify(actividadesGuardadas));
        
        actividades.forEach(actividad =>{
            let li = document.createElement("li");
            li.innerHTML = `
            ${actividad.nombre.toUpperCase()} - ${actividad.dia} - ${actividad.horario} - ${actividad.direccion} 
            `;
        })
    }
}

function mostrarToDo(){
    const formRegistro = document.createElement("form");
    formRegistro.classList.add("form-usuario");

    formRegistro.innerHTML = `
        <p class="encabezado-registro">Ingresa tu nombre</p>
        <input class="input-nombre" type="text" class="nombre-usuario" id="nombre-usuario" placeholder="Nombre">
    `;

    const buttonContinuar = document.createElement("div");
    buttonContinuar.classList.add("continuar-button");
    buttonContinuar.innerHTML = `
    <button type="submit" class="button-registrar" id="button-registrar"">CONTINUAR</button>
    `;

    buttonContinuar.addEventListener("click", () =>{
        bienvenidaYpanel();
    })

    formRegistro.appendChild(buttonContinuar);
    contenedorRegistro.appendChild(formRegistro);
    
}

function bienvenidaYpanel(nombreUsuario){
    contenedorRegistro.innerHTML = "";

    nombreUsuario = document.getElementsByClassName("nombre-usuario").value;

    const contenedorBienvenida = document.getElementById("encabezado");
    contenedorBienvenida.innerHTML = `
    <h1>Hola, ${nombreUsuario}!</h1>
    <h2>Agrega las actividades que tengas pendientes:</h2> 
    `;

    const contenedorPanel = document.getElementById("panel");
    contenedorPanel.innerHTML = `
    <form id="form-actividades" class="form-actividades">
    <p>Nombre de la actividad</p>
    <input type="text" name="nombre" id="nombre-actividad" placeholder="Ej: correr">
    
    <p>Día que quieras hacer la actividad</p>
    <input type="text" name="dia" id="dia-actividad" placeholder="Ej: jueves">

    <p>Hora aproximada en la que quieras hacer la actividad</p>
    <input type="text" name="horario" id="horario-actividad" placeholder="Ej: 15hs">

    <p>Dirección o lugar en el que vayas a hacer la actividad</p>
    <input type="text" name="direccion" id="direccion-actividad" placeholder="Ej: casa"></br>

    <button type="submit" id="guardar-actividad" onclick="guardarActividad()">GUARDAR ACTIVIDAD</button>
    </form>
    `;

    contenedorActividades.innerHTML = `
    <h1>Acá se van a mostrar las actividades</h1>
    `;

    contenedorRegistro.appendChild(contenedorBienvenida);
    contenedorRegistro.appendChild(contenedorPanel);
    contenedorRegistro.appendChild(contenedorActividades);
}

mostrarToDo();

