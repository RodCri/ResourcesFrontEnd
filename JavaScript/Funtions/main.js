// Parametros son la lista de valores dentro de los parentesis en la definicion de la funcion 
// Argumentos son los valores recividos por la funcion cuando esta es invocada

function nameFuntion(parameter1, parameter2){
  return parameter1 + parameter2
}

// Argumentos
nameFuntion(2,2);

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

function salludar(name){
  return `Hola ${name}`;
}
// code here can NOT use carName