
// ACHANDO O ELEMENTO PAI
// parentNode / parentElement 
const element = document.querySelector('h1')
console.log(element.parentNode)


// ACHANDO O ELEMENTO FILHO
// childNodes / children 
// obs: para achar todos os filhos, normalmente será melhor usar o children, pois ele não interpreta espaços entre as tags como elemento.
const element2 = document.querySelector('body')
console.log(element2.children)
// pegando apenas o primeiro filho 
const element3 = document.querySelector('body')
console.log(element3.firstElementChild)



// ACHANDO O ELEMENTO IRMÃO

// PARA ACHAR O PRÓXIMO ELEMENTO QUE SEJA IRMÃO: nextElementSibling
const element4 = document.querySelector('h2')
console.log(element4.nextElementSibling)

// PARA ACHAR O ELEMENTO ANTERIOR QUE SEJA IRMÃO: previousElementSibling
const element5 = document.querySelector('h2')
console.log(element5.previousElementSibling)