// Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const arrayNum = parseInt(prompt("Inserisci il numero di array"));

for (let i = 0; i < arrayNum; i++) {
  let rndNums = [];
  
  for (let j = 0; j < 10; j++) {
    const rndNum = Math.floor((Math.random() * 99) + 1);
    rndNums.push(rndNum);
  }

  console.log(rndNums);
}