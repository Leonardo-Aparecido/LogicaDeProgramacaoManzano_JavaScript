/*Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar
se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução
se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. */


let numero=0
let contador=0

while (contador<=20){
    if(contador % 2 != 0){
        numero = contador
        console.log (`${numero}`)
    }
    contador++
}