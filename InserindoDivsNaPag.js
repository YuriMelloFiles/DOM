// CRIANDO E ADICIONANDO ELEMENTOS




//createElement
//criando uma div com um texto dentro
const div = document.createElement('div');
div.innerText = "Conteúdo da Div 1!"

// append / prepend
// inserindo essa div dentro do body por exemplo

// pode ser utilizado o append que iá inserir dentro do body como ultimo filho, ou o prepend que sera o primeiro filho do body.
const body = document.querySelector('body')
body.prepend(div)






/* Ja vimos como adicionar uma div sendo o primeiro filho ou o último filho de um elemento, mas e caso eu queira adicionar em um local especifico? Veremos abaixo */ 

/* insertBefore
    const.insertBefore('the object that we gonna insert', 'the base object that we will insert before')
*/
const div2 = document.createElement('div');
div2.innerText = "Conteúdo da Div 2!"

const script = body.querySelector('script')
body.insertBefore(div2,script)
