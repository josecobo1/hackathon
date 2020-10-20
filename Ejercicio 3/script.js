// Seleccionamos el boton del formulario por medio del tag, como solo hay uno uso el atributo TagName
const button = document.getElementsByTagName("button");

/*
let formName = document.getElementsByName("name")[0].value;
let formMail = document.getElementsByName("mail")[0].value;
let formMessage = document.getElementsByName("message")[0].value;
*/

// Función que se ejecuta mostrando un aviso en pantalla
function showAlert(){
    alert('Codigo de validación');
 }
 
 // EventListener que ejecuta la función showAlert cada vez que se aprieta el formulario
 button[0].addEventListener('click', showAlert); 