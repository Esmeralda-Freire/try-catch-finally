class Calculadora {
    static dividir(numero1, numero2) {
      if (numero2 == 0) {
        throw new Error("Não é possível dividir por zero.");
      }
      return numero1 / numero2;
    }
  }
  
  function operacaoMatematica() {
    try {
      const numero1 = parseFloat(prompt("Digite o primeiro número:"));
      const numero2 = parseFloat(prompt("Digite o segundo número:"));
  
      const resultado = Calculadora.dividir(numero1, numero2);
  
      console.log(`O resultado da divisão é: ${resultado}`);
    } catch (erro) {
      console.error(`Erro: ${erro.message}`);
    } finally {
      console.log("Esta mensagem será exibida independentemente de ocorrer uma exceção ou não.");
    }
  }
  
  operacaoMatematica();
  