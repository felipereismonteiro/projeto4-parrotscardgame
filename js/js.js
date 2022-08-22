/*  Variaveis   */
let quantidadeDeCartas = Number(prompt("Quantas cartas vc deseja?"))
let nomeAnimais = []

while (quantidadeDeCartas < 4 || quantidadeDeCartas > 14 || quantidadeDeCartas % 2 === 1) {
    alert(`Regras: 
    Validos apenas numeros entre 4 e 14, que sejam pares!!!`)
    quantidadeDeCartas = Number(prompt("Quantas cartas vc deseja?"))
}

/*  Verificações    */
if (quantidadeDeCartas === 4) {
    let contadorLoop = 0
    while (contadorLoop < quantidadeDeCartas / 2) {
        nomeAnimais.push('dog', 'cat')
        contadorLoop++
    }
} else if (quantidadeDeCartas === 6) {
    let contadorLoop = 0
    while (contadorLoop < quantidadeDeCartas / 3) {
        nomeAnimais.push('dog', 'cat', 'elephant')
        contadorLoop++
    }
} else if (quantidadeDeCartas === 8) {
    let contadorLoop = 0
    while (contadorLoop < quantidadeDeCartas / 4) {
        nomeAnimais.push('dog', 'cat', 'elephant', "parrot")
        contadorLoop++
    }
} else if (quantidadeDeCartas === 10) {
    let contadorLoop = 0
    while (contadorLoop < quantidadeDeCartas / 5) {
        nomeAnimais.push('dog', 'cat', 'elephant', "parrot", "mouse")
        contadorLoop++
    }
} else if (quantidadeDeCartas === 12) {
    let contadorLoop = 0
    while (contadorLoop < quantidadeDeCartas / 6) {
        nomeAnimais.push('dog', 'cat', 'elephant', "parrot", "mouse", "rabbit")
        contadorLoop++
    }
}

/*      Fim das verificacoes        */

let lista = document.querySelector(".cards ul")
nomeAnimais.sort(() => Math.random() - 0.5) //Embaralhando as cartas, antes de coloca-las na mesa
for (i = 0; i < quantidadeDeCartas; i++) {
    lista.innerHTML = lista.innerHTML + `
    <li>
        <div onclick="carta(this)" class="card ${nomeAnimais[i]}">
            <img src="img/front 1.png" alt="">
        </div>
    </li>
    `
}

function carta(card) {

    if (card.classList.contains('frontBird')) {
        card.classList.remove('frontBird')
    }

    //images from the back of the cards 
    if (card.classList.contains("dog")) {
        card.classList.toggle("jake")
        card.classList.toggle("rotate")
        if (card.innerHTML === "") {
            card.innerHTML = ``
        } else {
            card.innerHTML = ""
        }
    }

    if (card.classList.contains("cat")) {
        card.classList.toggle("lilcat")
        card.classList.toggle("rotate")
        if (card.innerHTML === "") {
            card.innerHTML = ``
        } else {
            card.innerHTML = ""
        }
    }

    if (card.classList.contains("parrot")) {
        card.classList.toggle("bird")
        card.classList.toggle("rotate")
        if (card.innerHTML === "") {
            card.innerHTML = ``
        } else {
            card.innerHTML = ""
        }
    }

    if (card.classList.contains("elephant")) {
        card.classList.toggle("madEl")
        card.classList.toggle("rotate")
        if (card.innerHTML === "") {
            card.innerHTML = ``
        } else {
            card.innerHTML = ""
        }
    }

    if (card.classList.contains("mouse")) {
        card.classList.toggle("mice")
        card.classList.toggle("rotate")
        if (card.innerHTML === "") {
            card.innerHTML = ``
        } else {
            card.innerHTML = ""
        }
    }

    if (card.classList.contains("rabbit")) {
        card.classList.toggle("rabb")
        card.classList.toggle("rotate")
        if (card.innerHTML === "") {
            card.innerHTML = ``
        } else {
            card.innerHTML = ""
        }
    }

    cartaClicada(card.classList[1], card)
}

//function when a card is clicked
let arraySame = []//checking if the cards clicked are the same 
let carta1
let carta2
let contadorCartas = 0
let id
function cartaClicada(cardClicked, card) {

    contadorCartas++
    
    if (contadorCartas === 3) {
        contadorCartas = 1
    } 
    if (contadorCartas === 1) {
        carta1 = card
    } else if (contadorCartas === 2) {
        carta2 = card
    }

    arraySame.push(cardClicked)
    if (arraySame.length === 2) {
        if (arraySame[0] === arraySame[1]) {
            console.log('Sao iguais')

            acertou()

            console.log(card)

            arraySame = [] //cleaning the array

        } else if (arraySame[0] !== arraySame[1]) {
            console.log('Diferentes')

            let id = setTimeout(errou, 2000)

            arraySame = [] //cleaning the array

        }
    }

}

function acertou() {
    carta1.onclick = () => {
        return false
    }

    carta2.onclick = () => {
        return false
    }
}

function errou() {

    let cardValue1 = carta1.classList[1]
    let cardValue2 = carta1.classList[2]
    let cardValue3 = carta1.classList[3]

    let card1 = carta2.classList[1]
    let card2 = carta2.classList[2]
    let card3 = carta2.classList[3]

    carta1.classList.toggle(cardValue2)
    carta1.classList.toggle(cardValue3)
    carta1.classList.toggle('frontBird')

    carta2.classList.toggle(card2)
    carta2.classList.toggle(card3)
    carta2.classList.toggle('frontBird')

    console.log('passou por aqui')

}