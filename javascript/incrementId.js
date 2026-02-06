let boxs = document.querySelectorAll('.box');
let i = 0; // Inicializa o contador

//console.log(boxs);

function atualizarId() {
  if (i < boxs.length) {
    // Atribui o id baseado no índice
    boxs[i].setAttribute('id', `id${i + 1}`);
    console.log(`ID ${i + 1} atribuído à div ${i + 1}`);
    i++; // Incrementa o contador
    setTimeout(atualizarId, 1000); // Chama a função novamente após 1 segundo
  }
}

// Começa a atribuição do id na primeira div
atualizarId();


function removerCaixas() {

  setTimeout(() => {
    boxs.forEach(box => {
      console.log(box);
      
      // Supondo que 'box' seja um elemento DOM, você pode usar o método 'remove()'
      box.remove();
    
    });


let divCentral = document.querySelector('.CentralDivs');

// Criar a nova div
let novaDiv = document.createElement('div');

// Adicionar uma classe ou id, se necessário
novaDiv.classList.add('nova-div');  // Ou novaDiv.id = 'id-da-nova-div';

// Adicionar conteúdo à nova div (opcional)
novaDiv.innerHTML = "<img src='imagem/imagem01.png' width='300px' id='animar_react'/>";

// Anexar a nova div à divCentral
divCentral.appendChild(novaDiv);

console.log(novaDiv);  // Para verificar no console

  }, 10000); // 10 segundos
}

removerCaixas();


