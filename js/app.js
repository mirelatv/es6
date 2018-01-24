/* creando funcion Cipher y consultando  al usuario*/
 let cipher =()=>{
  let question = prompt('Escribe tu nombre');
  /* creando bucle para que en caso de que el usuario no ingrese informacion   se le solicite hacerlo*/
  while (question === '') {
    question = prompt('escribe algo');
  }
  /* recorriendo frase del usuario */
  for (let i = 0; i < question.length; i++) {
    /* de encontrar cifra numerica o un vacio solicitamos nueva informacion*/
    while (parseInt(question[i]) % 1 === 0) {
      question = prompt('No coloques numero');
      while (question === '') {
        question = prompt('escribe algo');
      }
    }
  }
  /* cifrando(primero convertir a mayusculas y aplicar cifrado)*/
  let questionMayus = question.toUpperCase();
  let str = '';
  for (let j = 0; j < questionMayus.length; j++) {
    let newPosition = (questionMayus.charCodeAt(j) - 65 + 33) % 26 + 65;
    let letterCifher = String.fromCharCode(newPosition);
    str += letterCifher;
  }
  return str;
}
/*  creando funcion de decifrado*/
let decipher=(str)=> {
/* asignamos una letiable , la cual  almacenará la palabra decifrada*/
  let decipherWord = '';
  /* recorriendo el array cifrado y ejecutando formula*/
  for (let ij = 0; ij < str.length; ij++) {
    let retroPosition = (str.charCodeAt(ij) + 65 - 33) % 26 + 65;
    let letterCesar = String.fromCharCode(retroPosition);
    decipherWord += letterCesar;
  }
  alert('tu nombre cifrado es' + ' ' + str);
  alert('tu nombre decifrado es' + ' ' + decipherWord);
}

decipher(cipher());
