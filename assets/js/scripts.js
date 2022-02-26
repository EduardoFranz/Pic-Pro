//adicionar id nos botoes(4 botoes) **
//selecionar os botões
//interceptar o evento de clique
//recuperar o id adicionado

const listaOpcoes = document.querySelector(
  '.secaoDetalhesConta_opcoesTransacoes'
)
//adicionando escutador de eventos
listaOpcoes.addEventListener('click', identificaOpcoes)

//executando ação depois do click
function identificaOpcoes(event) {
  //identificando onde ocorre o clique(event.target)
  const li = event.target

  //verificando se é um LI
  if (li.tagName == 'LI') {
    //recuperando o id
    const id = li.id

    //selecionando uma selçao utilizando id(escolha do usuario)
    const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

    //removendo classe mostrar
    removeClassMostrar()

    //adicionar uma classe
    secaoEscolha.classList.add('mostrar')
  }
}

//função para remoer as classe das divs
function removeClassMostrar() {
  const divs = document.querySelectorAll('.secaoTransacao .container div')

  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.remove('mostrar')
  }
}
