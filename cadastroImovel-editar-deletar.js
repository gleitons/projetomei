if (localStorage.getItem('enderecos') == null) {
    localStorage.setItem('enderecos', '[]')
}
if (localStorage.getItem('cadastroPessoal') == null) {
    localStorage.setItem('cadastroPessoal', '[]')
}
if (localStorage.getItem('cadastroImovel') == null) {
    localStorage.setItem('cadastroImovel', '[]')
}
if (localStorage.getItem('contratosETermos') == null) {
    localStorage.setItem('contratosETermos', '[]')
}

function selecionaTipoImovel() {
    const imSel = document.querySelector('#imovelSelect')
    const imovelSelecionado = imSel.selectedIndex
    abreInfoImovel.style.display = 'block'

    if (imovelSelecionado == 0) {
        ShowImovelUrbano.style.display = 'block'
        ShowImovelRural.style.display = 'none'
    } else if (imovelSelecionado == 1) {
        ShowImovelUrbano.style.display = 'none'
        ShowImovelRural.style.display = 'block'
    }
    else {
        abreInfoImovel.style.display = 'none'
    }

}

function outroEstado() {
    const estadoCivilP = document.querySelector('#estadoCivilP').selectedIndex
    if (estadoCivilP == 5) {
        document.querySelector('.estadoCivil input').style.display = "block"
    } else {
        document.querySelector('.estadoCivil input').style.display = "none"
    }
}

function meioPagamentoLinha() {
    const meios = document.querySelector('select#meioPag').selectedIndex

    if (meios == 3) {
        outroMeioDePagamento.style.display = 'block'
    } else {
        outroMeioDePagamento.style.display = 'none'
    }

}

function enderecoCadastrado() {
    const data = JSON.parse(localStorage.getItem('enderecos'))
    const enderecoCadastrados = document.querySelector('select#enderecosCadastrados')

    enderecoCadastrados.innerHTML = ` <option>Selecione</option>`


    data.map((e) => {
        const criaOption = document.createElement('option')
        criaOption.textContent = `${e.endereco.toUpperCase()} - ${e.numero} - ${e.bairro.toUpperCase()}`

        enderecoCadastrados.appendChild(criaOption)
    })

}


if (document.querySelector('#enderecosCadastrados') != null) {
    enderecoCadastrado()
}

function preencheCadastroEndereco() {
    const data = JSON.parse(localStorage.getItem('enderecos'))
    const indiceEndereco = document.querySelector('select#enderecosCadastrados').selectedIndex
    const i = indiceEndereco - 1
    const enderecoSelect = 0
    bairroImovel.value = data[i].bairro
    numeroImovel.value = data[i].numero
    enderecoImovel.value = data[i].endereco
    cepImovel.value = data[i].cep
    cidadeImovel.value = data[i].cidade
    estadoImovel.value = data[i].estado
}



function cadastrarEndereco() {

    const enderecoSelecionados = document.querySelector('#enderecoSelecionado')
    const enderecoSelecionado = enderecoSelecionados.options[enderecoSelecionados.selectedIndex].textContent

    if (enderecoSelecionado == 'Urbano') {
        cadastroUrbano(enderecoSelecionado)
    } else if (enderecoSelecionado == 'Rural') {
        cadastroRural(enderecoSelecionado)
    } else {
        enderecoSelecionados.classList.add('atention')
    }
    confirmacaoDeSucesso()
}
function showEnderecoCadastro() {
    const enderecoSelecionados = document.querySelector('#enderecoSelecionado')
    const enderecoSelecionado = enderecoSelecionados.options[enderecoSelecionados.selectedIndex].textContent


    if (enderecoSelecionado == 'Urbano') {
        mostraShowC.style.visibility = 'visible'
        cadastroRUrbano.style.visibility = 'visible'
        cadastroRRural.style.visibility = 'hidden'
        enderecoSelecionados.classList.remove('atention')
    } else if (enderecoSelecionado == 'Rural') {
        mostraShowC.style.visibility = 'visible'
        cadastroRUrbano.style.visibility = 'hidden'
        cadastroRRural.style.visibility = 'visible'
        enderecoSelecionados.classList.remove('atention')
        numeroEndereco.value = 'S/N'
    } else {
        mostraShowC.style.visibility = 'hidden'
        cadastroRRural.style.visibility = 'hidden'
        cadastroRUrbano.style.visibility = 'hidden'
    }
}
function cadastroRural(rural) {
    const arrayEndereco = JSON.parse(localStorage.getItem('enderecos'))
    const comunidade = document.querySelector('#comunidade').value
    const fazenda = document.querySelector('#fazenda').value
    const numeroEndereco = document.querySelector('#numeroEndereco').value
    const cepEndereco = document.querySelector('#cepEndereco').value
    const cidadeEndereco = document.querySelector('#cidadeEndereco').value
    const estadoEndereco = document.querySelector('#estadoEndereco').value

    const enderecosCadastrados = {
        "id": arrayEndereco.length + 1,
        "imovel": rural,
        "endereco": comunidade,
        "numero": numeroEndereco,
        "bairro": fazenda,
        "cep": cepEndereco,
        "cidade": cidadeEndereco,
        "estado": estadoEndereco
    }
    arrayEndereco.push(enderecosCadastrados)
    localStorage.setItem('enderecos', JSON.stringify(arrayEndereco))
}
function cadastroUrbano(urbano) {

    const arrayEndereco = JSON.parse(localStorage.getItem('enderecos'))
    const endereco = document.querySelector('#endereco').value
    const numeroEndereco = document.querySelector('#numeroEndereco').value
    const bairroEndereco = document.querySelector('#bairroEndereco').value
    const cepEndereco = document.querySelector('#cepEndereco').value
    const cidadeEndereco = document.querySelector('#cidadeEndereco').value
    const estadoEndereco = document.querySelector('#estadoEndereco').value

    const enderecosCadastrados = {
        "id": arrayEndereco.length + 1,
        "imovel": urbano,
        "endereco": endereco,
        "numero": numeroEndereco,
        "bairro": bairroEndereco,
        "cep": cepEndereco,
        "cidade": cidadeEndereco,
        "estado": estadoEndereco
    }
    arrayEndereco.push(enderecosCadastrados)
    localStorage.setItem('enderecos', JSON.stringify(arrayEndereco))

}

