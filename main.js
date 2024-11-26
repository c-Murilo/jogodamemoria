const cards = document.querySelectorAll('.card-game')
const imgDesvirada = document.querySelectorAll('.desvirada')
const imgVirada = document.querySelectorAll('.virada')
const contador = document.querySelector('#contador1')
const tentativa = document.querySelector('#tentativas')
var soma = 0
var somaTentativas = 0
const name = document.querySelector('.name')
const nome = document.querySelector('.nome')







function abrirEfechar(event) {

    const card = event.currentTarget;


    const imgDesvirada = card.querySelector('.desvirada');
    const imgVirada = card.querySelector('.virada');


    if (imgDesvirada.style.display === 'none' || imgDesvirada.style.display === '') {
        imgDesvirada.style.display = 'flex'
        imgVirada.style.display = 'none'
    } else {
        imgDesvirada.style.display = 'none'
        imgVirada.style.display = 'flex'
    }
}


function verificar() {

    var numbers = [];
    var ind = []
    let n1 = 0
    let n2 = 0





    imgVirada.forEach((card, index) => {


        if (card.style.display === 'flex') {
            numbers.push(card)
            ind.push(index)


        }


    })
    if (numbers.length >= 2) {
        n1 = ind[0]
        n2 = ind[1]


        if (imgVirada[n1].src === imgVirada[n2].src) {


            console.log(ind[0])
            cards[n1].style.display = 'none'
            cards[n2].style.display = 'none'
            imgVirada[n1].style.display = 'none'
            imgDesvirada[n1].style.display = 'none'
            imgVirada[n2].style.display = 'none'
            imgDesvirada[n2].style.display = 'none'

            ind.splice(0, ind.length)
            numbers.splice(0, numbers.length)
            soma += 2
            somaTentativas += 1
            tentativa.innerHTML = somaTentativas
            contador.innerHTML = soma





        } else{
            imgVirada[n1].style.display = 'none'
            imgDesvirada[n1].style.display = 'flex'
            imgVirada[n2].style.display = 'none'
            imgDesvirada[n2].style.display = 'flex'
            ind.splice(0, ind.length)
            numbers.splice(0, numbers.length)
            somaTentativas += 1
            tentativa.innerHTML = somaTentativas

        }


    }
}


function acabou() {
  if(soma >= 8){
      alert("Você Ganhou")
  }
}

function embaralhar() {

    cards.forEach(card => {

        card.style.order = Math.floor(Math.random() * cards.length).toString();
    });
}
cards.forEach(card => {
    card.addEventListener('click', abrirEfechar);
    card.addEventListener('click', () => {
        setTimeout(() => {
            verificar();
        }, 1500);
    });
    card.addEventListener('click',acabou)
});

embaralhar()
embaralhar()
embaralhar()
