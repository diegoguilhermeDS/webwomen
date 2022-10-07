function renderizaVagas(lista) {
    let listaVagas = document.getElementById("lista-vagas") 
    listaVagas.innerHTML= ''

    lista.forEach(element => {
        let {id, title, enterprise, location, descrition, modalities} = element

        let cardVagas = document.createElement("li")
        cardVagas.classList.add("card-vagas")
        cardVagas.id = id

        cardVagas.innerHTML = `
             <h3 class="titulo-4">${title}</h3> 
             <div class="card-container-informacoes">
                <small class="texto-3">${enterprise}</small>
                <small class="texto-3">${location}</small>
            </div>
            <p class="texto-2">${descrition}</p>
            <div class="card-container-botao">
                <div class="container-modalidade"></div>
                <input class="botao-card" type="button" value="Candidatar" onclick="candidatar(event)">
            </div>
        `
        adicionaModalidadeCard(modalities, cardVagas)
        
        listaVagas.appendChild(cardVagas)
    });
}


function adicionaModalidadeCard(lista, card) {
    let caminho = card.children[3].children[0]

    lista.forEach(element => {
        let botaoCategoria = document.createElement("span")
        botaoCategoria.classList.add("botao-categoria")

        botaoCategoria.innerText = element

        caminho.appendChild(botaoCategoria)
    })
}


function renderizaVagasSelecionadas(lista) {
    let listaVagasSelecionadas = document.getElementById("lista-vagas-selecionadas")

    listaVagasSelecionadas.innerHTML = ''

    if (lista.length > 0) {
        lista.forEach(element => {
            let {id, title, enterprise, location} = element
            
            let cardVagaSelecionada = document.createElement("li")
            cardVagaSelecionada.classList.add("card-vaga-selecionada")
            cardVagaSelecionada.id = id

            cardVagaSelecionada.innerHTML = `
            <div class="card-vaga-selecionada-titulo">
                <h4>${title}</h4>
                <button class="botao-lixeira" onclick="removerVaga(event)"><img src="../../assets/img/trash.png" alt="imagem da lixeira"></button>
            </div>
            <div class="card-vaga-selecionada-info">
                <small class="texto-3">${enterprise}</small>
                <small class="texto-3">${location}</small>
            </div>
            `

            listaVagasSelecionadas.appendChild(cardVagaSelecionada)
        })
    } else {
        let cardVagaVazia = document.createElement("li")
        cardVagaVazia.classList.add("card-vaga-vazia")

        cardVagaVazia.innerHTML = `
            <p class="texto-2">Você ainda não aplicou para nenhuma vaga</p>
            <div class="container-objetos">
                <div class="objeto-card-1"></div>
                <div class="objeto-card-1 objeto-card-2"></div>
                <div class="objeto-card-3">
                    <div class="caixa-1"></div>
                    <div class="caixa-1 caixa-2"></div>
                    <div class="caixa-1 caixa-3"></div>
                </div>
            </div>
        `

        listaVagasSelecionadas.appendChild(cardVagaVazia)
    }
}

renderizaVagasSelecionadas(pegarItensLocalStorage())
renderizaVagas(jobsData)