function cpfGerador() {
    const cpfGeradore = document.querySelector('#cpfGerado')
    const idGerador = cpfGeradore.value.length

    if (idGerador == 3) {
        cpfGeradore.value = `${cpfGeradore.value}.`
    } else if (idGerador == 7) {
        cpfGeradore.value = `${cpfGeradore.value}.`
    } else if (idGerador == 11) {
        cpfGeradore.value = `${cpfGeradore.value}-`
    } else if (idGerador == 14) {
        cpfGeradore.value = `${cpfGeradore.value}`
    } else {
        cpfGeradore.placeholder = 'Insira o CPF'
    }

}
function cnpjGerador() {
    const cpfGeradore = document.querySelector('#cnpjGerado')
    const idGerador = cpfGeradore.value.length

    if (idGerador == 2) {
        cpfGeradore.value = `${cpfGeradore.value}.`
    } else if (idGerador == 6) {
        cpfGeradore.value = `${cpfGeradore.value}.`
    } else if (idGerador == 10) {
        cpfGeradore.value = `${cpfGeradore.value}/`
    } else if (idGerador == 15) {
        cpfGeradore.value = `${cpfGeradore.value}-`
    } else {
        cpfGeradore.placeholder = 'Insira o CPF'
    }
}

function seFisicaOuJuridica() {
    const tipoDePessoas = document.querySelector('#tipoDePessoa')
    const tipoDePessoa = tipoDePessoas.options[tipoDePessoas.selectedIndex].textContent
    if (tipoDePessoa == 'Física') {
        cPessoal.style.display = 'block'
        seCPF.style.display = 'block'
        seCNPJ.style.display = 'none'
    } else if (tipoDePessoa == 'Juridica') {
        cPessoal.style.display = 'block'
        seCPF.style.display = 'none'
        seCNPJ.style.display = 'block'
    } else {
        cPessoal.style.display = 'none'
    }
}

