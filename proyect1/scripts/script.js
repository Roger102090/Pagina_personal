/*Seleccionar elementos de html*/
const peso = document.querySelector('#kilo');
const altura = document.querySelector('#metros');
const form = document.querySelector('#form');
const res_form = document.querySelector('#resultado')
const adv_resultado = document.querySelector('#adv_r');
console.log(peso);
console.log(altura);
console.log(res_form);

let p;
let a; 
let n;
let n1;
//Elemento inicial del resultado de la calculadora
const resultado = document.createElement('P');
resultado.classList.add('reslutado__submit');
resultado.textContent = 0;
res_form.appendChild(resultado);
//Elemento inicial del resultado del recuerdo de consejos
const adv__imc = document.createElement('P');
adv__imc.classList.add('div_advice__p2');
adv__imc.textContent = 'Debes iniciar la calculadora';
adv_resultado.appendChild(adv__imc);

//trigger del boton del formulario
form.addEventListener('submit', function res(event) {
    event.preventDefault();
    p = peso.value;    
    a = altura.value;    
    imc1 = a*a;
    imc2 = p/imc1;
    let verif = document.querySelector('#resultado');
    let verif1 = verif.value; 
    let verif2 = document.querySelector('#adv_r');
    let verif_2 = verif2.value; 
    verif1 = parseInt(verif);
        if  (verif1 == "" || verif1 == 0 || verif_2 == 'Debes iniciar la calculadora') {
                res_form.removeChild(resultado);
                adv_resultado.removeChild(adv__imc);
            }else {   
                    
                if ((isNaN(p) || !isFinite(p)) || (isNaN(a) || !isFinite(a)) || (p > 300 || a > 3)) {
                    alert ('Debes de ingresar un valor numérico valido, Así como el peso y altura reales del paciente');
                }else {
                    a = parseInt(altura);
                    p = parseInt(peso);
                    //Se crea la respuestas
                    resultado.textContent = imc2;
                    resultado.classList.add('reslutado__submit');
                    res_form.appendChild(resultado);
                    //Se crea la respuesta de adv
                    adv__imc.classList.add('div_advice__p3');
                    adv__imc.textContent = imc2;
                    adv_resultado.appendChild(adv__imc);
        }}
});
