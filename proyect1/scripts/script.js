/*Seleccionar elementos del html*/
const peso = document.querySelector('#kilo');
const altura = document.querySelector('#metros');
const form = document.querySelector('#form');
const res_form = document.querySelector('#resultado')
console.log(peso);
console.log(altura);
console.log(res_form);

let p;
let a; 


form.addEventListener('submit', function res(event) {
    event.preventDefault();
    p = peso.value;    
    a = altura.value;    
    imc1 = a*a;
    imc2 = p/imc1;
    if ((isNaN(p) || !isFinite(p)) || (isNaN(a) || !isFinite(a))) {
        alert ('Debes de ungresar un valor numérico');
    }else {
        a = parseInt(altura);
        p = parseInt(peso);
        const resultado = document.createElement('P');
        resultado.textContent = imc2;
        resultado.classList.add ('reslutado__submit')
        res_form.appendChild(resultado);
    }
   
} )




