/*  Variaveis   */
let quantidadeDeCartas = Number(prompt("Quantas cartas vc deseja?"))
let nomeAnimais = []
/*  Verificações    */

if (quantidadeDeCartas === 4) {
    let contadorLoop = 0
    while (contadorLoop < quantidadeDeCartas / 2) {
        nomeAnimais.push('dog', 'cat')
        contadorLoop++
    }
} else if ((quantidadeDeCartas / 2) % 2 === 1) {
    let contadorLoop = 0
    while (contadorLoop < quantidadeDeCartas / 2) {
        nomeAnimais.push('dog', 'cat')
        contadorLoop++
    }
} else {
    let contadorLoop = 0
    while (contadorLoop < quantidadeDeCartas / 4) {
        nomeAnimais.push('dog', 'cat', 'parrot', 'elephant')
        contadorLoop++
    }
}

while (quantidadeDeCartas < 4 || quantidadeDeCartas > 14 || quantidadeDeCartas % 2 === 1) {
    alert(`Regras: 
    Validos apenas numeros entre 4 e 14, que sejam pares!!!`)
    quantidadeDeCartas = prompt("Quantas cartas vc deseja?")
}

/*      Fim das verificacoes        */

let lista = document.querySelector(".cards ul")

for (i = 0; i < quantidadeDeCartas; i++) {
    nomeAnimais.sort(() => Math.random() - 0.5)
    lista.innerHTML = lista.innerHTML + `
    <li>
        <div onclick="cartaClicada(this)" class="card ${nomeAnimais[i]}"><img src="img/front 1.png" alt=""></div>
    </li>
    `
}

function cartaClicada() {
    alert("clicou")
}

console.log()