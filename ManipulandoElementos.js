// getElementById()

const element = document.getElementById('blog-title')
console.log(element)

// getElementByClassName()
// normalmente trará mais de um elemento

const element2 = document.getElementsByClassName('one')
console.log(element2)

// getElementsByTagName()

const element3 = document.getElementsByTagName('h1')
console.log(element3)

/* querySelector()
 utilizado para pegar qualquer coisa, contudo ele pega a primeira vez em que esse elemento aparece.
 Ex: querySelector('.one')  pegando o primeiro elemento com classe = one
*/
const element4 = document.querySelector('h1')
console.log(element4)

/* querySelectorAll()
 utilizado igualmente o getElementByClassName() por exemplo, pois ele também pode buscar todos os elementos em que a possuem a classe, contudo, tem uma vantagem. A vantagem é que poderá ser usado juntamente ao forEach para percorrer os elementos encontrados.
*/

const element5 = document.querySelectorAll('.one')
element5.forEach(el => console.log(el))
