let btnOne = document.querySelector('.btn-one button');

btnOne.addEventListener('click',()=>{
    
let divResumo = document.querySelector('.resumo-skill');

divResumo.style.visibility = 'visible';
divResumo.style.height = '100%';
divResumo.style.transition = '0.3s';

})


let closeResumo = document.querySelector('#close-resumo');

closeResumo.addEventListener('click',()=>{

let divResumo = document.querySelector('.resumo-skill');

divResumo.style.visibility = 'hidden';
divResumo.style.height = '0px';
divResumo.style.transition = '0.3s';

})


let btnTwo = document.querySelector('.btn-two button');

btnTwo.addEventListener('click',()=>{

let divResumo = document.querySelector('.resumo-skill');

divResumo.style.visibility = 'visible';
divResumo.style.height = '100%';
divResumo.style.transition = '0.3s';

})