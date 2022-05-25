// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

let nums = [];
let sum = 0;

do {
  const userNum = parseInt(prompt("Inserisci un numero"));

  if (!isNaN(userNum)) {
    nums.push(userNum);
    sum += userNum;
  }
} while (sum < 50);

console.log(nums);