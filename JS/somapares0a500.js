/* Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
1 até 500. */
let contadora = 0
let soma = 0


while(contadora<=500){
    if (contadora % 2 == 0){
        soma += contadora
        //console.log(`${soma}`)
    }
    contadora++
}
console.log (`A somatória de todos os numeros pares é de ${soma}`)