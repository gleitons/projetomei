document.querySelectorAll('nav')[0].innerHTML = `
<li> <a href="./index.html">Inicio</a></li>
<li><a href="./cadastro.html">Cadastro</a></li>
<li><a href="./emitir.html">Emitir</a></li>
<li><a href="./diaria.html">Diária</a></li>
<li> <a href="/">Página Principal</a></li>
<li> <a href="/">Backup</a></li>`



if (localStorage.getItem('servidores') == null) {
   const servidoresMunicipais = []
   const funcionario = {
        "id": "1",
        "nome": "Gleiton Aparecido Soares de Souza",
        "cpf": "08303020692",
        "matricula": "251",
        "banco": "Sicoob",
        "tipoConta": "pp",
        "codagencia": "0001",
        "agencia": "3144",
        "conta": "60.254.655",
        "departamento": "tributário",
        "cargo": "Agente de Desenvolvimento",
        "endereco": "Avenida Presidente Medici",
        "numero": "235",
        "bairro": "centro",
    }
    servidoresMunicipais.push(funcionario)
    localStorage.setItem('servidores', JSON.stringify(servidoresMunicipais))
} 

function verCadastro() {   
    const verificaCadastro = document.querySelector('#verificaCadastro').value;
    const mostraDados = document.querySelector('#mostraDados')
    const dadosServidor = JSON.parse(localStorage.getItem('servidores'))
    const btnContinuar = document.querySelector('#btnContinuar')
    const codServidor = document.querySelector('#codServidor')
    var btnenviarDados = document.querySelector('#btnenviarDados')
    btnContinuar.remove()

    dadosServidor.map((dadosServidorMunicipal) => {

        if (verificaCadastro == dadosServidorMunicipal.cpf) {
            
            const coddoServidor = dadosServidorMunicipal.id
            mostraDados.classList.remove('dnone')

            codServidor.value = coddoServidor
            idNome.value = dadosServidorMunicipal.nome            
            idNumero.value = dadosServidorMunicipal.nome
            idEndereco.value = dadosServidorMunicipal.endereco
            idNumero.value = dadosServidorMunicipal.numero

            idBairro.value = dadosServidorMunicipal.bairro
            idMatricula.value = dadosServidorMunicipal.matricula
            idCargo.value = dadosServidorMunicipal.cargo

            idBanco.value = dadosServidorMunicipal.banco
            idAgencia.value = dadosServidorMunicipal.agencia
            idConta.value = dadosServidorMunicipal.conta
            btnenviarDados.innerHTML = ''
            const botaoEnvia = document.createElement('button')
            botaoEnvia.setAttribute('id', 'cadastrarOuAtualizar')
            botaoEnvia.setAttribute('onclick', `atualizaSer(${coddoServidor})`)
            botaoEnvia.textContent = 'Atualizar'

            btnenviarDados.appendChild(botaoEnvia)
            
           

        } else {
            codServidor.value = JSON.parse(localStorage.getItem('servidores')).length + 1
            mostraDados.classList.remove('dnone')

            btnenviarDados.innerHTML = ''

            const botaoEnvia = document.createElement('button')
            botaoEnvia.setAttribute('id', 'cadastrarOuAtualizar')
            botaoEnvia.setAttribute('onclick', `cadastroSer(${dadosServidorMunicipal.id + 1})`)
            botaoEnvia.textContent = 'Cadastrar'

            btnenviarDados.appendChild(botaoEnvia)
            console.log(botaoEnvia)
        }
    })
    console.log(dadosServidor)
}
function adiconarMatricula() {

    idMatricula.value = 2351
    const fundoMatricula = document.querySelector('#fundoMatricula')
    fundoMatricula.classList.toggle('dnone')
}

function cadastroSer() {
    const codServidor = document.querySelector('#codServidor').value 
    const verificaCadastro = document.querySelector('#verificaCadastro').value
    const idNome = document.querySelector('#idNome').value
    const idNumero = document.querySelector('#idNumero').value
    const idBairro = document.querySelector('#idBairro').value
    const idMatricula = document.querySelector('#idMatricula').value
    const idCargo = document.querySelector('#idCargo').value
    const idBanco = document.querySelector('#idBanco').value
    const idAgencia = document.querySelector('#idAgencia').value
    const idConta = document.querySelector('#idConta').value
   
    const funcionario = {
        "id": codServidor,
        "nome": idNome,
        "cpf": verificaCadastro,
        "matricula": idMatricula,
        "banco": idBanco,
        "tipoConta": "pp",
        "codagencia": "0001",
        "agencia": idAgencia,
        "conta": idConta,
        "departamento": "tributário",
        "cargo": idCargo,
        "endereco": "Avenida Presidente Medici",
        "numero": idNumero,
        "bairro": idBairro
    }
    atualizarServidor.push(funcionario)
    console.log(atualizarServidor)
    localStorage.setItem('servidores', JSON.stringify(atualizarServidor))
}


function atualizaSer(num) {
    const codServidor = document.querySelector('#codServidor').value 
    const verificaCadastro = document.querySelector('#verificaCadastro').value
    const idNome = document.querySelector('#idNome').value
    const idNumero = document.querySelector('#idNumero').value
    const idBairro = document.querySelector('#idBairro').value
    const idMatricula = document.querySelector('#idMatricula').value
    const idCargo = document.querySelector('#idCargo').value
    const idBanco = document.querySelector('#idBanco').value
    const idAgencia = document.querySelector('#idAgencia').value
    const idConta = document.querySelector('#idConta').value
    
    const atualizarServidor = JSON.parse(localStorage.getItem('servidores'))[num-1];

    console.log(atualizarServidor.id)
    atualizarServidor.id = codServidor
    atualizarServidor.nome = idNome
    const funcionario = {
        "id": atualizarServidor.id,
        "nome": idNome,
        "cpf": verificaCadastro,
        "matricula": idMatricula,
        "banco": idBanco,
        "tipoConta": "pp",
        "codagencia": "0001",
        "agencia": idAgencia,
        "conta": idConta,
        "departamento": "tributário",
        "cargo": idCargo,
        "endereco": "Avenida Presidente Medici",
        "numero": idNumero,
        "bairro": idBairro
    }
    //atualizarServidor.slice(funcionario)
    console.log(atualizarServidor.nome)
    //localStorage.setItem('servidores', JSON.stringify(atualizarServidor))
}