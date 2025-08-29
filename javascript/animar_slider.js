let index = 0;

let arrayImagem = ['imagem/imagem01.png','imagem/imagem02.png','imagem/imagem03.png','imagem/imagem04.png','imagem/imagem05.png','imagem/imagem06.png'];

let imgElement = document.querySelector('#imagem');

let buttonOne = document.querySelector('.btn-one button');

buttonOne.addEventListener('click', function () {
    if (index < arrayImagem.length - 1) {
        index++;
        imgElement.src = arrayImagem[index];
    }
});


let buttonTwo = document.querySelector('.btn-two button');

buttonTwo.addEventListener('click', function () {
    if (index > 0) {
        index--;
        imgElement.src = arrayImagem[index];
    }
});