let previousTarget; // Variable que me guarda el último target para quitarle la classe "target"
let game;

// Función que me selecciona un id para identificar que target hay que pintar de rojo
const targetSelector = () => {
    let position = Math.floor(Math.random() * 9) + 1;
    //alert(position);
    return position;
}



// Esta función pinta el target a partir del id que devuelve targetSelector()
const cercleSelector = () => {

    // en la variable targetId guardo el id que me devuelve targetSelector()
    let targetId = targetSelector();

    // Identifico el target actual con el id anterior
    let currentTarget = document.getElementById(targetId); 

    // Le añado la classe "target" para pintarlo de rojo
    currentTarget.classList.add("target"); 

    // Le añado un eventListener para poder registrar si se clica para mostrar el mensaje y finalizar el juego
    endGame(targetId);

    // Guardo el id en la variable previousTarget para despues quitarle la classe "target"
    previousTarget = targetId; 

    // Esta función se repita en bucle cada 3 segundos y selecciona y des-selecciona cada target
    game = setInterval(function () {

        // Buscamos el nuevo target
        let number = targetSelector(); 

        // seleccionamos el target corresponsiente
        let selectedCercle = document.getElementById(number); 

        // Al target anterior le borro la classe "target"
        document.getElementById(previousTarget).classList.remove("target"); 

        // guardo en la variable previousTarget el nuevo target para cuando tenga que quitarle la classe
        previousTarget = number; 

        // pinto de rojo el nuevo target
        selectedCercle.classList.add("target"); 

        // Al nuevo targt le añado un EventListener para cuando el usuario clique le informe de que ha ganado y se detenga el juego
        document.getElementById(number).addEventListener('click', function () {

            // Pinto un alert para el usuario
            alert("Has ganado"); 

            // Si el usuario clica en el circulo correcto se para el juego 
            clearInterval(game); 

        });

    }, 3000);

}


const endGame = (n) => {

    document.getElementById(n).addEventListener('click', function () {

        // Pinto un alert para el usuario
        alert("Has ganado"); 

        // Si el usuario clica en el circulo correcto se para el juego 
        clearInterval(game); 

    });



}

// Ejecuta la función que hace todo el juego
cercleSelector();
