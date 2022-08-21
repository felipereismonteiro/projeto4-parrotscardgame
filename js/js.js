let contadorQtd = 0
let contadorNome = 0
let contador = 0
let virouCarta = 0
let contadorPassou = 0
let nomeDasCartas = []
let arrayCartasIguais = []
let cartasAdicionadas = []
const cartas = document.querySelector(".cards ul")
let qtdCartas = Number(prompt("Quantas cartas você deseja?"))



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


    if (card.classList.contains("rotate")) {
        return false
    }
    if (contador > 1) {
        return false
    }

    contador++

    console.log(contadorPagina)

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
        arrayCartasIguais = []
    }

    if (arrayCartasIguais.length > 2) {
        return false
    }
    arrayCartasIguais.push(card.classList[1])

    if (contador === 2) {
        if (arrayCartasIguais[0] === arrayCartasIguais[1]) {
            for (i = 0; i < id; i++) {
                clearInterval(i)
            }
            clearInterval(id)
            contador = 0
            contadorPassou++
            if (contadorPassou === 2) {
                alert(`Você ganhou em ${virouCarta} jogadas!`)
            }
        }
    }
    console.log(contador)

    virouCarta++
}
