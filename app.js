
function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Inicializa uma string vazia para armazenar os resultados
    
    let campoPesquisa = document.getElementById ("campo-pesquisa").value;

  if(!campoPesquisa){
    section.innerHTML = "nenhum atleta encontrado"
    return
  };

  campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa e cria um elemento HTML para cada um
    for (let dado of dados) {
      titulo = dado.titulo.toLocaleLowerCase()
      descricao = dado.descricao.toLocaleLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
        // Cria uma nova div para um item de resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informação</a>
            </div>
        `;
      }
        
    }
if(!resultados){
resultados = "<p>Nava foi encontrado </p>"
};
    // Insere os resultados na seção HTML
    section.innerHTML = resultados;
}

// let atletaSelecionado = null;

// function pesquisar() {
//   // Seleciona os elementos HTML necessários
//   const input = document.querySelector('input[type="text"]');
//   const section = document.getElementById("resultados-pesquisa");
//   const header = document.querySelector('h1');

//   // Obtém o valor digitado no input
//   const nomePesquisado = input.value.toLowerCase();

//   // Filtra os dados para encontrar o atleta com o nome correspondente
//   const atletaEncontrado = dados.find(dado => dado.titulo.toLowerCase().startsWith(nomePesquisado));

//   // Verifica se um atleta foi encontrado
//   if (atletaEncontrado) {
//     // Limpa a seção de resultados e armazena o atleta selecionado
//     section.innerHTML = "";
//     atletaSelecionado = atletaEncontrado;

//     // Cria o elemento HTML para o resultado encontrado
//     const resultado = `
//       <div class="item-resultado">
//         <h2>
//           <a href="#" target="_blank" id="nome-atleta">${atletaEncontrado.titulo}</a>
//         </h2>
//         <p class="descricao-meta">${atletaEncontrado.descricao}</p>
//         <a href=${atletaEncontrado.link} target="_blank">Mais informação</a>
//       </div>
//     `;
//     section.innerHTML = resultado;

//     // Atualiza o título da página
//     header.textContent = `Atleta: ${atletaEncontrado.titulo}`;
//   } else {
//     // Se nenhum atleta for encontrado, exibe uma mensagem
//     section.innerHTML = "<p>Atleta não encontrado.</p>";
//     header.textContent = "Atletas do Brasil";
//     atletaSelecionado = null; // Limpa o atleta selecionado
//   }
// }

// function alterarNome() {
//     const novoNome = document.getElementById("novoNomeInput").value;
//     if (atletaSelecionado && novoNome) {
//       // Atualiza o título do atleta selecionado no array de dados
//       atletaSelecionado.titulo = novoNome;
  
//       // Atualiza a exibição na página
//       const nomeElemento = document.getElementById("nome-atleta");
  
//       // Verifica se o elemento foi encontrado
//       if (nomeElemento) {
//         nomeElemento.textContent = novoNome;
//         // Adicione uma classe para destacar a alteração (opcional)
//         nomeElemento.classList.add("nome-alterado");
//       } else {
//         console.error("Elemento com ID 'nome-atleta' não encontrado.");
//       }
  
//       // Mensagem de sucesso (opcional)
//       alert("Nome alterado com sucesso!");
//     } else {
//       alert("Selecione um atleta e digite um novo nome.");
//     }
//     const nomeElemento = document.getElementById("nome-atleta");

//   if (nomeElemento) {
//     nomeElemento.textContent = novoNome;
//     nomeElemento.classList.add("nome-alterado"); // Adiciona classe CSS para destaque
//   } else {
//     console.error("Elemento com ID 'nome-atleta' não encontrado.");
//   }
//   }

