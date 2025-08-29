function ativar(){


let ativarPage = document.querySelector('.projetos a');

ativarPage.addEventListener('click',function(){

let pages = document.querySelector('.Central-quadro-projetos');

pages.classList.add('ativar-page');

});


}


ativar();


function desativar(){


let fecharPage = document.querySelector('#fechar_page');

fecharPage.addEventListener('click',function(){

let pages = document.querySelector('.Central-quadro-projetos');

pages.classList.remove('ativar-page');

});


}

desativar();




