// Função para extrair dados de uma página e adicioná-los ao array
function extrairDados() {
    // Encontre todos os elementos <p> dentro de <div class="box">
    const elementosP = document.querySelectorAll(".box p");
  
    // Crie uma lista temporária para armazenar os dados desta página
    const dadosTemporarios = [];
  
    // Itere sobre os elementos <p> encontrados e extraia as informações
    elementosP.forEach((elemento) => {
      const strongs = elemento.querySelectorAll('strong');
      if (strongs.length >= 2) {
        const numeroCnpj = strongs[0].textContent.replace(/\D/g, ''); // Remover não numéricos
        const razaoSocial = strongs[1].textContent.trim().replace(/\s/g, '-'); // Substituir espaços por hifens
        
        const razao_1 = razaoSocial.replace(/,/g, '');
  
        // Concatenar e adicionar à lista temporária
        const dado = razao_1 + '-' + numeroCnpj; // Razão Social + CNPJ
        dadosTemporarios.push(dado);
      }
    });
  
    return dadosTemporarios;
  }
  
  
  
  // Função para limpar ou criar um array vazio no localStorage
  function limparLocalStorage() {
    localStorage.setItem('empresas_cs_dados', JSON.stringify([]));
  }
  
  // Função para adicionar dados ao array no localStorage
  function adicionarDadosAoLocalStorage(dadosTemporarios) {
    const dadosArmazenados = JSON.parse(localStorage.getItem('empresas_cs_dados'));
  
    // Iterar pelos itens em dadosTemporarios e adicioná-los individualmente
    dadosTemporarios.forEach(item => {
      dadosArmazenados.push(item);
    });
  
    localStorage.setItem('empresas_cs_dados', JSON.stringify(dadosArmazenados));
  }
  
  // Função para pular para a próxima página
  function clicarProximaPagina() {
    // Encontre o botão de próxima página com base na classe
    const botaoProximaPagina = document.querySelector('.pagination-link.pagination-next.pagination-next');
  
    // Verifique se o botão foi encontrado e não tem a classe "is-disabled"
    if (botaoProximaPagina && !botaoProximaPagina.classList.contains('is-disabled')) {
      // Simule o clique no botão "Próxima Página"
      botaoProximaPagina.click();
      return true;
    } else {
      console.log('Botão de próxima página não encontrado ou desabilitado.');
      return false; // Indique que não é mais possível clicar na próxima página
    }
  }
  
  // Função para extrair dados de todas as páginas
  async function extrairDadosDeTodasAsPaginas() {
    while (true) {
      // Extraia os dados da página atual
      const dadosDaPagina = extrairDados();
  
      // Verifique se há dados na página
      if (dadosDaPagina.length > 0) {
        // Adicione os dados da página ao array no localStorage
        adicionarDadosAoLocalStorage(dadosDaPagina);
  
        // Pule para a próxima página
        const podeProsseguir = clicarProximaPagina();
  
        if (!podeProsseguir) {
          // Pare o loop quando não for mais possível clicar na próxima página
          console.log('Extração de dados concluída.');
          break;
        }
  
        // Aguarde um tempo para a próxima página carregar
        await delay(5000); // Intervalo de 5 segundos entre as páginas (ajuste conforme necessário)
      } else {
        // Pare o loop quando não houver mais dados
        console.log('Não há mais dados para extrair.');
        break;
      }
    }
  }
  
  // Função de atraso para aguardar a próxima página carregar
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Verifique se o array no localStorage já existe e limpe se necessário
  if (!localStorage.getItem('empresas_cs_dados')) {
    limparLocalStorage();
  }
  
  // Inicie o processo de extração de dados
  //extrairDadosDeTodasAsPaginas();
  
  
  
  
  
  /////////////////////////////parte que baixa o arquivo csv /////////////////////////////////// 
  
  function criarCSV() {
      // Obtenha os dados do Local Storage
      const dadosArmazenados = JSON.parse(localStorage.getItem('empresas_cs_dados'));
  
      // Verifique se há dados no Local Storage
      if (dadosArmazenados && dadosArmazenados.length > 0) {
          // Concatene os dados em uma única string CSV
          const csvData = dadosArmazenados.join('\n');
  
          // Crie um objeto Blob com os dados CSV
          const blob = new Blob([csvData], { type: 'text/csv' });
  
          // Crie um URL para o Blob
          const csvURL = URL.createObjectURL(blob);
  
          // Crie um link de download
          const link = document.createElement('a');
          link.href = csvURL;
          link.download = 'dados.csv';
  
          // Simule um clique no link para iniciar o download
          link.click();
      } else {
          console.log('Não há dados para exportar.');
      }
  }
  
  // Chame a função para criar o arquivo CSV
  //criarCSV();