function cadastroPessoal() {
    const tipoDePessoas = document.querySelector('#tipoDePessoa')
    const tipoDePessoa = tipoDePessoas.options[tipoDePessoas.selectedIndex].textContent
    if (tipoDePessoa == 'Física') {
        cadastroPessoaFisica(tipoDePessoa)

    } else if (tipoDePessoa == 'Juridica') {
        cadastroPessoaJuridica(tipoDePessoa)
    } else {

    }

}
function loadTodasEmpresas() {
    
    const todosCadastros = JSON.parse(localStorage.getItem('cadastroPessoal'))
    const carregaTodoPessoal = document.querySelector('select#carregaTodasEmpresas')

    todosCadastros.map((e) => {
        if (e.tipo == 'Juridica') {
            const opt = document.createElement('option')
            opt.textContent = e.id + ' - ' + e.nome + ' - ' + e.cpf
            carregaTodoPessoal.appendChild(opt)
        }

    })
}
function loadTodoPessoal() {
    const todosCadastros = JSON.parse(localStorage.getItem('cadastroPessoal'))
    const carregaTodoPessoal = document.querySelector('select#carregaTodoPessoal')

    todosCadastros.map((e) => {
        if (e.tipo == 'Física') {
            const opt = document.createElement('option')
            opt.textContent = e.id + ' - ' + e.nome + ' - ' + e.cpf
            carregaTodoPessoal.appendChild(opt)  
        }      

    })
}
function carregaTodosDadosEmpresa() {
    const todosCadastros = JSON.parse(localStorage.getItem('cadastroPessoal'))
    

    const loadTrue = document.querySelector('select#carregaTodasEmpresas')
    const pegaLoadTrue = loadTrue.options[loadTrue.selectedIndex].textContent.split(' -')[0].replace(/[A-Z]/gi,'')
    const carregaTodoPessoal = parseInt(pegaLoadTrue.replace(/ /g, '').replace(/\n/gi,'')) - 1

    
    idPessoal.value = todosCadastros[carregaTodoPessoal].id
    
    cnpjRazao.value = todosCadastros[carregaTodoPessoal].nome
    cnpjNomeFantasia.value = todosCadastros[carregaTodoPessoal].genero     
    cnpjGerado.value = todosCadastros[carregaTodoPessoal].cpf
    cnpjAtividadeComercial.value = todosCadastros[carregaTodoPessoal].estadoCivil
    nacionalidadeGerado.value = todosCadastros[carregaTodoPessoal].nacionalidade
    cpfIdentidade.value = todosCadastros[carregaTodoPessoal].identidade
    bairroImovel.value = todosCadastros[carregaTodoPessoal].bairro
    enderecoImovel.value = todosCadastros[carregaTodoPessoal].endereco
    numeroImovel.value = todosCadastros[carregaTodoPessoal].numero
    cepImovel.value = todosCadastros[carregaTodoPessoal].cep
    cidadeImovel.value = todosCadastros[carregaTodoPessoal].cidade
    estadoImovel.value = todosCadastros[carregaTodoPessoal].estado

    const inp = document.querySelectorAll('select')
    for (let index = 1; index < inp.length; index++) {
        inp[index].style.border = 'red solid 2px'

    }
}



function carregaTodosDadosPessoal() {
    // const todosCadastros = JSON.parse(localStorage.getItem('cadastroPessoal'))
    // const carregaTodoPessoal = document.querySelector('select#carregaTodoPessoal').selectedIndex - 1
    const todosCadastros = JSON.parse(localStorage.getItem('cadastroPessoal'))
    const loadTrue = document.querySelector('select#carregaTodoPessoal')
    const pegaLoadTrue = loadTrue.options[loadTrue.selectedIndex].textContent.split(' -')[0].replace(/[A-Z]/gi,'')
    const carregaTodoPessoal = parseInt(pegaLoadTrue.replace(/ /g, '').replace(/\n/gi,'')) - 1
    //
    

   



    idPessoal.value = todosCadastros[carregaTodoPessoal].id
    cpfNome.value = todosCadastros[carregaTodoPessoal].nome
    cpfGerado.value = todosCadastros[carregaTodoPessoal].cpf
    profissaoGerado.value = todosCadastros[carregaTodoPessoal].profissao
    nacionalidadeGerado.value = todosCadastros[carregaTodoPessoal].nacionalidade
    cpfIdentidade.value = todosCadastros[carregaTodoPessoal].identidade
    bairroImovel.value = todosCadastros[carregaTodoPessoal].bairro
    enderecoImovel.value = todosCadastros[carregaTodoPessoal].endereco
    numeroImovel.value = todosCadastros[carregaTodoPessoal].numero
    cepImovel.value = todosCadastros[carregaTodoPessoal].cep
    cidadeImovel.value = todosCadastros[carregaTodoPessoal].cidade
    estadoImovel.value = todosCadastros[carregaTodoPessoal].estado

    const inp = document.querySelectorAll('select')
    for (let index = 1; index < inp.length; index++) {
        inp[index].style.border = 'red solid 2px'

    }
}
if (document.querySelector('select#carregaTodoPessoal') != undefined) {
    loadTodoPessoal()

}
if (document.querySelector('select#carregaTodasEmpresas') != undefined) {
    loadTodasEmpresas()
}


