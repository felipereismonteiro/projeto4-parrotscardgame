let contadorQtd = 0
let contadorNome = 0
let qtdCartas = Number(prompt("Quantas cartas você deseja?"))
let nomeDasCartas = ["parrot", "cat", "dog", "elephant"]
nomeDasCartas = nomeDasCartas.sort(()=> Math.random() -0.5)
const cartas = document.querySelector(".cards ul")


while(qtdCartas > 14 || qtdCartas < 4 || qtdCartas%2 == 1) {
    alert("Valor insuficiente... por favor insire um número de cartas inferior a 14, superior a 4 e PAR")
    qtdCartas = Number(prompt("Quantas cartas você deseja?"))
}


while (contadorQtd < qtdCartas || contadorNome < nomeDasCartas.length) {
    cartas.innerHTML = cartas.innerHTML +`<li><div onclick="virarCarta(this)" class="card ${nomeDasCartas[contadorNome]}"><img src="img/front 1.png" alt=""></div><!--card--></li>`
    contadorQtd++
    contadorNome++

    
}

function virarCarta(card) {
    card.classList.toggle("rotate")
    if(card.classList.contains("rotate")) {
        card.innerHTML = `<li><div onclick="virarCarta(this)" class="card ${nomeDasCartas[contadorNome]}"></div><!--card--></li>`
    } else {
        card.innerHTML = `<li><div onclick="virarCarta(this)" class="card ${nomeDasCartas[contadorNome]}"><img src="img/front 1.png" alt=""></div><!--card--></li>`
    }
}
