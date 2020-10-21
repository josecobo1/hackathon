// Seleccionamos el elemento que habrá que pintar en función de la tecla
const element = document.getElementById("tests");


const setColor = (c) => {
   element.className = c;
}

const keyR = () => {
    setColor("red");
}

const keyW = () => {
    setColor("white");
}

const keyY = () => {
    setColor("yellow");
}

document.addEventListener('keydown', (event) => {

    let character = event.key;
    console.log(character);

    switch(character) {
        case 'r':
            keyR();
            break;
        case 'w':
            keyW();
            break;
        case 'y':
            keyY();
            break;
    }

});

