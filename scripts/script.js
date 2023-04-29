//query selector selecciona 0 o 1 elemento
const elemento = document.querySelector('.p1 h2'); //para poner id es con # + id_name
console.log(elemento);
//query selector all
const enlaces = document.querySelectorAll('nav a');//selecciona todos los elementos y crea un array
// enlaces[0].textContent = 'nuevo elemento'
console.log(enlaces);

//get element by id

// const getElement = document.getElementById('');

const nuevaVariable = document.createElement('A');//crear elemento

//agregar href
nuevaVariable.href = '#';
//agregar texto
nuevaVariable.textContent = 'nuevo enlace';
//agregar clase
nuevaVariable.classList.add('nav-a');
// agregarlo al documento
const navegacion = document.querySelector('.contenedor');
navegacion.appendChild(nuevaVariable);

console.log(nuevaVariable);

//eventos

document.addEventListener('DOMContentLoaded', function(){//solo espera a que se descargue el html sin contar css o img (mas utilizado)
    console.log(44);
});

window.addEventListener('load', function(){//espera a que se descargue todo el contenido de la pagina html, css, img
    console.log(1);
});
window.onload = function() { //misma función que la superior
    console.log(11);
}

console.log(5);

//seleccionar elementos de html
const enviar = document.querySelector('.')