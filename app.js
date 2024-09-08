// Função responsável por pesquisar e exibir os resultados
function pesquisar() {
    // Obtém a referência da section que exibirá os resultados da pesquisa
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase().trim();
    console.log(section); // Exibe a section no console para debug
    console.log(campoPesquisa);
    
    // Se o campo de busca estiver vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>Por favor digite um texto para busca</p>"
        return
    }
    let resultados = ""; // Inicializa uma string vazia para acumular o HTML dos resultados
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // Itera sobre a lista de dados (presumivelmente um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.join(" ").toLowerCase()
        // se o titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.
        includes(campoPesquisa) || tags.includes
        (campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    ${dado.titulo}
                </h2>
                <p class="descricao-meta">
                    ${dado.descricao}
                </p>
                <a href= "${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }

        // Constrói o HTML para cada item da lista de dados, incluindo título, descrição e link
    }
    // Insere o HTML gerado na section, exibindo os resultados na página
    section.innerHTML = resultados;

    // Caso nenhum resultado seja encontrado, exibe uma mensagem de "Nenhum resultado"
    if (!resultados) {
        section.innerHTML = "<p>Nenhum resultado encontrado</p>";
    }
}
