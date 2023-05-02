let title = document.querySelector('.title');
// Forma de agregar estilos usando literals
title.style = 
    `text-transform: uppercase;
    text-align: center;
    border-bottom: 2px solid #303030;
    padding-bottom: 20px;`;
let paragraph = document.querySelector('.paragraph');
let change = document.querySelector('.change');

change.addEventListener('click', ()=>{
  paragraph.innerText = 'text change';
})