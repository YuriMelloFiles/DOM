// ADICIONANDO EVENTOS VIA HTML

/* <h1 onclick="print()">GetElementByClass</h1>  */ 
// no index estando da forma acima, basta criar a função no JS
function print() {
  console.log('print')
}

function printAgain() {
  console.log('print again')
}



// ADICIONANDO EVENTOS VIA JAVASCRIPT DA FORMA 1

const h1 = document.querySelector('h1');
h1.addEventListener('click', print)

// ADICIONANDO EVENTOS VIA JAVASCRIPT DA FORMA 2

h1.onclick = printAgain
// ou ainda  h1.onclick = function() { escreva a função anônima aqui}





// ARGUMENTO EVENT
// Este argumento é utilizado para buscar mais informações acerca do evento.

h1.onmouseleave = function(event) {
  console.log(event)
}
