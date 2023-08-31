const mostrar_fusca = () => {
    let carro = "Fusca"
    alert(carro)
}

const nome_idade = () => {
    let nome = prompt('Qual é o seu nome mesmo?')
    let idade = 2023 - (prompt('Ok, e em que ano você nasceu?'))

    alert(`Olá, ${nome}, você tem ${idade} anos!🥳🥳🥳, pode falar eu sou um máximo`)
}

const formulario_nome = document.getElementById('nomeform')

const calcular_retangulo = () => {
    let base = document.getElementById('baseRetangulo').value
    let altura = document.getElementById('alturaRetangulo').value
    let area = base * altura

    console.log(base)
    alert(`A área do retangulo é ${area}`)
}

const calcular_quadrado = () => {
    let lado = document.getElementById('ladoQuadrado').value
    let area = lado**2 

    alert(`A área do quadrado é ${area}`)
}

const calcular_losango = () => {
    let diagonalMaior = document.getElementById('diagonalMaior').value
    let diagonalMenor = document.getElementById('diagonalMenor').value
    let area = (diagonalMaior * diagonalMenor) / 2 

    alert(`A área do losango é ${area}`)
}

const calcular_trapesio = () => {
    let baseMaior = document.getElementById('baseMaior').value
    let baseMenor = document.getElementById('baseMenor').value
    let hipotenusa = document.getElementById('hipotenusa').value
    let area = ((baseMaior * baseMenor) * hipotenusa) / 2 

    alert(`A área do trapézio é ${area}`)
}

const calcular_paralelogramo = () => {
    let baseParalelogramo = document.getElementById('baseParalelogramo').value
    let alturaParalelogramo = document.getElementById('alturaParalelogramo').value
    let area = baseParalelogramo * alturaParalelogramo

    alert(`A área do paralelogramo é ${area}`)
}


const calcular_triangulo = () => {
    let baseTriangulo = document.getElementById('baseTriangulo').value
    let alturaTriangulo = document.getElementById('alturaTriangulo').value
    let area = (baseTriangulo * alturaTriangulo) / 2 

    alert(`A área do triângulo é ${area}`)
}

const calcular_circulo = () => {
    let pi = Math.PI 
    let raio = document.getElementById('raio').value
    let area = pi * (raio ** 2)

    alert(`A área do cirulo é ${area}`)
}


formulario_nome.addEventListener("submit", e => {
    let nome = document.querySelector('[name="nome_cliente"]')
    alert(`Olá, ${nome.value}`)
    e.preventDefault()
})