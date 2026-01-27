// índice da imagem atual
let index = 0;

// array de imagens (SEM duplicação)
let arrayImagem = [
  'imagem/imagem01.png',
  'imagem/imagem02.png',
  'imagem/imagem03.png',
  'imagem/imagem04.png',
  'imagem/imagem05.png',
  'imagem/imagem06.png'
];

// elemento da imagem
let imgElement = document.querySelector('#imagem');

// botões
let buttonNext = document.querySelector('.btn-one button');
let buttonPrev = document.querySelector('.btn-two button');

// garante que a primeira imagem carregue
imgElement.src = arrayImagem[index];

// função responsável pela troca com fade
function trocarImagem() {
  imgElement.style.transition = 'opacity 0.5s ease';
  imgElement.style.opacity = 0;

  setTimeout(() => {
    imgElement.src = arrayImagem[index];
    imgElement.style.opacity = 1;
  }, 500);
}

// botão NEXT (direita)
buttonNext.addEventListener('click', function () {
  index = (index + 1) % arrayImagem.length;
  trocarImagem();
});

// botão PREV (esquerda)
buttonPrev.addEventListener('click', function () {
  index = (index - 1 + arrayImagem.length) % arrayImagem.length;
  trocarImagem();
});

