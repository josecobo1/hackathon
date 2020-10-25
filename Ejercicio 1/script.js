// Esta variable contiene el id target, de esta manera esta accesible para despues 
// eliminarlo desde el metodo remove
let target; 


// Si el usuario acierta el div paramos de repetir las funciones
const win = () => {
    clearInterval(window.timing);
    alert("Has ganado");

    return;
}


// Funcion que escoge un target y lo pinta
const setTarget = () => {
    // Escogemos un objetivo al azar
    target = Math.floor(Math.random() * 9) + 1;

    // Añadimos la classe red
    document.getElementById(target).classList.add("target");

    // Al target actual le ponemos un eventlistener
    document.getElementById(target).addEventListener('click', win);

    return;
}


// Al target anterior hay que eliminarle la classe red y quitarle el eventlistener
const removeTarget = () => {
    // Eliminamos la classe red
    document.getElementById(target).classList.remove("target");

    // Al target anterior le borro la classe "target"
    document.getElementById(target).removeEventListener('click', win);

    return;
}


// Esta función llama a las funciones set y remove target desde la función setInterval
const adjustTarget = () => {
    removeTarget();
    setTarget();

    return;
}


// Al cargar la pagina inicia el juego
const startGame = () => {
    setTarget();
    window.timing = setInterval(adjustTarget, 3*1000);

    return;
}


// Ejecuta la función que hace todo el juego
startGame();