function editarEmpresa() {
    const todosCadastros = JSON.parse(localStorage.getItem('cadastroPessoal'))
    const cpfGeneros = document.querySelector('#cpfGenero')
    
    const idItem = parseInt(document.querySelector('#idPessoal').value)
    const objetoParaEditar = todosCadastros.find(usuario => usuario.id == idItem);
    const cnpj = document.querySelector('#cnpjGerado').value

    const razao = document.querySelector('#cnpjRazao').value
   
   
    
    if (objetoParaEditar) {
            objetoParaEditar.id = idPessoal.value,
            objetoParaEditar.tipo = "Juridica",
            objetoParaEditar.cpf = cnpj,
            objetoParaEditar.nome = cnpjRazao.value,
            objetoParaEditar.genero = cnpjAtividadeComercial.value,
            objetoParaEditar.estadoCivil = cnpjNomeFantasia.value,
            objetoParaEditar.endereco = enderecoImovel.value,
            objetoParaEditar.bairro = bairroImovel.value,
            objetoParaEditar.numero = numeroImovel.value,
            objetoParaEditar.cep = cepImovel.value,
            objetoParaEditar.cidade = cidadeImovel.value,
            objetoParaEditar.estado = estadoImovel.value


        localStorage.setItem('cadastroPessoal', JSON.stringify(todosCadastros))
        confirmacaoDeSucesso()
    } else {
        alert('ERRO - cadastro não encontrado')
    }
}


function editarPessoal() {
    const todosCadastros = JSON.parse(localStorage.getItem('cadastroPessoal'))
    const cpfGeneros = document.querySelector('#cpfGenero')
    const cpfGenero = cpfGeneros.options[cpfGeneros.selectedIndex].textContent
    const estadoCivilPs = document.querySelector('#estadoCivilP')
    const estadoCivilP = estadoCivilPs.options[estadoCivilPs.selectedIndex].textContent
    const idItem = parseInt(document.querySelector('#idPessoal').value)
    const objetoParaEditar = todosCadastros.find(usuario => usuario.id == idItem);
   
    if (objetoParaEditar) {

            objetoParaEditar.id = idPessoal.value,
            objetoParaEditar.tipo = "Física",
            objetoParaEditar.cpf = cpfGerado.value,
            objetoParaEditar.nome = cpfNome.value,
            objetoParaEditar.profissao = profissaoGerado.value,
            objetoParaEditar.nacionalidade = nacionalidadeGerado.value,
            objetoParaEditar.genero = cpfGenero,
            objetoParaEditar.estadoCivil = estadoCivilP,
            objetoParaEditar.identidade = cpfIdentidade.value,
            objetoParaEditar.endereco = enderecoImovel.value,
            objetoParaEditar.bairro = bairroImovel.value,
            objetoParaEditar.numero = numeroImovel.value,
            objetoParaEditar.cep = cepImovel.value,
            objetoParaEditar.cidade = cidadeImovel.value,
            objetoParaEditar.estado = estadoImovel.value


        localStorage.setItem('cadastroPessoal', JSON.stringify(todosCadastros))
        confirmacaoDeSucesso()
    } else {
        alert('ERRO - cadastro não encontrado')
    }
}


function selecionaEstadoCivil() {
    const estadoC = document.querySelector('select#cpfGenero').selectedIndex
    const tipoEstadoC = document.querySelector('select#estadoCivilP')

    if (estadoC <= 1) {
        tipoEstadoC.innerHTML = ` <option>solteiro</option>
        <option>casado</option>
        <option>divorciado</option>
        <option>viúvo</option>
        <option>outro</option>`
        nacionalidadeGerado.value = 'brasileiro'
    } else {
        tipoEstadoC.innerHTML = `<option>solteira</option>
        <option>casada</option>
        <option>divorciada</option>
        <option>viúva</option>
        <option>outra</option>`
        nacionalidadeGerado.value = 'brasileira'
    }

}
function cadastroPessoaFisica(fisica) {
    const todosCadastros = JSON.parse(localStorage.getItem('cadastroPessoal'))
    const cpfGeneros = document.querySelector('#cpfGenero')
    const cpfGenero = cpfGeneros.options[cpfGeneros.selectedIndex].textContent

    const estadoCivilPs = document.querySelector('#estadoCivilP')
    const estadoCivilP = estadoCivilPs.options[estadoCivilPs.selectedIndex].textContent

    const pessoaFisica = {
        "id": todosCadastros.length + 1,
        "tipo": fisica,
        "cpf": cpfGerado.value,
        "nome": cpfNome.value,
        "profissao": profissaoGerado.value,
        "nacionalidade": nacionalidadeGerado.value,
        "genero": cpfGenero,
        "estadoCivil": estadoCivilP,
        "identidade": cpfIdentidade.value,
        "endereco": enderecoImovel.value,
        "bairro": bairroImovel.value,
        "numero": numeroImovel.value,
        "cep": cepImovel.value,
        "cidade": cidadeImovel.value,
        "estado": estadoImovel.value
    }
    todosCadastros.push(pessoaFisica)
    localStorage.setItem('cadastroPessoal', JSON.stringify(todosCadastros))

    confirmacaoDeSucesso()

}
function confirmacaoDeSucesso() {
    const todosInput = document.querySelectorAll('input')
    const todosSelect = document.querySelectorAll('select')
    for (let i = 0; i < todosInput.length; i++) {
        todosInput[i].disabled = true

        for (let i = 0; i < todosSelect.length; i++) {
            todosSelect[i].disabled = true

        }

    }
    document.querySelector('.efetuadoSucesso').style.display = 'block'
}
if (document.querySelector('.efetuadoSucesso button') != null) {
    document.querySelector('.efetuadoSucesso button').addEventListener('click', () => {
        location.reload()
    })
}

