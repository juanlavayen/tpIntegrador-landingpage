// Vamos a tomar los datos cargados por el usuario en el formulario y lo mostraremos por pantalla

const $paso1 = document.querySelector('#paso1');
const $paso2 = document.querySelector('#paso2');
const $paso3 = document.querySelector("#paso3");
const $paso4 = document.querySelector("#paso4");


$paso1.style.display="block";
$paso2.style.display="none";
$paso3.style.display="none";
$paso4.style.display="none";

function next1(){
    $paso1.style.display="none";
    $paso2.style.display="block";
}

function next2(){
    $paso2.style.display="none";
    $paso3.style.display="block";
}

function next3(){
    $paso3.style.display="none";
    $paso4.style.display="block";

    let ne=document.getElementById("nombre").value;
    let el=document.getElementById("email").value;
    let ed=document.getElementById("edad").value;
    let le=document.getElementById("lenguaje").value;
    let ca=document.getElementById("carrera").value;
    let to=document.getElementById("tiempo").value;
    
    document.getElementById('revisionDeDatos').innerHTML=
    `<li>Nombre completo :${ne}</li>
     <li>email :${el}</li>
     <li>Edad :${ed}</li>
     <li>Lenguaje :${le}</li>
     <li>Carrera :${ca}</li>
     <li>Tiempo a destinar :${to}`;
}

function exportar(){
    var doc = new jsPDF()
        doc.text(document.getElementById('revisionDeDatos').innerText, 10, 10);
        doc.save('Dev5-CurvaAprendizaje.pdf');
}

function enviado(){
    alert("Mensaje enviado correctamente");
    window.location.href = "index.html";
}
