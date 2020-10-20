// Seleccionamos el boton del formulario por medio del tag, como solo hay uno uso el atributo TagName
const button = document.getElementsByTagName("button");

// Función que se ejecuta mostrando un aviso en pantalla
function showAlert(){
    alert('Codigo de validación');
 }
 
 // EventListener que ejecuta la función showAlert cada vez que se aprieta el formulario
 button[0].addEventListener('click', showAlert); 