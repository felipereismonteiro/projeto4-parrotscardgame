let qtdCartas = Number(prompt("Quantas cartas você deseja?"))
let contador = 0
const cartas = document.querySelector(".cards ul")


while(qtdCartas > 14 || qtdCartas < 4 || qtdCartas%2 == 1) {
    alert("Valor insuficiente... por favor insire um número de cartas inferior a 14, superior a 4 e PAR")
    qtdCartas = Number(prompt("Quantas cartas você deseja?"))
}


while (contador < qtdCartas) {
    cartas.innerHTML = cartas.innerHTML +`<li><div class="card"><img src="img/front 1.png" alt=""></div><!--card--></li>`
    contador++
}
