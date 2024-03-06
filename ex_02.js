/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */


function isFibonacci(num) {
  // Casos base para 0 e 1
  if (num === 0) return true;
  if (num === 1) return true;

  // Variáveis para armazenar os dois termos anteriores
  let a = 0;
  let b = 1;

  // Loop para iterar até encontrar o número ou exceder seu valor
  while (b <= num) {
    if (b === num) {
      return true;
    }
    let temp = b;
    b = a + b;
    a = temp;
  }

  // Número não encontrado na sequência
  return false;
}

// Exemplo de uso
let number = 13;

if (isFibonacci(number)) {
  console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${number} não pertence à sequência de Fibonacci.`);
}


isFibonacci()
