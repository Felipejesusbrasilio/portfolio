let index = 0;

let arrayImagem = ['imagem/imagem01.png','imagem/imagem02.png','imagem/imagem03.png','imagem/imagem04.png','imagem/imagem05.png','imagem/imagem06.png'];

let imgElement = document.querySelector('#imagem');

let buttonOne = document.querySelector('.btn-one button');

buttonOne.addEventListener('click', function () {
    if (index < arrayImagem.length - 1) {
        index++;
        imgElement.src = arrayImagem[index];
        
        imgElement.style.transition = 'opacity 1s'; // aplica a transição no elemento de imagem
        imgElement.style.opacity = 0; // começa com opacidade 0 para o efeito de fade

        // espera um pequeno tempo para trocar a imagem e voltar a opacidade
        setTimeout(() => {
            imgElement.src = arrayImagem[index];
            imgElement.style.opacity = 1; // volta a opacidade para 1, ativando a transição
        }, 1000);
    }
});


let buttonTwo = document.querySelector('.btn-two button');

buttonTwo.addEventListener('click', function () {
    if (index > 0) {
        index--;
        imgElement.src = arrayImagem[index];

        imgElement.style.transition = 'opacity 1s'; // aplica a transição no elemento de imagem
        imgElement.style.opacity = 0; // começa com opacidade 0 para o efeito de fade

        // espera um pequeno tempo para trocar a imagem e voltar a opacidade
        setTimeout(() => {
            imgElement.src = arrayImagem[index];
            imgElement.style.opacity = 1; // volta a opacidade para 1, ativando a transição
        }, 1000);
    }
});