// Seleccionamos el elemento que habrá que pintar en función de la tecla
const element = document.getElementById("tests");


const setColor = (c) => {
   element.className = c;
}

const keyR = () => {
    alert('r');
    setColor("red");
}

const keyW = () => {
    alert('w');
    setColor("white");
}

const keyY = () => {
    alert('y');
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