function cadastroPessoaJuridica(juridica) {
    const todosCadastros = JSON.parse(localStorage.getItem('cadastroPessoal'))
    const cpfGeneros = document.querySelector('#cpfGenero')

    const pessoaJuridica = {
        "id": todosCadastros.length + 1,
        "tipo": juridica,
        "cpf": cnpjGerado.value,
        "nome": cnpjRazao.value,
        "genero": cnpjNomeFantasia.value,
        "estadoCivil": cnpjAtividadeComercial.value, 
        "endereco": enderecoImovel.value,
        "bairro": bairroImovel.value,
        "numero": numeroImovel.value,
        "cep": cepImovel.value,
        "cidade": cidadeImovel.value,
        "estado": estadoImovel.value
    }
   
    todosCadastros.push(pessoaJuridica)
    localStorage.setItem('cadastroPessoal', JSON.stringify(todosCadastros))

    confirmacaoDeSucesso()
}
function addCasa() {
    const cadastrarCasaSelect = document.querySelector('#cadastrarCasaSelect').selectedIndex + 1

    if (cadastrarCasaSelect == 2) {
        cadastrarCasaImovel.style.display = 'block'
    } else {
        cadastrarCasaImovel.style.display = 'none'
    }


}

function cadastroImoveCompleto() {
    const imovelSelect = document.querySelector('#imovelSelect').selectedIndex + 1

    if (imovelSelect == 1) {
        cadastroCompletoImovelUrbano('Urbano')
    } else {
        cadastroCompletoImovelRural("Rural")
    }
    confirmacaoDeSucesso()
}
function cadastroCompletoImovelRural(rural) {
    const todosImoveis = JSON.parse(localStorage.getItem('cadastroImovel'))
    const imoveCUrbano = {
        "id": todosImoveis.length + 1,
        "tipo": rural,
        "matricula": matriculaImovelC.value,
        "registrodia": registroDia.value,
        "registromei": registroMes.value,
        "registroAno": registroAno.value,
        "setor": setorImovel.value,
        "denominacao": denominacaoFazenda.value,
        "quadra": quadraImovel.value,
        "lote": loteImovel.value,
        "nomefrente": nomeFrente.value,
        "medidafrente": medidaFrente.value,
        "nomefundo": nomeFundo.value,
        "medidafundo": medidaFundo.value,
        "nomeesquerdo": nomeEsquerdo.value,
        "medidaEsquerda": medidaEsquerda.value,
        "nomeDireito": nomeDireito.value,
        "medidadireito": medidaDireta.value,
        "areatotalimovel": areaTotalM2.value,
        "endereco": enderecoImovel.value,
        "numero": numeroImovel.value,
        "bairro": bairroImovel.value,
        "cep": cepImovel.value,
        "cidade": cidadeImovel.value,
        "estado": estadoImovel.value
    }

    todosImoveis.push(imoveCUrbano)
    localStorage.setItem('cadastroImovel', JSON.stringify(todosImoveis))
}
function cadastroCompletoImovelUrbano(urbano) {
    const todosImoveis = JSON.parse(localStorage.getItem('cadastroImovel'))
    const lotePartes = document.querySelector('#loteParte').selectedIndex
    const loteParte = lotePartes == 0 ? 'de um lote' : 'da parte de um lote'
    const imoveCUrbano = {
        "id": todosImoveis.length + 1,
        "tipo": urbano,
        "matricula": matriculaImovelC.value,
        "partecompleto": loteParte,
        "setor": setorImovel.value,
        "quadra": quadraImovel.value,
        "lote": loteImovel.value,
        "nomefrente": nomeFrente.value,
        "medidafrente": medidaFrente.value,
        "nomefundo": nomeFundo.value,
        "medidafundo": medidaFundo.value,
        "nomeesquerdo": nomeEsquerdo.value,
        "medidaEsquerda": medidaEsquerda.value,
        "nomeDireito": nomeDireito.value,
        "medidadireito": medidaDireta.value,
        "areatotalimovel": areaTotalM2.value,
        "endereco": enderecoImovel.value,
        "numero": numeroImovel.value,
        "bairro": bairroImovel.value,
        "cep": cepImovel.value,
        "cidade": cidadeImovel.value,
        "estado": estadoImovel.value
    }

    todosImoveis.push(imoveCUrbano)
    localStorage.setItem('cadastroImovel', JSON.stringify(todosImoveis))

}
function carregaMetrosQuadrados() {
    const frente = document.querySelector('#medidaFrente').value
    const fundo = document.querySelector('#medidaFundo').value
    const esquerdo = document.querySelector('#medidaEsquerda').value
    const direito = document.querySelector('#medidaDireta').value
    const medidaLaterais = (parseFloat(esquerdo) + parseFloat(direito)) / 2;
    const medidaFrontais = (parseFloat(frente) + parseFloat(fundo)) / 2;
    if (areaTotalM2.value != NaN) {
        areaTotalM2.value = Math.round(medidaLaterais * medidaFrontais)
    }

}
if (document.querySelector('select#carregaImoveis') != null) {
    carregaImoveis()
    carregaVendedoresECompradores()
}
function carregaImoveis() {
    const data = JSON.parse(localStorage.getItem('cadastroImovel'))
    const carregaImoveis = document.querySelector('select#carregaImoveis')
    data.map((e) => {
        carregaImoveis.innerHTML += ` <option>${e.tipo} - Quadra: ${e.quadra} - lote:${e.lote}</option>`
    })
}

