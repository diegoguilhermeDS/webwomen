function pegarItensLocalStorage() {
    return JSON.parse(localStorage.getItem("@VagasSelecionadas")) || []
}

function candidatar(event) {
    let caminhoDoEvento = event.path[0]
    let idCard = event.path[2].id

    let cardSelecionado = jobsData.find(elemnto => elemnto.id === +idCard)

    let vagasSelecionadas = pegarItensLocalStorage()

    if (caminhoDoEvento.value === "Remover candidatura") {
        caminhoDoEvento.value = "Candidatar"
        
        let cardRemoverSelecionado = vagasSelecionadas.findIndex(elemento => elemento.id === +idCard)

        vagasSelecionadas.splice(cardRemoverSelecionado, 1)
        renderizaVagasSelecionadas(vagasSelecionadas)
    } else {
        caminhoDoEvento.value = "Remover candidatura"

        if (!vagasSelecionadas.includes(cardSelecionado)) {
            vagasSelecionadas.push(cardSelecionado)
            renderizaVagasSelecionadas(vagasSelecionadas)
        }
    } 
    
    localStorage.setItem("@VagasSelecionadas", JSON.stringify(vagasSelecionadas))
}   

function removerVaga(event) {
    let idCard = ''

    idCard = event.path[2].className === "card-vaga-selecionada" ? event.path[2].id : event.path[3].id;
    
    let vagasSelecionadas = pegarItensLocalStorage()
    let listaVagas = Array.from(document.getElementById("lista-vagas").children) 

    vagasSelecionadas.map(elemento => {
        if (elemento.id === +idCard) {
            let botaoVaga = listaVagas[+idCard].children[3].children[1]
            botaoVaga.value = "Candidatar"

            let cardRemoerSelecionado = vagasSelecionadas.findIndex(elemento => elemento.id === +idCard)
            
            vagasSelecionadas.splice(cardRemoerSelecionado, 1)
            renderizaVagasSelecionadas(vagasSelecionadas)
        }
        
    })

    localStorage.setItem("@VagasSelecionadas", JSON.stringify(vagasSelecionadas))
}

