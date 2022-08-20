let contadorQtd = 0
let contadorNome = 0
let contador = 0
let qtdCartas = Number(prompt("Quantas cartas você deseja?"))
let nomeDasCartas = []
const cartas = document.querySelector(".cards ul")


while (qtdCartas > 14 || qtdCartas < 4 || qtdCartas % 2 == 1) {
    alert("Valor insuficiente... por favor insire um número de cartas inferior a 14, superior a 4 e PAR")
    qtdCartas = Number(prompt("Quantas cartas você deseja?"))
}

while (contadorQtd < qtdCartas || contadorNome < nomeDasCartas.length) {
    if (qtdCartas == 4 || qtdCartas == 6) {
        while (contadorQtd < (qtdCartas / 2)) {
            nomeDasCartas.push("dog", "cat")
            nomeDasCartas.sort(() => Math.random() - 0.5)
            contadorQtd++
        }
    } else {
        while (contadorQtd < (qtdCartas / 4)) {
            nomeDasCartas.push("dog", "cat", "lion", "bird")
            nomeDasCartas.sort(() => Math.random() - 0.5)
            contadorQtd++
        }
    }
    cartas.innerHTML = cartas.innerHTML + `<li><div onclick="virarCarta(this)" class="card ${nomeDasCartas[contadorNome]}"><div><img src="img/front 1.png" alt=""></div><!--card--><div/></li>`
    contadorQtd++
    contadorNome++
}

function virarCarta(card) {

    console.log(card)


    if (card.classList.contains("rotate")) {
        return false
    }
    if (contador > 1) {
        return false
    }

    contador++

    card.classList.toggle(`rotate`)
    card.classList.toggle("none")

    if (card.classList.contains("dog")) {
        card.classList.toggle("jake")
    }

    let id = setInterval(temporizador, 4000)

    function temporizador() {
        card.classList.toggle("rotate")
        card.classList.remove("none")
        card.classList.remove("jake")
        contador--
        clearInterval(id)
    }

    cartaSelecionada(card)
    
}

function cartaSelecionada(selected) {
    let contadorCarta = 0
    let carta1 = selected
    let carta2

    console.log(carta1)

    contadorCarta++

    if (contador = 2) {
        carta2 = selected
        console.log(carta2)
    }


}