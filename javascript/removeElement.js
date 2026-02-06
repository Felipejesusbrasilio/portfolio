document.addEventListener('DOMContentLoaded', function() {
  let divClose = document.querySelector('#close_page');
  
  if (divClose) {
    console.log(divClose);

    divClose.addEventListener('click', function() {

     let central = document.querySelector('.centralModal');

     central.remove();


    });
  } else {
    console.log('Elemento não encontrado!');
  }
  
});
