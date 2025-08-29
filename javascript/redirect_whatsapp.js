let whatsLink = document.querySelector('.whatsapp img'); // Seleciona o <a>, não a <img>

whatsLink.addEventListener('click', function() {
   window.location.href = 'https://wa.me/5511996554346';
});
