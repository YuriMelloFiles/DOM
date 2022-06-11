/* MANIPULANDO CONTEÚDO */

// textContent ou innerText
//encontrando 'h1'
const element = document.querySelector('h1')

// adicionando 'olá devs!' ao h1
element.textContent += 'olá devs!'
console.log(element.textContent)




// innerHTML
// utilizado para usar tags HTML, e não textos

const element2 = document.querySelector('p')
element2.innerHTML = '<strong> innerHTML!</strong>'


// setAttribute(y , x)
// essa ferramenta permite inserir/remover Id e classes de uma estrutura

//adicionando um ID e uma classe por exemplo:

const h2 =  document.querySelector('h2')
h2.setAttribute('id',"subtitle")
h2.setAttribute('class',"center")

//aremovendo um ID e uma classe por exemplo:

h2.removeAttribute('id')
h2.removeAttribute('class')