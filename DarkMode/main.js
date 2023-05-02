const html = document.querySelector('html');
const ckeck = document.querySelector('#checkbox');

ckeck.addEventListener('change', function(){
  html.classList.toggle('dark')
})