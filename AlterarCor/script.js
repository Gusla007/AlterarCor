const caixa = document.querySelector("body")
const cor = document.querySelector("input")

let corpadrao = '#fff'
caixa.style.backgroundColor = `${corpadrao}`

function mudarcor(){
    caixa.style.backgroundColor = `${cor.value}`
}