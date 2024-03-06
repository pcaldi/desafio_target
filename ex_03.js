/* 3) Descubra a lógica e complete o próximo elemento:


a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____


 */


// Sequência a) 1, 3, 5, 7, ___
function nextNumberA() {
  let lastNumber = 7;
  let nextNumber = lastNumber + 2;
  console.log("a) 1, 3, 5, 7, ", nextNumber);
}

// Sequência b) 2, 4, 8, 16, 32, 64, ____
function nextNumberB() {
  let lastNumber = 64;
  let nextNumber = lastNumber * 2;
  console.log("b) 2, 4, 8, 16, 32, 64, ", nextNumber);
}

// Sequência c) 0, 1, 4, 9, 16, 25, 36, ____
function nextNumberC() {
  let lastNumber = 36;
  let nextNumber = Math.pow(Math.sqrt(lastNumber) + 1, 2);
  console.log("c) 0, 1, 4, 9, 16, 25, 36, ", nextNumber);
}

// Sequência d) 4, 16, 36, 64, ____
function nextNumberD() {
  let lastNumber = 64;
  let nextNumber = Math.pow(Math.sqrt(lastNumber) + 1, 2);
  console.log("d) 4, 16, 36, 64, ", nextNumber);
}

// Sequência e) 1, 1, 2, 3, 5, 8, ____
function nextNumberE() {
  let secondLastNumber = 5;
  let lastNumber = 8;
  let nextNumber = secondLastNumber + lastNumber;
  console.log("e) 1, 1, 2, 3, 5, 8, ", nextNumber);
}

// Sequência f) 2, 10, 12, 16, 17, 18, 19, ____
function nextNumberF() {
  let lastNumber = 19;
  let nextNumber = lastNumber + 3;
  console.log("f) 2, 10, 12, 16, 17, 18, 19, ", nextNumber);
}

// Chamando as funções para encontrar os próximos números

nextNumberA();
nextNumberB();
nextNumberC();
nextNumberD();
nextNumberE();
nextNumberF();
