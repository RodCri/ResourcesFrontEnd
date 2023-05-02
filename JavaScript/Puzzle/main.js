const matrix = shuffleMatrix();

const board = document.querySelector('.board');

drawCards();
addEventListeners();

/**
 * Funcion para dibujar cada una de las cards en el tablero
 */
function drawCards(){
  board.innerHTML = '';
  matrix.forEach(row => row.forEach(element => {
    if(element == ''){
      board.innerHTML += `<div class="empty">${element}</div>`
    }else{
      board.innerHTML += `<div class="card">${element}</div>`
    }
  }))
}

/**
 * Agregar un accion a cada uno de los card del board
 */
function addEventListeners(){
  let cards = document.querySelectorAll('.card');
  cards.forEach(card => card.addEventListener('click', ()=>{
    let actualPosition = searchPosition(card.innerText);
    let emptyPosition = searchPosition('');
    let movement = canMovement(actualPosition, emptyPosition);
    if(movement !== false){
      updateMatrix(card.innerText, actualPosition,emptyPosition);
      let result = comparateMatrix();
      if(result === true){
        confetti({
          particleCount: 150,
          spread: 150
        });
      }
      drawCards();
      addEventListeners();
    }
  }))
}
/**
 * Buscar la posicion actual del card en el board
 * @param {*} element 
 * @returns posicion en fila y columna
 */
function searchPosition(element){
  let rowIndex = 0;
  let columnIndex = 0;
  matrix.forEach((row, index) => {
    let rowElement = row.findIndex(item => item == element)
    if(rowElement !== -1){
      rowIndex = index;
      columnIndex = rowElement;
    }
  });
  return [rowIndex, columnIndex];
}
/**
 * Verificamos si el elemento tiene un posible movimiento tanto vertical como horizontal
 * @param {*} actualPosition 
 * @param {*} emptyPosition 
 * @returns true en caso de un posible movimiento
 */
function canMovement(actualPosition, emptyPosition){
  // Verificamos que se encuentren en la misma columna para efectuar la resta
  if(actualPosition[1] == emptyPosition[1]){
    // -1 Abajo 1 Arriba
    if(actualPosition[0]-emptyPosition[0] > 1 || actualPosition[0]-emptyPosition[0]< -1){
      return false;
    }
  }// -1 Derecha 1 Izquierda
  // Verificamos que se encuentren en la misma fila para efectuar la resta
  else if(actualPosition[0] == emptyPosition[0]){
    if(actualPosition[1]-emptyPosition[1] > 1 || actualPosition[1]-emptyPosition[1] < -1){
      return false;
    }
  }else{
    return false;
  }
}
/**
 * Funcion para cambiar de posicion el elemento vacio por el seleccionado
 * @param {*} element 
 * @param {*} actualPosition 
 * @param {*} emptyPosition 
 */
function updateMatrix(element, actualPosition, emptyPosition){
  matrix[actualPosition[0]][actualPosition[1]] = '';
  matrix[emptyPosition[0]][emptyPosition[1]] = element;
}
/**
 * Funcion para mezclar la matrix de manera aleatoria
 * @returns un array con la matrix desordenada
 */
function shuffleMatrix(){
  let shuffleMatrix = [
    [],
    [],
    []
  ];
  let arrayBase = ['1','2','3','4','5','6','7','8',''];
  let shuffleArray = arrayBase.sort(()=> Math.random()-0.5)

  let row = 0;
  let column = 0;

  shuffleArray.forEach(element=>{
    shuffleMatrix[row].push(element)
    if(column < 2){
      column++
    }else{
      column = 0;
      row++
    }
  })
  return shuffleMatrix;
}
/**
 * Comparar la matrix actual con la resuelta
 * @returns true en caso de comprobar que esta ordenada
 */
function comparateMatrix(){
  let counter = 0;
  let finalMatrix =[
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','']
  ]
  matrix.forEach((row,indexRow)=>{
    row.forEach((element,indexColum)=>{
      if(element == finalMatrix[indexRow][indexColum]){
        counter++
      }
    })
  })
  if(counter == 9){
    return true
  }else{
    return false
  }
}