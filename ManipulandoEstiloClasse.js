// Usaremos basicamente o classList

const element = document.querySelector('body')

//adicionando duas classes
element.classList.add('active', 'green')
//removendo uma das classes
element.classList.remove('green')

// utilizando o toggle:
// o toggle funciona como um interruptor, ele vê se ja estava ativo ou desativo e faz o contrário. Por exemplo, se a classe estiver ativa ele desativa, e vice versa.
element.classList.toggle('green')

// note que a classe green estava desativada pois usamos o remove anteriormente, com isso , o toggle ativou.