function carregaVendedoresECompradores() {
    const data = JSON.parse(localStorage.getItem('cadastroPessoal'))
    const carregaImoveis = document.querySelectorAll('select.geraCompradores')

    for (let o = 0; o < carregaImoveis.length; o++) {

        carregaImoveis[o].innerHTML = `<option>Selecione</option>`
    }


    data.map((e, index) => {
        // carregaImoveis[index].innerHTML = ` <option>Selecione</option>`
        for (let i = 0; i < carregaImoveis.length; i++) {
            carregaImoveis[i].innerHTML += ` <option>${e.nome.split(' ')[0]} - ${e.cpf}</option>`
        }
    })


}
function addVendedor() {
    const propritarios = document.querySelector('#proprietarios')
    const contProprietario = document.querySelectorAll('#proprietarios div')

    const inforProprietarios = document.createElement('div')
    inforProprietarios.innerHTML = ` <p>Propritário:</p>
    <select name="" id="vendedor${contProprietario.length}" onchange="adicionaProprietarioNaInfo()" class="geraCompradores">
        <option>Selecione</option>       
    </select>
    <select name="" id="" onchange="" >
    <option>&</option>
    </select>
    <select name="" id="vendedor${contProprietario.length}A" onchange="adicionaProprietarioNaInfo()" class="geraCompradores">
        <option>Selecione</option>
       
    </select>
    <i onclick="removeVendedor(${contProprietario.length})" class="bi bi-person-fill-dash"></i>`
    propritarios.appendChild(inforProprietarios)
    carregaVendedoresAdicionados(contProprietario.length)
}


function addComprador() {
    const propritarios = document.querySelector('#compradores')
    const contProprietario = document.querySelectorAll('#compradores div')

    const inforProprietarios = document.createElement('div')
    inforProprietarios.innerHTML = ` <p>Propritário:</p>
    <select name="" id="comprador${contProprietario.length}" onchange="adicionaCompradorNaInfo()" class="geraCompradores">
        <option>Selecione</option>       
    </select>
    <select name="" id="" onchange="" >
    <option>&</option>
    </select>
    <select name="" id="comprador${contProprietario.length}A" onchange="adicionaCompradorNaInfo()" class="geraCompradores">
        <option>Selecione</option>
       
    </select>
    <i onclick="removeComprador(${contProprietario.length})" class="bi bi-person-fill-dash"></i>`
    propritarios.appendChild(inforProprietarios)
    carregaCompradoresAdicionados(contProprietario.length)
}



function carregaVendedoresAdicionados(posicao) {
    const data = JSON.parse(localStorage.getItem('cadastroPessoal'))
    const carregaImoveis = document.querySelectorAll(`select#vendedor${posicao}`)
    const carregaImoveisA = document.querySelectorAll(`select#vendedor${posicao}A`)

    for (let o = 0; o < carregaImoveis.length; o++) {

        carregaImoveis[o].innerHTML = `<option>Selecione</option>`
    }
    data.map((e, index) => {
        // carregaImoveis[index].innerHTML = ` <option>Selecione</option>`
        for (let i = 0; i < carregaImoveis.length; i++) {
            carregaImoveis[i].innerHTML += ` <option>${e.nome.split(' ')[0]} - ${e.cpf}</option>`
            carregaImoveisA[i].innerHTML += ` <option>${e.nome.split(' ')[0]} - ${e.cpf}</option>`
        }
    })
}

