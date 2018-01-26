/* creando variables*/
let input = document.getElementById('name');
let button = document.getElementById('return');
let text = document.getElementById('texto');


button.addEventListener('click', function () {
  console.log("hola")
  let question = input.value;

  /* recorriendo frase del usuario 
  for (let i = 0; i < question.length; i++) {
     /* de encontrar cifra numerica o un vacio solicitamos nueva informacion
     if ((parseInt(question[i]) % 1 === 0) && (question === '')) {
       button.setAttribute('disabled', true);
    } else {
      button.setAttribute('disabled', false);
    }
   }*/

  /* cifrando(primero convertir a mayusculas y aplicar cifrado)*/
  let questionMayus = question.toUpperCase();
  let str = '';
  for (let j = 0; j < questionMayus.length; j++) {
    let newPosition = (questionMayus.charCodeAt(j) - 65 + 33) % 26 + 65;
    let letterCifher = String.fromCharCode(newPosition);
    str += letterCifher;
    let text = document.getElementById('texto');
    text.textContent = str;


  }
});

/*  creando funcion de decifrado*/
let button2 = document.getElementById('returnDecipher');
button2.addEventListener('click', function () {
  let text = document.getElementById('texto');
  let input = document.getElementById('name');
  let letter = input.value
  /* asignamos una letiable , la cual  almacenará la palabra decifrada*/
  let decipherWord = '';
  /* recorriendo el array cifrado y ejecutando formula*/
  for (let ij = 0; ij < letter.length; ij++) {
    let retroPosition = (letter.charCodeAt(ij) + 65 - 33) % 26 + 65;
    let letterCesar = String.fromCharCode(retroPosition);
    decipherWord += letterCesar;
    let text = document.getElementById('texto');
    text.textContent = decipherWord;
  }
});
