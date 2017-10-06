function cipher (str) {
do {
var frase = prompt("Ingrese su frase");
frase = frase.toUpperCase();
}
while (frase == ""); // para que la persona no ingrese un campo vacio

var strFrase = ""; // variable vacia, la cual me dara la nueva frase
var numero = ""; // variable vacia, que tendra el valor del numero
for (var i = 0; i<frase.length; i++){ //para recorrer la frase escrita
numero = (frase.charCodeAt(i) - 65+33)%26+65; //asignacion numerica
strFrase += String.fromCharCode(numero) // de numeros a letras (codigo)

}
console.log(strFrase)
  }

//function decipher (str){
//}

cipher();
