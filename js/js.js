let contadorQtd = 0
let contadorNome = 0
let contador = 0
let qtdCartas = Number(prompt("Quantas cartas você deseja?"))
let nomeDasCartas = ["parrot", "cat", "dog", "elephant"]
nomeDasCartas = nomeDasCartas.sort(()=> Math.random() -0.5)
const cartas = document.querySelector(".cards ul")


while(qtdCartas > 14 || qtdCartas < 4 || qtdCartas%2 == 1) {
    alert("Valor insuficiente... por favor insire um número de cartas inferior a 14, superior a 4 e PAR")
    qtdCartas = Number(prompt("Quantas cartas você deseja?"))
}


while (contadorQtd < qtdCartas || contadorNome < nomeDasCartas.length) {
    cartas.innerHTML = cartas.innerHTML +`<li><div onclick="virarCarta(this)" class="card ${nomeDasCartas[contadorNome]}"><div><img src="img/front 1.png" alt=""></div><!--card--><div/></li>`
    contadorQtd++
    contadorNome++
}

function virarCarta(card) {
    
    
    if(card.classList.contains("rotate") ) {
        return false      
    }
    if(contador > 1 ) {
        return false
    }

    contador++
    console.log(contador)

    card.classList.toggle(`rotate`)
    card.classList.toggle(`ctt${contador}`)
    card.classList.toggle("none")

    if (card.classList.contains("dog")) {
        card.classList.toggle("jake")
    }

    let id = setInterval(temporizador, 5000)

    function temporizador() {
        card.classList.toggle("rotate")
        card.classList.remove("none")
        card.classList.remove("jake")
        contador--
        clearInterval(id)
        console.log(contador)
    }

    
}