function carregaCompradoresAdicionados(posicao) {
    const data = JSON.parse(localStorage.getItem('cadastroPessoal'))
    const carregaImoveis = document.querySelectorAll(`select#comprador${posicao}`)
    const carregaImoveisA = document.querySelectorAll(`select#comprador${posicao}A`)

    for (let o = 0; o < carregaImoveis.length; o++) {

        carregaImoveis[o].innerHTML = `<option>Selecione</option>`
    }
    data.map((e, index) => {
        // carregaImoveis[index].innerHTML = ` <option>Selecione</option>`
        for (let i = 0; i < carregaImoveis.length; i++) {
            carregaImoveis[i].innerHTML += ` <option>${e.nome.split(' ')[0]} - ${e.cpf}</option>`
            carregaImoveisA[i].innerHTML += ` <option>${e.nome.split(' ')[0]} - ${e.cpf}</option>`
        }
    })
}

function removeVendedor(del) {
    const contProprietario = document.querySelectorAll('#proprietarios div')
    if (contProprietario.length == 2) {
        contProprietario[1].remove()
    } else {
        contProprietario[del].remove()
    }
}
function removeComprador(del) {
    const contProprietario = document.querySelectorAll('#compradores div')
    if (contProprietario.length == 2) {
        contProprietario[1].remove()
    } else {
        contProprietario[del].remove()
    }
}
function mostraInfoContrato() {
    const data = JSON.parse(localStorage.getItem('cadastroImovel'))
    const carregaImoveis = document.querySelector('#carregaImoveis').selectedIndex - 1
    infoImovelVisao.innerHTML = `<p>Imóvel Selecionado:</p>
    <p>Imovel de matricula <strong>${data[carregaImoveis].matricula}</strong>, setor <strong>${data[carregaImoveis].setor}</strong> quadra <strong>${data[carregaImoveis].quadra}</strong>, lote <strong>${data[carregaImoveis].lote}</strong> as medidas são:  Frente para ${data[carregaImoveis].nomefrente} com ${data[carregaImoveis].medidafrente} metros, Fundo para ${data[carregaImoveis].nomefundo} com ${data[carregaImoveis].medidafundo} metros, Esquerda para ${data[carregaImoveis].nomeesquerdo} com ${data[carregaImoveis].medidaEsquerda} metros, Direita para ${data[carregaImoveis].nomeDireito} com ${data[carregaImoveis].medidadireito} metros.</p>
    <p>Área Total: ${data[carregaImoveis].areatotalimovel}M²</p>
    <p>Proprietario(os): <span id="propsI"></span></p>
    <p>Comprador(es): <span id="comprI"></span></p>
    <p>Informações Adicionais: <span id="cinfoAdd"></span></p>`
    nimovel.textContent = carregaImoveis

    return carregaImoveis

}

function adicionaProprietarioNaInfo() {
    const data = JSON.parse(localStorage.getItem('cadastroImovel'))
    const carregaImoveis = document.querySelector('#carregaImoveis').selectedIndex - 1

    const pessoal = JSON.parse(localStorage.getItem('cadastroPessoal'))

    const proprietarios = document.querySelectorAll('#proprietarios div')
    var proprietariosArray = []

    propsI.textContent = ``
    for (let i = 0; i < proprietarios.length; i++) {
        const vendOne = document.querySelector(`#vendedor${i}`).selectedIndex - 1
        const vendTwo = document.querySelector(`#vendedor${i}A`).selectedIndex - 1
        const segundoProp = vendTwo >= 1 ? ` / ${pessoal[vendTwo].nome}` : '.'
        propsI.innerHTML += `<p>&#9758;${pessoal[vendOne].nome}${segundoProp}</p>`
        const saveVendedores = {
            "p1": vendOne + 1,
            "p2": vendTwo + 1
        }
        proprietariosArray.push(saveVendedores)

    }
    nvendedores.textContent = JSON.stringify(proprietariosArray)

    return proprietariosArray


}

