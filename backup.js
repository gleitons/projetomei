
function criarCSV() {
    // Obtenha os dados do Local Storage
    const dadosArmazenados = JSON.parse(localStorage.getItem('empresasFavoritasPage'));
    const postIt = JSON.parse(localStorage.getItem('postIt'));
    const todosAtalhos = JSON.parse(localStorage.getItem('todosAtalhos'));
    



    // Verifique se há dados no Local Storage
    //if (dadosArmazenados && dadosArmazenados.length > 0) {
        // Concatene os dados em uma única string CSV
        //const csvData = dadosArmazenados.join('\n');
        const todosDados = dadosArmazenados + postIt + todosAtalhos
        
        const csvData = JSON.stringify([{dadosArmazenados}, {postIt}, {todosAtalhos}]);

        console.log(csvData)

        const arr = JSON.parse(csvData)

        console.log(arr)


        // Crie um objeto Blob com os dados CSV
        const blob = new Blob([csvData], { type: 'text/csv' });

        // Crie um URL para o Blob
        const csvURL = URL.createObjectURL(blob);



        // Crie um link de download
        const data = new Date()
        const dia = data.getDate()
        const mes = data.getMonth()
        const ano = data.getFullYear()
        const hora = data.getHours()
        const minuto = data.getMinutes()
        const dataCompleta = `${dia}-${mes}-${ano}_${hora}-${minuto}`
        const link = document.createElement('a');
        link.href = csvURL;

        link.download = `backup-futuro-consultoria-${dataCompleta}.csv`;
        console.log([JSON.stringify(csvURL)])


        // Simule um clique no link para iniciar o download
        link.click();
   // } else {
      //  console.log('Não há dados para exportar.');
    //}
}


//restaurar o backup
let input = document.querySelector('input[type="file"]');
    console.log(input)
    input.addEventListener('change', function () {
        let reader = new FileReader();
        reader.onload = function () {
            let lines = reader.result.split('\n').map(function (line) {
                return line.split(',');
            });
            console.log(lines);
        }
        reader.readAsText(input.files[0]);
    }, false);

// Chame a função para criar o arquivo CSV
//criarCSV();


