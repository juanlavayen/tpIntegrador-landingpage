// Vamos a tomar los datos cargados por el usuario en el formulario y lo mostraremos por pantalla

const $form = document.querySelector('#form');
const $form2 = document.querySelector('#form2');
$form.addEventListener('submit', handleSubmit);

$form2.style.display="none";

function handleSubmit(e) {
    e.preventDefault();
    const form= new FormData(this)
    console.log(form.get('name'))
    console.log(form.get('email'))
    console.log(form.get('edad'))
    console.log(form.get('localidad'))   
    console.log(form.get('mensaje'))

    $form.style.display="none";

    $form2.style.display="block";

    
    document.getElementById('revisionDeDatos').innerHTML= `<li>Nombre Completo : ${form.get('name').toUpperCase()}</li>
                                                           <li>Email: ${form.get('email')}</li>
                                                           <li>Edad: ${form.get('edad')}</li>
                                                           <li>Localidad : ${form.get('localidad').toUpperCase()}</li>
                                                           <li>Mensaje enviado : ${form.get('mensaje')}</li>`
}   

function enviado(){
    alert("Mensaje enviado correctamente");
    window.location.href = "index.html";
}
