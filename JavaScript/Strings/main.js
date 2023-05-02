let nameUser = "midudev, is frontend Developer";
nameUser.slice(7,13);  // Extrae una parte del String indicando su inicio y fin de corte
nameUser.substring(7, 13); // Similar a slice 
nameUser.substr(7, 13); // Similar a slice el segundo parametro especifica la longitud de la parte a extraer
// Primer parametro desde donde incia la referencia desde 0

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

// ToUpperCase transforma a mayusculas y toLowerCase minuscula
let text1 = "Hello World!";
let text2 = text1.toUpperCase();

// Trim() remueve espacios en blanco
let text3 = "      Hello World!      ";
let text4 = text1.trim();
// trimStart() remueve espacios en blanco desde el inicio del string
// trimEnd()


// PadStart() PadEnd() 
let text5 = "5";
let padded = text.padStart(4,"x");
// xxx4

// charAt(0) retorna el caracter de esa posicion
let t = "HELLO WORLD";
let char = text.charAt(0);

// Convierte un string en un array teniendo en cuanta una separacion , | 
let texto = "a,b,c,d,e,f";
const myArray = text.split(",");