function adicionaCompradorNaInfo() {
    const data = JSON.parse(localStorage.getItem('cadastroImovel'))
    const carregaImoveis = document.querySelector('#carregaImoveis').selectedIndex - 1

    const pessoal = JSON.parse(localStorage.getItem('cadastroPessoal'))

    const proprietarios = document.querySelectorAll('#compradores div')
    var compradoresArray = []

    comprI.textContent = ``
    for (let i = 0; i < proprietarios.length; i++) {
        const vendOne = document.querySelector(`#comprador${i}`).selectedIndex - 1
       
        const vendTwo = document.querySelector(`#comprador${i}A`).selectedIndex - 1

       
        const segundoProp = vendTwo >= 1 ? ` / ${pessoal[vendTwo].nome}` : '.'
        comprI.innerHTML += `<p>&#9758;${pessoal[vendOne].nome}${segundoProp}</p>`
        const saveVendedores = {
            "c1": vendOne + 1,
            "c2": vendTwo + 1
        }
        compradoresArray.push(saveVendedores)

    }
    ncompradores.textContent = JSON.stringify(compradoresArray)

    return compradoresArray

}
function maisInfo() {
    const inforAdd = document.querySelector('#inforAdd').value
    cinfoAdd.innerHTML = `<p>${inforAdd}</p>`
    observacaoContra.textContent = inforAdd

    return inforAdd

}
function cadastroContratoETermo() {
    const contratos = JSON.parse(localStorage.getItem('contratosETermos'))
    const cadastroCT = document.querySelector('#inforImov').textContent
    const emString = cadastroCT.toString().replace(/\//g, '')
    const idImovel = contratos.length + 1
    const meioPaga = document.querySelector('#meioPag')
    const meioPag = meioPaga.options[meioPaga.selectedIndex].textContent
    const outroM = document.querySelector('#outroMeioDePagamento').value
    const tipoDeContrato = "Compra e Venda"

    if (outroM.length <= 0) {
        var comoPaga = meioPag
    } else { var comoPaga = outroM }

    const imovelCompleto = {
        "id": idImovel,
        "tipo": tipoDeContrato,
        "imovel": mostraInfoContrato(),
        "vendedores": adicionaProprietarioNaInfo(),
        "compradores": adicionaCompradorNaInfo(),
        "observacao": maisInfo(),
        "valor": valorTransacao.value,
        "metodoPagamento": comoPaga,
        "codigo": geradorContrato()

    }
    contratos.push(imovelCompleto)
    localStorage.setItem('contratosETermos', JSON.stringify(contratos))
    confirmacaoDeSucesso()

}

if (document.querySelector('#filtroContratoTermos') != null) {
    loadContratosETermos()
}
if (document.querySelector('#proprietariosPP') != null) {
    loadAutentica()
}

function loadContratosETermos() {
    const proprietariosP = document.querySelector('#proprietariosP')
    const data = JSON.parse(localStorage.getItem('contratosETermos'))
    const imovel = JSON.parse(localStorage.getItem('cadastroImovel'))
    const people = JSON.parse(localStorage.getItem('cadastroPessoal'))
    proprietariosP.textContent = ``
    data.map((e, index) => {
        const eTipo = imovel[data[index].imovel].tipo
        const tipoIMov = eTipo == 'Rural' ? 'IMÓVEL RURAL' : "IMÓVEL URBANO"
        const linkIMov = eTipo == 'Rural' ? 'print-rural' : "print"
        proprietariosP.innerHTML += `<div>
            <span>
                <strong>
                    <p>CONTRATO DE ${data[index].tipo}</p>
                </strong>
                ${tipoIMov}
                <p>COD: ${data[index].id} - <strong>SETOR: ${imovel[data[index].imovel].setor}, QUADRA:${imovel[data[index].imovel].quadra}, LOTE: ${imovel[data[index].imovel].lote}</strong>.</p>
            </span>
            <a href="./${linkIMov}.html#${index}" target="_blank"><i onclick="addVendedor()" class="bi bi-printer-fill">IMPRIMIR</i></a>
        </div> `
    })
}
function dataHoje() {
    const data = new Date
    const dia = data.getDate()
    const mes = data.getMonth()
    const ano = data.getFullYear()

    return `${dia}/${mes}/${ano}`
}
function loadAutentica() {
    const proprietariosP = document.querySelector('#proprietariosPP')
    const data = JSON.parse(localStorage.getItem('contratosETermos'))
    const imovel = JSON.parse(localStorage.getItem('cadastroImovel'))
    const people = JSON.parse(localStorage.getItem('cadastroPessoal'))
    proprietariosP.innerHTML = ``
    data.map((e, index) => {
        proprietariosP.innerHTML += `
        
        <div>
            <span>
                <strong>
                    <p>CODIGO ${data[index].codigo}</p>
                </strong>
               
                <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScU9CwJZi5j3W7VXVuG2GfOaJ4ocw-KlirS5FggZfJ81VSVrw/formResponse" method="post">
                <input type="text" name="entry.1414688071" value="${data[index].codigo}">
                <input type="text" name="entry.1918555508" value="${dataHoje()}">
                <input type="text" name="entry.275588778" >
                <input type="submit" value="Autenticar">
            </form>
                <p>COD: ${data[index].id} - <strong>SETOR: ${imovel[data[index].imovel].setor}, QUADRA:${imovel[data[index].imovel].quadra}, LOTE: ${imovel[data[index].imovel].lote}</strong>.</p>
            </span>
            
        </div>`
    })
}
function geradorContrato() {
    var arrayN = []
    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * 9)
        arrayN.push(random)
    }
    return arrayN.toString().replace(/,/g, '')
}

window.onstorage = function (e) {
    
    enderecoCadastrado()
}