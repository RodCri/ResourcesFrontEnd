/* Si el valor de la variable puede cambia utilliza let
de lo contrario utiliza const, var no es recomendable usar
solo si es para navegadores viejos
No es posible redeclarar una variable usando let y const
*/

let light = document.querySelector('.light');

let on = document.querySelector('#on');
let off = document.querySelector('#off');

on.addEventListener('click', ()=>{
  light.src = 'pic_bulbon.gif';
});

off.addEventListener('click', ()=>{
  light.src = 'pic_bulboff.gif';
});