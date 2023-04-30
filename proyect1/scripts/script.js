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
let n;
let n1;
const resultado = document.createElement('P');
resultado.classList.add('reslutado__submit');
resultado.textContent = 0;
res_form.appendChild(resultado);


form.addEventListener('submit', function res(event) {
    event.preventDefault();
    p = peso.value;    
    a = altura.value;    
    imc1 = a*a;
    imc2 = p/imc1;
    let verif = document.querySelector('#resultado');
    let verif1 = verif.value; 
    verif1 = parseInt(verif);
    if  (verif1 == "" || verif1 == 0) {
        res_form.removeChild(resultado);
    }else {   
        
    if ((isNaN(p) || !isFinite(p)) || (isNaN(a) || !isFinite(a))) {
        alert ('Debes de ungresar un valor numérico');
    }else {
        a = parseInt(altura);
        p = parseInt(peso);
        resultado.textContent = imc2;
        resultado.classList.add('reslutado__submit');
        res_form.appendChild(resultado);      
        
        // n = imc2;
        // n1 = p;
        // while (n <= 25) {
        //     n = n1/imc1;
        //     n1 = n1-.5;
        // };
        // const advice = document.createElement('P');
        // advice.textContent = 'El resultado del calculo fue de:<br>', imc2, '<br>por lo que es recomendable que se tenga un peso de:<br>', n1, 
        //pendiente
    }}
   
} )




