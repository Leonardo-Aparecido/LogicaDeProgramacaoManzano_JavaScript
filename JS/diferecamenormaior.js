var numero1 = Number(prompt("Digite o primeiro numero"))
var numero2 = Number(prompt("Digite o segundo numero"))

numero1 = Math.abs(numero1)
numero2 = Math.abs(numero2)
var resultado = (numero1-numero2)
alert("A diferença do maior para o menor numero é:"+resultado)
//outra forma de concatenar
alert(`A diferença do maior para o menor numero é ${resultado}`)