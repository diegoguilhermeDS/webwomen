/* Desenvolva sua lógica aqui... */
function indetificandoAlterandoValorBotao() {
    let vagasSelecionadas = pegarItensLocalStorage()
    let listaVagasFilhos = Array.from(document.querySelector(".lista-vagas").children)

    listaVagasFilhos.map(elemento => {
        let { id } = elemento
        let botaoDoElementoAtual = elemento.children[3].children[1]
        
        vagasSelecionadas.find(elemento => {
            if (elemento.id === +id) {
                botaoDoElementoAtual.value = "Remover candidatura"
            }
        })
    })

}

indetificandoAlterandoValorBotao()