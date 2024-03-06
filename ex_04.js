/* 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
 */

function descobrirInterruptores() {
  // Definindo variáveis para representar o estado das lâmpadas
  let lâmpada1 = false;
  let lâmpada2 = false;
  let lâmpada3 = false;

  // Primeira visita:
  // Ligar o primeiro interruptor e aguardar alguns instantes
  lâmpada1 = true;

  // Segunda visita:
  // Desligar o primeiro interruptor e ligar o segundo interruptor
  lâmpada1 = false;
  lâmpada2 = true;

  // Verificar o estado de cada lâmpada
  console.log("O primeiro interruptor controla a lâmpada 1:", lâmpada1);
  console.log("O segundo interruptor controla a lâmpada 2:", lâmpada2);
  console.log("O terceiro interruptor controla a lâmpada 3:", lâmpada3);
}

// Chamando a função para descobrir os interruptores
descobrirInterruptores();
