/*Seleccionar elementos de html*/
const peso = document.querySelector('#kilo');
const altura = document.querySelector('#metros');
const form = document.querySelector('#form');
const res_form = document.querySelector('#resultado')
const adv_resultado = document.querySelector('#adv_r1');
const adv_grupo = document.querySelector('#adv_r2');
//confirmación de la conección con html
console.log(peso);
console.log(altura);
console.log(res_form);
console.log(adv_grupo);
//Ceración de variantes
let p;
let a; 
let n;
let n1;
const g1 = 'Peso bajo';
const g2 = 'Peso normal';
const g3 = 'Sobrepeso';
const g4 = 'Obesidad grado 1';
const g5 = 'Obesidad grado 2';
const g6 = 'Obesidad grado 3';
//Elemento inicial del resultado de la calculadora
const resultado = document.createElement('P');
resultado.classList.add('reslutado__submit');
resultado.textContent = 0;
res_form.appendChild(resultado);
//Elemento inicial del resultado del recuerdo de consejos
const adv__imc = document.createElement('P');
adv__imc.classList.add('div_advice__p2');
adv__imc.classList.add('div_advice__animation');
adv__imc.textContent = 'Debes iniciar la calculadora';
adv_resultado.appendChild(adv__imc);
//Elemento inicial de tu estatus
const adv__grupo = document.createElement('P');
adv__grupo.classList.add('div_advice__p5');
adv__grupo.classList.add('div_advice__animation');
adv__grupo.textContent = 'Debes iniciar la calculadora';
adv_grupo.appendChild(adv__grupo);
//trigger del boton del formulario
form.addEventListener('submit', function res(event) {
    //eovitar que se refresque la pagina
    event.preventDefault();
    //crea variables para uso y sus operaciones
    p = peso.value;    
    a = altura.value;    
    imc1 = a*a;
    imc_a = p/imc1;
    //redpmdeo de la variable
    imc2 = imc_a.toFixed(2);
    //selectores para verificar
    let verif = document.querySelector('#resultado');
    let verif1 = verif.value; 
    let verif2 = document.querySelector('#adv_r1');
    let verif_2 = verif2.value; 
    let verif3 = document.querySelector('#adv_r2');
    let verif_3 = verif3.valueM
    verif1 = parseInt(verif);
    //remover las clases de la segunda respuesta debido a que las respuestas dienen diferentes width
    adv__grupo.classList.remove('div_advice__g1');
    adv__grupo.classList.remove('div_advice__g2');
    adv__grupo.classList.remove('div_advice__g3');
    adv__grupo.classList.remove('div_advice__g4');
        if  (verif1 == "" || verif1 == 0 || verif_2 == 'Debes iniciar la calculadora' || verif_3 == 'Debes iniciar la calculadora' || verif_3 == g1 || verif_3 == g2 || verif_3 == g3 || verif_3 == g4 || verif_3 == g5 || verif_3 == g6 ) {
            res_form.removeChild(resultado);
            adv_resultado.removeChild(adv__imc);
           
            adv_grupo.removeChild(adv__grupo);
        }else {   
        
            if ((isNaN(p) || !isFinite(p)) || (isNaN(a) || !isFinite(a)) || (p > 300 || a > 3)) {
                alert ('Debes de ingresar un valor numérico valido, Así como el peso y altura reales del paciente');
            }else {
                a = parseInt(altura);
                p = parseInt(peso);
                
                //Se crea la respuesta
                resultado.textContent = imc2;
                resultado.classList.add('reslutado__submit');
                res_form.appendChild(resultado);
                //Se crea la respuesta del cuadro de adv
                adv__imc.classList.add('div_advice__p3');
                adv__imc.classList.add('div_advice__animation');
                adv__imc.textContent = imc2;
                adv_resultado.appendChild(adv__imc);
                //Se crea la respuesta del grupo
                adv__grupo.classList.add('div_advice__animation');
                adv_grupo.attributes

                if(imc2 < 18.5) {
                    adv__grupo.classList.add('div_advice__g1');
                    adv__grupo.textContent = g1;
                    adv_grupo.appendChild(adv__grupo);
                }else{
                    if(imc2 < 25) {
                        adv__grupo.classList.add('div_advice__g2');
                        adv__grupo.textContent = g2;
                        adv_grupo.appendChild(adv__grupo);
                    }else{
                        if(imc2 < 30) {
                            adv__grupo.classList.add('div_advice__g3');
                            adv__grupo.textContent = g3;
                            adv_grupo.appendChild(adv__grupo);
                        }else{
                            if(imc2 < 35) {
                                adv__grupo.classList.add('div_advice__g4');
                                adv__grupo.textContent = g4;
                                adv_grupo.appendChild(adv__grupo);
                            }else{
                                if(imc2 < 40) {
                                    adv__grupo.classList.add('div_advice__g4');
                                    adv__grupo.textContent = g5;
                                    adv_grupo.appendChild(adv__grupo);
                                }else{          
                                    adv__grupo.classList.add('div_advice__g4');                  
                                    adv__grupo.textContent = g6;
                                    adv_grupo.appendChild(adv__grupo);
                                };
                            };
                        };
                    };
                };

            };
        };
    }
);
