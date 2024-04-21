/* Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).*/
let contadora = 0
let resultado = 0


while (contadora <= 100){
    resultado = resultado + contadora
   
    contadora++
}
console.log (`A soma de todos os numero inteiros de 0 a 100 é = ${resultado}`)