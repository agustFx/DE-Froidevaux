const main = document.getElementById("main");

function mostrarInicio(){
    main.innerHTML = `
    <div class="encabezado">
        <img src="../assets/img/logo.PNG" alt="logo" class="logo">
    </div>
    `;

    const buttonComenzar = document.createElement("div");
    buttonComenzar.classList.add("index-button");
    buttonComenzar.innerHTML = `
    <a href="./toDo.html"><button class="main-button">COMENZAR</button></a>
    `;

    main.appendChild(buttonComenzar);
}

mostrarInicio();