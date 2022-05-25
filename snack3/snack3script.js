// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
let sum = 0;

for (i = 0; i < 5; i++) {
  const userNum = parseInt(prompt("Inserisci un numero."));

  if (!isNaN(userNum)) {
    sum += userNum;
  } else {
    alert("Devi inserire un numero");
    i--;
  }
}

console.log(sum);