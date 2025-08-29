
let number = 0;


setInterval(()=>{

number++;

//console.log(number);

if (number == 1){

let header = document.querySelector('.name-two');

// Cria um novo elemento <p>
let p = document.createElement('h1');

// Adiciona algum texto ao <p>
p.textContent = 'Nome: Felipe de jesus';

// Insere o <p> dentro do header
header.appendChild(p);

}


if (number == 6){

 let header = document.querySelector('.name-two');
 
 header.innerHTML = '';

 // Cria um novo elemento <p>
let h1 = document.createElement('h1');

// Adiciona algum texto ao <p>
h1.textContent = 'Profissão: Dev full stack';

// Insere o <p> dentro do header
header.appendChild(h1);

}


if (number == 9){

 let header = document.querySelector('.name-two');
 
 header.innerHTML = '';

 // Cria um novo elemento <p>
let h2 = document.createElement('h1');

// Adiciona algum texto ao <p>
h2.textContent = 'Idade: 28 anos';

// Insere o <p> dentro do header
header.appendChild(h2);

}


if (number == 12){

 let header = document.querySelector('.name-two');
 
 header.innerHTML = '';

 // Cria um novo elemento <p>
let h3 = document.createElement('h1');

// Adiciona algum texto ao <p>
h3.textContent = 'Graduação: gestão da tecnologia da informação';

// Insere o <p> dentro do header
header.appendChild(h3);

}

if (number == 13){
 
 let header = document.querySelector('.name-two');
 
 header.innerHTML = '';

 number = 0;

}


},1000)