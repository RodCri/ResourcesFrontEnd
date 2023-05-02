let previousTitle = document.title

window.addEventListener('blur', () =>{
  previousTitle = document.title
  document.title = '!nuevo titulo cambio pestaña'
})

window.addEventListener('focus',()=>{
  document.title = previousTitle
})