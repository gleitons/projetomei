if (localStorage.getItem('postIt') == null) {
    geraLembretes()
}
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
if (document.querySelector('.agendaLateral') != null) {
    carregaPostIt()
}



if (localStorage.getItem('dmodeRede') == null) {
    localStorage.setItem('dmodeRede', 0)
}

if (localStorage.getItem('menuLembrete') == null) {
    //localStorage.setItem('menuLembrete', 1)
    fechaMenuLembre()
}
if (localStorage.getItem('menuLembrete') == '0') {
    const agendaLateralIcone = document.querySelector('.agendaLateral  i')
    const agendaLateral = document.querySelector('.agendaLateral') != null ? document.querySelector('.agendaLateral').classList.add('ocultaAgenda') : ''
    //agendaLateral.classList.add('ocultaAgenda')
    if (agendaLateralIcone != null) {
        agendaLateralIcone.setAttribute('class', 'bi bi-arrow-left-square-fill btnOcultarLembrete')
    }
}
if (localStorage.getItem('menuLembrete') == '1') {
    const abre = () => {
        const agendaLateral = document.querySelector('.agendaLateral')
        const agendaLateralIcone = document.querySelector('.agendaLateral > i')
        if (agendaLateralIcone != null) {

            agendaLateral.classList.remove('ocultaAgenda')
            agendaLateralIcone.setAttribute('class', 'bi bi-arrow-right-square-fill btnOcultarLembrete')
            fechaMenuLembre()


        }


    }
    abre()
}
if (localStorage.getItem('empresasFavoritasPage') == null) {
    localStorage.setItem('empresasFavoritasPage', '[]')
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
    tirBorder()
    search_animal()
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
        "identidade": "",
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
        const infoLote = e.tipo == 'Urbano' ? `${e.tipo} - Quadra: ${e.quadra} - lote:${e.lote}` : `${e.tipo} - ${e.matricula} - ${e.bairro} - ${e.endereco} `

        carregaImoveis.innerHTML += ` <option>${infoLote.toUpperCase()}</option>`
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
        //const qualTipo = 
        const eTipo = imovel[data[index].imovel].tipo
        const tipoIMov = eTipo == 'Rural' ? 'IMÓVEL RURAL' : "IMÓVEL URBANO"
        const linkIMov = eTipo == 'Rural' ? 'print-rural' : "print"
        const imovelUrbano = 0

        const infoIm = eTipo == 'Urbano' ? `<strong>SQL: ${imovel[data[index].imovel].setor}|${imovel[data[index].imovel].quadra}|${imovel[data[index].imovel].lote}</strong>` : `<strong>SQL: ${imovel[data[index].imovel].bairro.toUpperCase()} - ${imovel[data[index].imovel].endereco.toUpperCase()} - ${imovel[data[index].imovel].tipo}</strong>`

        proprietariosP.innerHTML += `<div>
            <span class="icoCompraEVenda">
              
                    <p>COD: ${data[index].id} - ${data[index].tipo.toUpperCase()} -  ${tipoIMov}</p>
                              
                <p> ${infoIm}.</p>
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

        var infoProp = []
        for (let i = 0; i < e.vendedores.length; i++) {
            const vendeeee = `${JSON.stringify(people[e.vendedores[i].p1])} - ${JSON.stringify(people[e.vendedores[i].p2])}`

            infoProp.push(vendeeee)
        }
        var infoComp = []
        for (let i = 0; i < e.compradores.length; i++) {
            const compraaaaa = `${JSON.stringify(people[e.compradores[i].c1])} - ${JSON.stringify(people[e.compradores[i].c2])}`

            infoComp.push(compraaaaa)
        }
        proprietariosP.innerHTML += `
        
        <div>
            <span>
                <strong>
                    <p>CODIGO ${data[index].codigo}</p>
                </strong>
               
                <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScU9CwJZi5j3W7VXVuG2GfOaJ4ocw-KlirS5FggZfJ81VSVrw/formResponse" method="post">
                <input type="text" name="entry.1414688071" value="${data[index].codigo}">
                <input type="text" name="entry.1918555508" value="${dataHoje()}">
                <textarea name="entry.275588778" id="" cols="20" rows="1">${JSON.stringify(e).toString()} - ${JSON.stringify(imovel[data[index].imovel]).toString()} - Vendedor: ${JSON.stringify(infoProp).toString()} -  Comprador: ${JSON.stringify(infoComp).toString()}</textarea>
                
                <input class="btnSubb" type="submit" value="Autenticar">
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

    // if(document.querySelector('#AtalhosAdicionandoIcons' != null)) adicionaNoDesktop()

}


function avisoS(aviso) {
    const divP = document.createElement('div')
    divP.classList.add('avisoOff')
    //document.querySelector('main').style.display = 'none'
    divP.innerHTML = ` <div >
    <button onclick="fechaAviso()">Fechar</button>
    <span>${aviso}</span>
    <button onclick="fechaAviso()">Fechar</button>
    </div>`
    document.querySelector('body').appendChild(divP)
   
}
function paraApagar(props) {
    const msn = `<div class="desejaExcluir">
    <h3>CONFIRME QUE DESEJA APAGAR: </h3>
    <p>Todos os dados</p>
    <button >APAGAR</button>
    </div>`
    if (props == 'all') {
        avisoS(msn)
    }
}
function apaga() {

}

function fechaAviso() {
    document.querySelector('.avisoOff').remove()
}
function addAtalhos() {

    const cadastro = `<div class="editarAtalhos">
    <div class="selecIconAdd">
        <p>Adicionar Atalho:</p>
        <select name="" id="todosAtalhos" onchange="adicionaOAtalhonoApp()">
            <option>Selecionar</option>
        </select>
        <a href="./criar-atalho.html"><button>Criar Atalho</button></a>
    </div>
    <span id="AtalhosAdicionandoIcons">
    </span>
</div>`
    avisoS(cadastro)
    carregaAtalhos()
    atualizaAtalhosDesktop()
}


function dModec() {
    const comoDEsta = localStorage.getItem('dMod')
    //const comoDEsta = 0

    if (comoDEsta == 1) {
        document.querySelector('.menusApresentação').style.backgroundColor = '#0e0e0e'
        document.querySelector('.telaApresentacao').style.backgroundColor = '#0e0e0e'
        document.querySelector('.telaApresentacao').style.color = 'white'

        const linksD = document.querySelectorAll('nav a')
        const linksE = document.querySelectorAll('nav li')

        for (let i = 0; i < linksD.length; i++) {

            linksD[i].style.color = 'red'
            linksE[i].style.color = 'red'
        }
        localStorage.setItem('dMod', 0)
    } else {
        document.querySelector('.menusApresentação').style.backgroundColor = '#dedede'
        document.querySelector('.telaApresentacao').style.backgroundColor = '#dedede'
        document.querySelector('.telaApresentacao').style.color = '#666666'

        const linksD = document.querySelectorAll('nav a')
        const linksE = document.querySelectorAll('nav li')

        for (let i = 0; i < linksD.length; i++) {

            linksD[i].style.color = '#666666'
            linksE[i].style.color = '#666666'
        }

        localStorage.setItem('dMod', 1)
    }


}
if (document.querySelector('select#todosAtalhos') != null) {
    carregaAtalhos()
}
if (localStorage.getItem('atalhosContratos') == null) {
    geraAtalhosIniciais()
    // localStorage.setItem('atalhosContratos', '[{"id":0,"imagem":"./src/img/icons/itbi-urbano.png","texto":"ITBI Urbano","link":"itbi-urbano"},{"id":1,"imagem":"./src/img/icons/itbi-rural.png","texto":"ITBI Rural","link":"itbi-rural"}]')
}
async function geraAtalhosIniciais() {
    const response = await fetch('./atalhos')
    const data = await response.json()
    console.log(data)
    localStorage.setItem('atalhosContratos', JSON.stringify(data))
}

if (localStorage.getItem('todosAtalhos') == null) {
    carregaLocalStorageAtalhos()
}

async function carregaLocalStorageAtalhos() {
    const response = await fetch('./atalhos')
    const data = await response.json()

    localStorage.setItem('todosAtalhos', JSON.stringify(data))
}

function atualizaAtalhosDesktop() {
    const data = JSON.parse(localStorage.getItem('atalhosContratos'))
    const todosAtalhos = document.querySelector('#AtalhosAdicionandoIcons')
    data.map((a) => {
        AtalhosAdicionandoIcons.innerHTML += `<div class="mostraAtalhosClose">
        ${a.id}
        <p>${a.texto}</p>
        <img src="${a.imagem}" alt="">
        <i class="bi bi-x-circle-fill"></i>
    </div>`
    })
    verAtalhosParaFechar()
    salvaAtalhosNoDesktop()
}

function carregaAtalhos() {
    const data = JSON.parse(localStorage.getItem('todosAtalhos'))
    const todosAtalhos = document.querySelector('select#todosAtalhos')
    data.map((a) => {
        todosAtalhos.innerHTML += ` <option>${a.texto}</option>`
    })
}
function adicionaOAtalhonoApp() {

    const data = JSON.parse(localStorage.getItem('todosAtalhos'))
    const todosAtalhos = document.querySelector('select#todosAtalhos').selectedIndex - 1
    const mostraAtalhos = document.querySelector('#AtalhosAdicionandoIcons')
    const atalho = data

    mostraAtalhos.innerHTML += `<div class="mostraAtalhosClose">
        ${todosAtalhos}
        <p>${atalho[todosAtalhos].texto}</p>
        <img src="${atalho[todosAtalhos].imagem}" alt="">
        <i class="bi bi-x-circle-fill"></i>
    </div>`
    verAtalhosParaFechar()
    salvaAtalhosNoDesktop()
}
function verAtalhosParaFechar() {
    const itensDosAtalhos = document.querySelectorAll('.mostraAtalhosClose i')
    for (let i = 0; i < itensDosAtalhos.length; i++) {
        itensDosAtalhos[i].addEventListener('click', () => {
            itensDosAtalhos[i].parentElement.remove()
            salvaAtalhosNoDesktop()
        })
    }
}
function salvaAtalhosNoDesktop() {
    var atalhos = []
    const itensDosAtalhos = document.querySelectorAll('.mostraAtalhosClose i')
    const itensDAtalho = document.querySelectorAll('.mostraAtalhosClose')
    //const response = await fetch('./atalhos')
    const data = JSON.parse(localStorage.getItem('todosAtalhos'))

    for (let i = 0; i < itensDAtalho.length; i++) {
        const numbItenm = itensDAtalho[i].textContent.replace(/[^0-9]/g, '')
        const infoAtalho = {
            "id": i,
            "imagem": data[numbItenm].imagem,
            "texto": data[numbItenm].texto,
            "link": data[numbItenm].link
        }
        atalhos.push(infoAtalho)
    }
    localStorage.setItem('atalhosContratos', JSON.stringify(atalhos))
    adicionaNoDesktop()
}
function adicionaNoDesktop() {
    const data = JSON.parse(localStorage.getItem('atalhosContratos'))
    const mostraA = document.querySelector('#iconsAtalhos')

    mostraA.innerHTML = ''
    data.map((e) => {
        mostraA.innerHTML += `<div onclick="linkOn('${e.link}')">
        <img src="${e.imagem}" alt="${e.texto}">
        <p>${e.texto}</p>
    </div>`
    })
}
if (document.querySelector('#iconsAtalhos') != null) {
    carregaAtalhosDoLocalStorage()
}
async function carregaAtalhosDoLocalStorage() {
    const data = JSON.parse(localStorage.getItem('atalhosContratos'))
    const mostraA = document.querySelector('#iconsAtalhos')

    if (mostraA != undefined) {
        mostraA.innerHTML = ''
        await data.map((e) => {
            mostraA.innerHTML += `<div onclick="linkOn('${e.link}')">
            <img src="${e.imagem}" alt="${e.texto}">
            <p>${e.texto}</p>
        </div>`
        })
    } else {
        mostraA.innerHTML += `<p >Adicione atalhos no inicio:  Clique em Configurações</p>`
    }

}

if (document.querySelectorAll('.fieldCadastroImóvel .copiarDados') != null) {
    geradorDeCopiarInfoEmpresa()
}

function geradorDeCopiarInfoEmpresa() {
    const todasDivCopiar = document.querySelectorAll('.fieldCadastroImóvel .copiarDados h4')
    todasDivCopiar.forEach((e) => {
        e.addEventListener('click', () => {
            let text = e.textContent;

            navigator.clipboard.writeText(text);
            mostraInfoCopy(e.textContent)
        })
    })
}

function mostraInfoCopy(e) {
    const divDaCopy = document.createElement('div')
    divDaCopy.innerHTML = `<div class="copiadoComSucesso">
    <p>${e} - COPIADO!!</p>
</div>`
    document.querySelector('main').appendChild(divDaCopy)
    verificaMuitasCopy()
    setTimeout('deletaInfoCopy()', 2000)
}
function deletaInfoCopy() {
    document.querySelector('.copiadoComSucesso').parentElement.remove()
}
function verificaMuitasCopy() {
    const tantasDiv = document.querySelectorAll('.copiadoComSucesso')
    if (tantasDiv.length == 10) {
        avisoS(`<div class="lembreteAberto">
    <p>TENHA CALMA!! SEU COMPUTADOR VAI TRAVAR, RSRS:</p> 
</div>`)
    }

}
async function buscaCNPJB(pesquisaCN) {
    var ati = []
    const vejamosS = document.querySelector('#vejamosS')
    const urlC = `https://minhareceita.org/${pesquisaCN}`

    const response = await fetch(urlC);
    const data = await response.json();
    if (response.status == 200) {
        var atvsec = document.querySelector('#atvsec')
        if (data.cnpj != undefined || pesquisaCN.toString().lenght > 0) {

            const reve = data.data_situacao_cadastral != null ? data.data_situacao_cadastral.split('-').reverse() : ''

            var uatualiza = `${reve[0]}/${reve[1]}/${reve[2]}`

            const outrasAtividades = document.querySelector('.outrasAtividades')

            const divInserindoDados = document.querySelectorAll('.fieldCadastroImóvel div h4')

            const LinkInserindoDados = document.querySelectorAll('.fieldCadastroImóvel div a')

            divInserindoDados[0].textContent = data.cnpj
            divInserindoDados[1].textContent = data.razao_social
            divInserindoDados[2].textContent = data.nome_fantasia
            divInserindoDados[3].textContent = data.opcao_pelo_mei == true ? 'Sim' : 'Não'
            divInserindoDados[4].textContent = data.cnae_fiscal_descricao
            divInserindoDados[5].textContent = data.natureza_juridica
            divInserindoDados[6].textContent = data.logradouro
            divInserindoDados[7].textContent = data.numero
            divInserindoDados[8].textContent = data.complemento
            divInserindoDados[9].textContent = data.cep
            divInserindoDados[10].textContent = data.bairro
            divInserindoDados[11].textContent = data.municipio
            divInserindoDados[12].textContent = data.uf
            divInserindoDados[13].textContent = data.email != null ? data.email : 'Não Disponível'
            divInserindoDados[14].textContent = data.ddd_telefone_1
            divInserindoDados[15].textContent = data.ddd_telefone_2
            divInserindoDados[16].textContent = data.descricao_situacao_cadastral

            divInserindoDados[17].textContent = data.data_situacao_cadastral.split('-').reverse().join('-')



            const atividadesSecond = data.cnaes_secundarios


            atividadesSecond.forEach((e) => {
                outrasAtividades.innerHTML += `<abbr title="Copiar">
            <h4>${e.descricao}</h4>
        </abbr>`
            })
            //outrasAtividades.innerHTML += 'Atividades secundárias não podem ser copiadas com um clique, selecione e clique em copiar.'

            LinkInserindoDados[0].textContent = `CCMEI de ${data.cnpj}`

            LinkInserindoDados[1].textContent = `CONSULTA RBF DE ${data.cnpj}`
            LinkInserindoDados[1].href = `https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp?cnpj=${data.cnpj}`

            LinkInserindoDados[2].textContent = `ACESSAR CND FEDERAL DE ${data.cnpj}`
            LinkInserindoDados[2].href = `https://solucoes.receita.fazenda.gov.br/servicos/certidaointernet/pj/emitir?NI=${data.cnpj}`

            LinkInserindoDados[3].textContent = `ACESSAR CND ESTADUAL MG DE ${data.cnpj}`
            LinkInserindoDados[3].href = `https://www2.fazenda.mg.gov.br/sol/ctrl/SOL/CDT/SERVICO_829?ACAO=INICIAR&numeroIdentificacao=${data.cnpj}`

        }
        const botaos = document.querySelectorAll('button')
        botaos[0].innerHTML = 'Buscar'
    } else {
        document.querySelector('.infoCNPJPesquisa').innerHTML = `<p>CNPJ NÃO ENCONTRADO - Tente Novamente</p>`
        const botaos = document.querySelectorAll('button')
        botaos[0].innerHTML = 'Buscar'
    }
    geradorDeCopiarInfoEmpresa()


}
function pesquisaCNPJ() {
    const cnpj = document.querySelector('#cnpjGerado').value
    if (cnpj.length > 0) {
        buscaCNPJB(cnpj.replace(/[^0-9]/g, ''))
        const botaos = document.querySelectorAll('button')
        botaos[0].innerHTML = 'Bus..<img class="animaIO" src="./src/img/load.gif" alt="">'
        botaos[3].disabled = false
        botaos[3].style.backgroundColor = '#405cf5'

        document.querySelector('.cnpjEstaCadastrado').textContent = ''
    } else {
        document.querySelector('#cnpjGerado').style.border = 'red solid 2px'
    }


}


if (localStorage.getItem('atalhosContratos') == null) {
   
    const divCc = document.createElement('div')
    divCc.classList.add('carregoLo')
    divCc.innerHTML = `<img src="./src/imagens/loInicial.svg" alt="">
    <p>CARREGAMENTO INICIAL. AGUARDE ...</p>`
    document.body.appendChild(divCc)
   location.reload()
}
function tirBorder() {
    document.querySelector('#cnpjGerado').style.border = 'green solid 1px'
    document.querySelector('.infoCNPJPesquisa').innerHTML = ''




}



function abriMInfoCNPJ() {
    const verMaisInfoCNPJ = document.querySelector('.verMaisInfoCNPJ')
    const botaos = document.querySelectorAll('button')

    if (botaos[1].textContent != 'Fechar') {
        botaos[1].innerHTML = `Fechar<i style="font-size: 1em;" class="bi bi-chevron-up"></i>`
    } else {
        botaos[1].textContent = 'Abrir Mais Informações do CNPJ'
    }
    verMaisInfoCNPJ.classList.toggle('dnone')

}
if (localStorage.getItem('favoritosCNPJ') == null) {
    localStorage.setItem('favoritosCNPJ', '["26300217000100"]')
}
function favoritoPessoaJuridica(entrada) {
    const favoritos = JSON.parse(localStorage.getItem('favoritosCNPJ'))
    const divInserindoDados = document.querySelectorAll('.fieldCadastroImóvel div h4')
    favoritos.push(divInserindoDados[0].textContent)
    var botaos = document.querySelectorAll('button')
    var cnpjCima = divInserindoDados[0].textContent

    var temCN = []
    var nTemCN = []

    for (let i = 0; i < favoritos.length; i++) {
        if (favoritos[i] == cnpjCima) {
            temCN.push(favoritos[i])


        } else {
            nTemCN.push(favoritos[i])

        }
    }
    if (temCN.length == 1) {
        localStorage.setItem('favoritosCNPJ', JSON.stringify(favoritos))
        botaos[3].disabled = true
        botaos[3].style.backgroundColor = 'gray'
        const mostrInfoCNP = document.querySelectorAll('.cnpjEstaCadastrado')
        for(let i = 0; i < mostrInfoCNP.length; i++){
            mostrInfoCNP[i].innerHTML = `FAVORITADO COM SUCESSO! <a href="./favoritos.html"><button style="background-color: green;" >FAVORITOS</button></a>`
        }
        
    } else {
        const mostrInfoCNPj = document.querySelectorAll('.cnpjEstaCadastrado')
        for(let i = 0; i < mostrInfoCNPj.length; i++){
            mostrInfoCNPj[i].innerHTML = `CNPJ JÁ SALVO NO SISTEMA! <a href="./favoritos.html"><button style="background-color: green;" >FAVORITOS</button></a>`
        }
        
    }




}

if (document.querySelector('.onclickFora') != null) {
    colocaTarget()
}


function colocaTarget() {
    const todosLinks = document.querySelectorAll('.onclickFora a')
    todosLinks.forEach((e) => {
        e.setAttribute('target', '_blank')
    })

}

function linkOn(link) {
    window.open(link, '_blank');
}




async function carregaPostIt() {
    const postItData = localStorage.getItem('postIt');

    // Verifica se o dado é válido antes de continuar
    if (!postItData) {
        console.warn('postIt não encontrado no localStorage. Abortando sem recarregar.');
        return;
    }

    const data = JSON.parse(postItData);
    const agendaLateral = document.querySelector('.agendaLateral');
    agendaLateral.innerHTML = '';

    const dataH = new Date();
    const dia = dataH.getDate().toString().padStart(2, '0');
    const mes = (dataH.getMonth() + 1).toString().padStart(2, '0');
    const diahoje = `${dataH.getFullYear()}-${mes}-${dia}`;

    data.forEach((e, index) => {
        const addClasse = diahoje === e.data ? 'piscandoHoje' : '';
        agendaLateral.innerHTML += `
            <div class="${addClasse}" onclick="openLembrete(${index})">
                <h6>${e.data.split('-').reverse().join('-')}</h6>
                <h2>${e.titulo}</h2>
                <p>${e.textoL}</p>
            </div>`;
    });

    agendaLateral.innerHTML += `<i class="bi bi-arrow-right-square-fill btnOcultarLembrete"></i>`;
    fechaMenuLembre();
}


function deletaEmpresasFavoritasAMais(e) {
    const data = JSON.parse(localStorage.getItem('empresasFavoritasPage'))
    const oCNPJ = e

    var quantidade = []
    data.map((e) => {
        if (e.cnpj.toString() == oCNPJ.toString()) {
            var qt = 1
            quantidade.push(qt)
        }
    })
    console.log(quantidade)
    if (quantidade.length > 1) {
        for (let i = 0; i < quantidade.length - 1; i++) {
            let ind = data.findIndex(i => i.cnpj === oCNPJ.toString())
            console.log(data)
            data.splice(ind, 1)
            console.log(data)
            localStorage.setItem('empresasFavoritasPage', JSON.stringify(data))
        }

    }
    //const oCNPJ = '26300217000100'
    // if (e.cnpj.toString() == oCNPJ.toString()) {        
    //     let ind = data.findIndex(i => i.cnpj === oCNPJ.toString())
    //     console.log(data)
    //     data.splice(ind, 1)
    //     console.log(data)
    //     localStorage.setItem('empresasFavoritasPage', JSON.stringify(data))
    // }
}



function abreMenuLembrete() {
    const btnMostraLembre = document.querySelector('.abrelembrete')
    btnMostraLembre.addEventListener('click', () => {
        const agendaLateral = document.querySelector('.agendaLateral')
        const agendaLateralIcone = document.querySelector('.agendaLateral > i')
        agendaLateral.classList.remove('ocultaAgenda')
        agendaLateralIcone.setAttribute('class', 'bi bi-arrow-right-square-fill btnOcultarLembrete')
        fechaMenuLembre()
        localStorage.setItem('menuLembrete', 1)
    })
}
async function fechaMenuLembre() {
    const btnOcultaLembre = document.querySelector('.btnOcultarLembrete')
    btnOcultaLembre.addEventListener('click', () => {
        const agendaLateral = document.querySelector('.agendaLateral')
        const agendaLateralIcone = document.querySelector('.agendaLateral > i')
        agendaLateral.classList.add('ocultaAgenda')
        agendaLateralIcone.setAttribute('class', 'bi bi-arrow-left-square-fill abrelembrete')

        abreMenuLembrete()
        localStorage.setItem('menuLembrete', 0)
    })
}

async function geraLembretes() {
    const response = await fetch('./lembretes')
    const data = await response.json()

    localStorage.setItem('postIt', JSON.stringify(data))

}
//geraLembretes()

function openLembrete(l) {
    const data = JSON.parse(localStorage.getItem('postIt'))

    const agendaLateral = document.querySelector('.agendaLateral')
    avisoS(`<div class="lembreteAberto ">
    <input class="dnone" type="text" id="titleLembre" value="${data[l].titulo}">
    <input class="dnone" type="date"  id="dataLembre" value="${data[l].data}">
    
    <h2 class="">${data[l].titulo}</h2>
    <h4 class="">${data[l].data.split('-').reverse().join('-')}</h4>
    <p class="">${data[l].textoL}</p>
    <textarea id="areaLembre" class="dnone" name=""  cols="34" rows="10">${data[l].textoL}</textarea>  
    
    <button onclick="editarLembrete(${l})">EDITAR</button> <button style="background-color: green;" onclick="salvaAtendimento(${l})">CONCLUÍDA</button> <button style="background-color: red;" onclick="delLembrete(${l})">EXCLUIR</button>
</div>`)

}
if (localStorage.getItem('tarefasConcluidas') == null) {
    localStorage.setItem('tarefasConcluidas', '[]')
}
function salvaAtendimento(num) {
    const data = JSON.parse(localStorage.getItem('tarefasConcluidas'))
    const lembreteAberto = document.querySelectorAll('.lembreteAberto')[0]
    const titulo = lembreteAberto.querySelector('h2').textContent
    const dataLembrete = lembreteAberto.querySelector('h4').textContent
    const mensagem = lembreteAberto.querySelector('p').textContent
    const dataConcluida = new Date()

    const lembreteS = {
        "titulo": titulo,
        "dataL": dataLembrete,
        "mensagem": mensagem,
        "dataconcluida": dataConcluida
    }
    data.unshift(lembreteS)
    localStorage.setItem('tarefasConcluidas', JSON.stringify(data))
    delLembrete(num)
    console.log(lembreteS)

}
function editarLembrete(l) {
    const lembreteAberto = document.querySelector('.lembreteAberto')
    const lembreteAbertoInput = document.querySelectorAll('.lembreteAberto input')[0]
    lembreteAbertoInput.classList.toggle('dnone')

    const lembreteAbertoInput2 = document.querySelectorAll('.lembreteAberto input')[1]
    lembreteAbertoInput2.classList.toggle('dnone')

    const lembreteAbertoTextArea = document.querySelector('.lembreteAberto textarea')
    lembreteAbertoTextArea.classList.toggle('dnone')
    const lembreteAbertoH2 = document.querySelector('.lembreteAberto h2')
    lembreteAbertoH2.classList.toggle('dnone')

    const lembreteAbertoP = document.querySelectorAll('.lembreteAberto p')[0]
    lembreteAbertoP.classList.toggle('dnone')

    const lembreteAbertoPTwo = document.querySelectorAll('.lembreteAberto h4')[0]
    lembreteAbertoPTwo.classList.toggle('dnone')

    const btnlembreteAberto = document.querySelectorAll('.lembreteAberto button')[1]
    btnlembreteAberto.classList.toggle('dnone')
    const btnlembreteAbertoOne = document.querySelectorAll('.lembreteAberto button')[0]
    btnlembreteAbertoOne.textContent = 'Atualizar'
    btnlembreteAbertoOne.setAttribute('onclick', `editarLembreteShow(${l})`)
}
function editarLembreteShow(l) {
    organizaLembretes()
    const data = JSON.parse(localStorage.getItem('postIt'))

    const titulo = document.querySelector('#titleLembre').value
    const dataLembre = document.querySelector('#dataLembre').value
    const textoLembre = document.querySelector('#areaLembre').value
    const posicaoObjeto = data[l].selectedIndex

    const editarLembrete = data.find(obj => obj.id == l)

    if (editarLembrete) {
        editarLembrete.id = l
        editarLembrete.titulo = titulo
        editarLembrete.data = dataLembre
        editarLembrete.textoL = textoLembre

        localStorage.setItem('postIt', JSON.stringify(data))

    } else {
        alert('Objeto não encontrado')
    }

    openLembrete(l)
    fechaAviso()
    carregaPostIt()
}
function organizaLembretes() {
    const data = JSON.parse(localStorage.getItem('postIt'))

    var copia = []

    for (let i = 0; i < data.length; i++) {
        const titulo = data[i].titulo
        const lembrete = {
            "id": i,
            "titulo": `${titulo}`,
            "textoL": data[i].textoL,
            "data": data[i].data
        }
        copia.push(lembrete)
    }
    localStorage.setItem('postIt', JSON.stringify(copia))

}

function delLembrete(l) {
    const data = JSON.parse(localStorage.getItem('postIt'))


    data.splice(l, 1)
    localStorage.setItem('postIt', JSON.stringify(data))
    carregaPostIt()
    location.reload()
    //aqui
    element.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Escape' }));
}
function addLembrete() {
    const data = JSON.parse(localStorage.getItem('postIt'))

    const l = data.length
    avisoS(`<div class="lembreteAberto">
    <input  type="text" id="titleLembre" value="" placeholder="Insira o Titulo e data abaixo">
    <input  type="date"  id="dataLembre" value="">
   
    <textarea id="areaLembre"  name=""  cols="34" rows="10" placeholder="Insira a descrição do Lembrete"></textarea>  
    
    <button onclick="criarLembrete()">CRIAR LEMBRETE</button> 
</div>`)
}
function criarLembrete() {
    const data = JSON.parse(localStorage.getItem('postIt'))

    const l = data.length
    const titulo = document.querySelector('#titleLembre').value
    const dataLembrete = document.querySelector('#dataLembre').value
    const textoLembrete = document.querySelector('#areaLembre').value

    const lembrete = {
        "id": l + 1,
        "titulo": titulo,
        "textoL": textoLembrete,
        "data": dataLembrete
    }
    data.unshift(lembrete)

    localStorage.setItem('postIt', JSON.stringify(data))
    location.reload()

}
if (document.querySelector('#bcnpj') != null) {
    document.onkeydown = function (e) {
        if (e.key === 'Enter') {
            document.querySelector('#bcnpj').click()
        }
    }
}
document.addEventListener('click', () => {
    if (document.querySelector('.avisoOff') != null) {
        document.onkeydown = function (e) {
            if (e.key === 'Escape') {
                fechaAviso()
            }
        }
    }
})
function excluirInfoEmpresaFavorito(num) {
    const numero = num.split('-')[0]
    const razao = num.split('-')[1]
    const cnpj = num.split('-')[2]
    avisoS(`<fieldset class="fieldCadastroImóvel fundoHorseWhite">
    <div style="display: block; ">
    <h3>EXCLUIR ${razao} - ${cnpj}</h3>
    <p>Obs: As informações aqui, não influenciam na pesquisa rápida de CNPJ</p>
    <div class="copiarDados">
        <p>Nome Empresarial:</p>
        <abbr title="Copiar">
            <h4>${razao}</h4>
        </abbr>
    </div>    
    <div class="copiarDados">
    <p>Confirme a Exclusão:</p>
    <button onclick="removeFavoritaEmpresa('${numero}-${razao}')">Remover dos Favoritos</button>
    </div>
    <span class="addMaisFavorita">
    </span>
    </div>
    
    </fieldset>`)
}
function removeFavoritaEmpresa(del) {
    const deletar = del.split('-')[0]
    const nomeDel = del.split('-')[1]
    const data = JSON.parse(localStorage.getItem('favoritosCNPJ'))

    data.splice(deletar, 1)
    localStorage.setItem('favoritosCNPJ', JSON.stringify(data))

    alert(`${nomeDel} deletada com sucesso!!`)
    location.reload()
}
async function editaInfoEmpresaFavorito(e) {
    const urlC = `https://minhareceita.org/${e}`
    const response = await fetch(urlC);
    const data = await response.json();
    const c = data.cnpj.split('')
    const cnpjPontos = `${c[0]}${c[1]}.${c[2]}${c[3]}${c[4]}.${c[5]}${c[6]}${c[7]}/${c[8]}${c[9]}${c[10]}${c[11]}-${c[12]}${c[13]}`
    avisoS(` <fieldset class="fieldCadastroImóvel fundoHorseWhite">
    <div style="display: block; ">
    <h3>${data.cnpj} - ${data.razao_social}</h3>
    <p>Obs: As informações aqui, não influenciam na pesquisa rápida de CNPJ</p>
    <div class="copiarDados">
        <p>Nome Empresarial:</p>
        <abbr title="Copiar">
            <h4>${data.razao_social}</h4>
        </abbr>
    </div>
    
    <div class="copiarDados">
    <p>CNPJ:</p>
    <abbr title="Copiar">
        <h4>${data.cnpj}</h4>
    </abbr>
    </div>
    <div class="copiarDados">
    <p>CNPJ com Pontos:</p>
    <abbr title="Copiar">
        <h4>${cnpjPontos}</h4>
    </abbr>
    </div>

    <div class="copiarDados">
    <p>Adicione:</p>
    <button onclick="addInfoFavoritaEmpresa()">Adicionar Informações</button>
    </div>
    <span class="addMaisFavorita">      

    </span>
    </div>
    <button onclick="gravaFavoritoMaisInfo()">Gravar Informações</button>
    </fieldset>`)
    geradorDeCopiarInfoEmpresa()
    fechaEmpresaFavoritaDados()
    adicionaOutrasInfoNoCNPJ(e)

}
//editaInfoEmpresaFavorito()
function gravaFavoritoMaisInfo() {
    const addMaisFavorita = document.querySelectorAll('.addMaisFavorita .copiarDados')
    const dataEmp = JSON.parse(localStorage.getItem('empresasFavoritasPage'))
    const oRazao = document.querySelectorAll('.fundoHorseWhite h4')[0].textContent
    const oCNPJ = document.querySelectorAll('.fundoHorseWhite h4')[1].textContent
    var maisDadosTitleSub = []
    for (let i = 0; i < addMaisFavorita.length; i++) {
        const titulo = addMaisFavorita[i].querySelectorAll('input')[0].value
        const subTitulo = addMaisFavorita[i].querySelectorAll('input')[1].value
        const completo = `${titulo} || ${subTitulo}`

        maisDadosTitleSub.push([completo])
    }
    const empF = {
        "nomeEmpresa": oRazao,
        "cnpj": oCNPJ,
        maisDadosTitleSub
    }
    dataEmp.push(empF)
    localStorage.setItem('empresasFavoritasPage', JSON.stringify(dataEmp))
    fechaAviso()
    editaInfoEmpresaFavorito(oCNPJ)
    reloadApagaEmpresaAMais(oCNPJ)

}

function reloadApagaEmpresaAMais(e) {
    deletaEmpresasFavoritasAMais(e)
}


function adicionaOutrasInfoNoCNPJ(e) {
    const dataEmp = JSON.parse(localStorage.getItem('empresasFavoritasPage'))
    const addMaisFavorita = document.querySelector('.addMaisFavorita')

    addMaisFavorita.innerHTML = ''
    dataEmp.map((cn) => {
        //console.log(addMaisFavorita)
        //console.log(e.toString() == cn.cnpj.toString())
        //console.log(cn.cnpj)

        if (e.toString() == cn.cnpj.toString()) {
            for (let i = 0; i < cn.maisDadosTitleSub.length; i++) {
                const titulo = cn.maisDadosTitleSub[i].toString().split(' || ')[0]
                const subTitulo = cn.maisDadosTitleSub[i].toString().split('|| ')[1]

                const dados = `<div class="copiarDados">
                <input type="text" placeholder="insira Titulo" value="${titulo}">
                <input type="text" placeholder="insira a Informação" value="${subTitulo}">
                <i class="bi bi-x-square-fill"></i>
                </div>`

                addMaisFavorita.innerHTML += dados
                //console.log(i)
            }
            return
        }
    })
    fechaEmpresaFavoritaDados()
}
function addInfoFavoritaEmpresa() {

    const fundoHorseWhite = document.querySelector('.addMaisFavorita')
    const divDados = document.querySelectorAll('.copiarDados button')[0]

    fundoHorseWhite.innerHTML += `<div class="copiarDados">
    <input type="text"  placeholder="insira Titulo">
    <input type="text"  placeholder="insira a Informação">
    <i class="bi bi-x-square-fill"></i>
    </div>`
    fechaEmpresaFavoritaDados()
    divDados.disabled = true
    divDados.textContent = 'Clique em "Gravar Informações"'
    divDados.style.backgroundColor = 'gray'


}
function fechaEmpresaFavoritaDados() {
    const divDados = document.querySelectorAll('.copiarDados i')
    for (let i = 0; i < divDados.length; i++) {
        divDados[i].addEventListener('click', () => {
            divDados[i].parentElement.remove()
        })
    }
}

const carregaEmpresasFavoritasLoad = async () => {
    const data = JSON.parse(localStorage.getItem('favoritosCNPJ'))
    const empresasFavoritasCarregadas = document.querySelector('#empresasFavoritasCarregadas')
    if (localStorage.getItem('loadFastFavoritos') != null) {
        empresasFavoritasCarregadas.innerHTML = localStorage.getItem('loadFastFavoritos')
    }
    empresasFavoritasCarregadas.innerHTML = ``

    async function geraEmpresaL(e, index) {

        const urlC = `https://minhareceita.org/${e}`

        const estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]


        const response = await fetch(urlC);
        const dataEmpresa = await response.json();

        const mei = dataEmpresa.opcao_pelo_mei == true ? `<a href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/emissao-de-comprovante-ccmei" target="_blank">
        <abbr title="CCMEI - ${dataEmpresa.razao_social} ${dataEmpresa.cnpj}">
            <p><img src="./src/img/icons/mei-grupo.png" alt=""></p>
        </abbr>
    </a>`: ''
        if (dataEmpresa.uf == estados[0]) {
            var linkEstadual = `http://sefaznet.ac.gov.br/sefazonline/servlet/hpfsincon`
        } else if (dataEmpresa.uf == estados[1]) {
            var linkEstadual = `http://www.sefaz.al.gov.br/asp/sintegra/sintegra.asp?estado=AL`
        } else if (dataEmpresa.uf == estados[2]) {
            var linkEstadual = `http://www.sefaz.ap.gov.br/sate/seg/SEGf_AcessarFuncao.jsp?cdFuncao=CAD_011`
        } else if (dataEmpresa.uf == estados[3]) {
            var linkEstadual = `http://www.sefaz.am.gov.br/sintegra/sintegra0.asp`
        } else if (dataEmpresa.uf == estados[4]) {
            var linkEstadual = `http://www.sefaz.ba.gov.br/Sintegra/sintegra.asp?estado=BA`
        } else if (dataEmpresa.uf == estados[5]) {
            var linkEstadual = `https://servicos.sefaz.ce.gov.br/internet/Sintegra/Sintegra.Asp?estado=CE`
        } else if (dataEmpresa.uf == estados[6]) {
            var linkEstadual = `https://ww1.receita.fazenda.df.gov.br/icms/sintegra-consulta`
        } else if (dataEmpresa.uf == estados[7]) {
            var linkEstadual = `http://www.sintegra.es.gov.br/`
        } else if (dataEmpresa.uf == estados[8]) {
            var linkEstadual = `http://appasp.sefaz.go.gov.br/Sintegra/Consulta/default.asp`
        } else if (dataEmpresa.uf == estados[9]) {
            var linkEstadual = `http://aplicacoes.ma.gov.br/sintegra/jsp/consultaSintegra/consultaSintegraFiltro.jsf`
        } else if (dataEmpresa.uf == estados[10]) {
            var linkEstadual = `https://www.sefaz.mt.gov.br/cadastro/emissaocartao/emissaocartaocontribuinteacessodireto`
        } else if (dataEmpresa.uf == estados[11]) {
            var linkEstadual = `http://www1.sefaz.ms.gov.br/Cadastro/sintegra/cadastromsCCI.asp`
        } else if (dataEmpresa.uf == estados[12]) {
            var linkEstadual = `http://consultasintegra.fazenda.mg.gov.br/`
        } else if (dataEmpresa.uf == estados[13]) {
            var linkEstadual = `http://app.sefa.pa.gov.br/Sintegra/`
        } else if (dataEmpresa.uf == estados[14]) {
            var linkEstadual = `https://www4.sefaz.pb.gov.br/sintegra`
        } else if (dataEmpresa.uf == estados[15]) {
            var linkEstadual = `http://www.sintegra.fazenda.pr.gov.br/sintegra/`
        } else if (dataEmpresa.uf == estados[16]) {
            var linkEstadual = `http://www.sintegra.sefaz.pe.gov.br/`
        } else if (dataEmpresa.uf == estados[17]) {
            var linkEstadual = `http://web.sintegra.sefaz.pi.gov.br/`
        } else if (dataEmpresa.uf == estados[18]) {
            var linkEstadual = `http://www4.fazenda.rj.gov.br/sincad-web/index.jsf`
        } else if (dataEmpresa.uf == estados[19]) {
            var linkEstadual = `http://www.set.rn.gov.br/uvt/consultacontribuinte.aspx`
        } else if (dataEmpresa.uf == estados[20]) {
            var linkEstadual = `https://www.sefaz.rs.gov.br/consultas/contribuinte`
        } else if (dataEmpresa.uf == estados[21]) {
            var linkEstadual = `http://www.sefin.ro.gov.br/sint_consul.asp`
        } else if (dataEmpresa.uf == estados[22]) {
            var linkEstadual = `https://portalapp.sefaz.rr.gov.br/siate/servlet/wp_siate_consultasintegra`
        } else if (dataEmpresa.uf == estados[23]) {
            var linkEstadual = `http://sistemas3.sef.sc.gov.br/sintegra/consulta_empresa_pesquisa.aspx`
        } else if (dataEmpresa.uf == estados[24]) {
            var linkEstadual = `https://www.cadesp.fazenda.sp.gov.br/Pages/Cadastro/Consultas/ConsultaPublica/ConsultaPublica.aspx`
        } else if (dataEmpresa.uf == estados[25]) {
            var linkEstadual = `https://security.sefaz.se.gov.br/SIC/sintegra/index.jsp`
        } else {
            var linkEstadual = `http://sintegra.sefaz.to.gov.br/`
        }

        const estadoEmpresa = dataEmpresa.cnpj
        empresasFavoritasCarregadas.innerHTML += `  <div class="buscaEmpresa">
        <span class="infodoFavorito">
            <p><strong>${dataEmpresa.razao_social}</strong> - ${dataEmpresa.cnpj}</p>
            <button onclick="editaInfoEmpresaFavorito('${dataEmpresa.cnpj}')"><abbr title="MAIS INFORMAÇÕES"><i class="bi bi-info-square-fill"></i></abbr></button>
            <button onclick="excluirInfoEmpresaFavorito('${index}-${dataEmpresa.razao_social}-${dataEmpresa.cnpj}')"><abbr title="EXCLUIR FAVORITO"><i class="bi bi-trash2-fill"></i></abbr></button>
        </span>
       
        <div>
            ${mei}        
            <a href="https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp?cnpj=${dataEmpresa.cnpj}"
                target="_blank">
                <abbr title="Consulta CNPJ - ${dataEmpresa.razao_social}">
                    <p><img src="./src/img/icons/consulta-cnpj.png" alt=""></p>
                </abbr>
            </a>
            <a href="${linkEstadual}" target="_blank">
                <abbr title="Inscrição Estadual de ${dataEmpresa.razao_social}">
                    <p><img src="./src/img/icons/inscricao-estadual.png" alt=""></p>
                </abbr>
            </a>
            <a href="https://emissornfe.sebrae.com.br/?utm_source=portal_sebrae&utm_medium=meio_pagina&utm_campaign=campanha1" target="_blank">
                <abbr title="Nota Fiscal de Produtos - ${dataEmpresa.razao_social}">
                    <p><img src="./src/img/icons/nota-fiscal-de-produtos.png" alt=""></p>
                </abbr>
            </a>
            <a href="https://www.nfse.gov.br/EmissorNacional/Login?ReturnUrl=%2fEmissorNacional" target="_blank">
                <abbr title="Nota Fiscal de Serviços">
                    <p><img src="./src/img/icons/nota-fiscal-de-servico.png" alt="${dataEmpresa.razao_social}"></p>
                </abbr>
            </a>
            <a href="https://www.fgts.gov.br/Pages/sou-empregador/certificado-de-regularidade-do-fgts-crf.aspx" target="_blank">
                <abbr title="Certidão FGTS">
                    <p><img src="./src/img/icons/debitos-trabalhistas.png" alt=""></p>
                </abbr>
            </a>
            <a href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir?NI=${dataEmpresa.cnpj}" target="_blank">
                <abbr title="Certidão Negativa Receita Federal ${dataEmpresa.razao_social}">
                    <p><img src="./src/img/icons/edificio-do-governo.png" alt=""></p>
                </abbr>
            </a>
            <a href="http://cnd.dataprev.gov.br/cws/contexto/cnd/cnd.html" target="_blank">
                <abbr title="Certidão do INSS - Previdência Social">
                    <p><img src="./src/img/icons/inss-coffee.png" alt=""></p>
                </abbr>
            </a>
            <a href="https://cndt-certidao.tst.jus.br/inicio.faces?gerarCertidaoForm:cpfCnpj=${dataEmpresa.cnpj}" target="_blank">
                <abbr title="Certidão Negativa de Débitos Trabalhistas">
                    <p><img src="./src/img/icons/certidao-debitos-trabalhistas.png" alt=""></p>
                </abbr>
            </a>
        </div>
    </div>`
    }
    empFav.textContent = data.length
    await data.map((e, index) => {
        //alterar quantidade e pesquisa
        const empresasL = geraEmpresaL(e, index)

    })

    //imadeload.remove()
    //setTimeout('imadeload.remove()', 1000)
    setTimeout('pegaHTMLFavoritos()', 1000)

}
function pegaHTMLFavoritos() {
    const imageLoadsntes = `<img id="imadeload" src="./src/img/load.gif" alt="">`
    const empresasFavoritasCarregadas = document.querySelector('#empresasFavoritasCarregadas').innerHTML
    localStorage.setItem('loadFastFavoritos', imageLoadsntes + empresasFavoritasCarregadas)

}

if (document.querySelector('#empresasFavoritasCarregadas') != null) {
    carregaEmpresasFavoritasLoad()
}


function search_animal() {
    const mostraSer = document.querySelector('#empresasFavoritasCarregadas');

    var input1 = document.getElementById('cnpjGerado').value

    if (input1.toString().length == 0) {
        document.getElementById('cnpjGerado').value = ' '
    }
    var input = document.getElementById('cnpjGerado').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('buscaEmpresa');



    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input) || input.length <= 0) {
            x[i].style.display = "none";
            //mostraSer.style.display = "none"
            //mostraSer.style.display = "block" 

        }
        else {
            x[i].style.display = "flex";
            mostraSer.style.display = "block"
        }
    }
}

async function linkSLoadInte() {
    const response = await fetch('./links-interessantes')
    const data = await response.json()
    localStorage.setItem('linkInteress', JSON.stringify(data))

}
if (localStorage.getItem('linkInteress') == null) {
    linkSLoadInte()
    //location.reload()
}

function linkSInte() {
    const data = JSON.parse(localStorage.getItem('linkInteress'))
    const linksInteressantes = document.querySelector('#linksInteressantes')
    data.map((e) => {
        linksInteressantes.innerHTML += `<div style="background-color: rgb(176, 243, 202); align-items: center;">
        <p>${e.nome.toUpperCase()}:</p>
        <span>
            <i class="bi bi-link"></i>
            <a href="${e.link}" target="_blank">Link de ${e.nome}</a>
        </span>
    </div> `
    })


}
if (document.querySelector('#linksInteressantes') != null) {
    linkSInte()
}

function editarLinksInteressantes() {
    const data = JSON.parse(localStorage.getItem('linkInteress'))
    const editaveisEEclusoes = document.querySelector('#editaveisEEclusoes')
    const limpaTela = document.querySelector('#linksInteressantes')

    limpaTela.innerHTML = ''
    editaveisEEclusoes.innerHTML = ''
    data.map((e) => {
        editaveisEEclusoes.innerHTML += `<div class="editarLinkOk">
        <p>Edit:</p>
        <input type="text" value="${e.nome}">
        <input type="text" value="${e.link}">
        
    </div>   `
    })
    editaveisEEclusoes.innerHTML += `<button onclick="atualizaLinkInte()">Atualizar</button>`
}

function adiconarLinksInteressantes() {
    const data = JSON.parse(localStorage.getItem('linkInteress'))
    const editaveisEEclusoes = document.querySelector('#editaveisEEclusoes')
    const limpaTela = document.querySelector('#linksInteressantes')

    limpaTela.innerHTML = ''
    editaveisEEclusoes.innerHTML = ''
    editaveisEEclusoes.innerHTML = `<div class="adicionarLinkOk">
        <p>Add:</p>
        <input type="text" placeholder="Ex: CND Municipal">
        <input type="text" placeholder="Ex: https://google.com">
        <button onclick="adicionaMaisLink()">OK</button>`
    // data.map((e) => {
    //     editaveisEEclusoes.innerHTML = `<div class="adicionarLinkOk">
    //     <p>Add:</p>
    //     <input type="text" placeholder="Ex: CND Municipal">
    //     <input type="text" placeholder="Ex: https://google.com">
    //     <button onclick="adicionaMaisLink()">OK</button>`
    // })
    editaveisEEclusoes.innerHTML += `<button onclick="location.reload()">Voltar</button>`
}
function adicionaMaisLink() {
    const data = JSON.parse(localStorage.getItem('linkInteress'))
    const nome = document.querySelectorAll('.adicionarLinkOk input')
    const link = document.querySelectorAll('.adicionarLinkOk input')[1].value
    if (link.toString().includes('http')) {
        var linkCorreto = link
    } else {
        var linkCorreto = `http://${link}`
    }
    const maisUm = {
        "nome": nome[0].value,
        "link": linkCorreto
    }
    data.unshift(maisUm)
    localStorage.setItem('linkInteress', JSON.stringify(data))
    location.reload()
}
function excluirLinksInteressantes() {
    const data = JSON.parse(localStorage.getItem('linkInteress'))
    const editaveisEEclusoes = document.querySelector('#editaveisEEclusoes')
    const limpaTela = document.querySelector('#linksInteressantes')

    limpaTela.innerHTML = ''
    editaveisEEclusoes.innerHTML = ''
    data.map((e) => {
        editaveisEEclusoes.innerHTML += `<div style="background-color: rgb(243, 176, 176); cursor: pointer;" class="excluirLinkF">
        <p>${e.nome}:</p>
        <span >
            <a href="${e.link}" target="_blank">${e.nome}</a>
            <abbr title="EXCLUIR"><i class="cp bi bi-trash3-fill"></i></abbr>
        </span>
    </div> `
    })
    editaveisEEclusoes.innerHTML += `<button onclick="location.reload()">Voltar</button>`
    excluirFLinksFront()

}
function excluirFLinksFront() {
    const data = JSON.parse(localStorage.getItem('linkInteress'))
    const excluirLinkF = document.querySelectorAll('.excluirLinkF')
    for (let index = 0; index < excluirLinkF.length; index++) {
        excluirLinkF[index].addEventListener('click', () => {


            data.splice(index, 1)
            localStorage.setItem('linkInteress', JSON.stringify(data))




            excluirLinksInteressantes()

        })
    }


}
function atualizaLinkInte() {
    //const data = JSON.parse(localStorage.getItem('linkInteress'))
    var data = []
    const editaveisEEclusoes = document.querySelector('#editaveisEEclusoes')
    const divInfo = document.querySelectorAll('.editarLinkOk')

    for (let i = 0; i < divInfo.length; i++) {
        const nome = divInfo[i].querySelectorAll('input')[0].value
        const link = divInfo[i].querySelectorAll('input')[1].value
        if (link.toString().includes('http')) {
            var linkCorreto = link
        } else {
            var linkCorreto = `http://${link}`
        }
        const FavLink = {
            "nome": nome,
            "link": linkCorreto
        }
        data.push(FavLink)

    }
    localStorage.setItem('linkInteress', JSON.stringify(data))
    location.reload()

}
const ondeEditar = document.querySelectorAll('.ondeEditar button')

if (ondeEditar.length > 1) {
    ondeEditar[0].addEventListener('click', () => {
        editarLinksInteressantes()
    })
    ondeEditar[1].addEventListener('click', () => {
        excluirLinksInteressantes()
    })
    ondeEditar[2].addEventListener('click', () => {
        adiconarLinksInteressantes()
    })


}
if (document.querySelector('.todasTarefasConcluidas') != null) {
    carregatarefasC()
}
function geraDatasIniciais() {
    const data = JSON.parse(localStorage.getItem('tarefasConcluidas'))
    const todasTarefasConcluidas = document.querySelector('#selecionaDataAtividade')
    var dataC = []
    var dataEmpre = data.filter(function (este, i) {
        const dat = data[i].dataconcluida.toString().split('T')[0].split('-').reverse().join('-')

        dataC.push(dat)
        return data[i].dataconcluida.indexOf(este) === dat;
    });


    var novaArr = dataC.filter(function (este, i) {
        return dataC.indexOf(este) === i;
    });

    function ordemCrescente(a, b) {
        return new Date('10-06-2018') - new Date('10-05-2018');
    }

    novaArr.map((e) => {
        todasTarefasConcluidas.innerHTML += `<option>${e}</option>`
    })
}
function loadTarefasC() {
    const data = JSON.parse(localStorage.getItem('tarefasConcluidas'))
    const todasTarefasConcluidas = document.querySelector('.todasTarefasConcluidas')
    const indC = document.querySelector('select#selecionaDataAtividade').selectedIndex
    const vOne = document.querySelector('select#selecionaDataAtividade')
    const vTwo = vOne.options[vOne.selectedIndex].textContent





    if (indC == 0) {

        carregatarefasC()
    } else {
        datamos.textContent = vTwo
        todasTarefasConcluidas.innerHTML = ''
        data.map((e) => {
            vOne.innerHTML = ``
            vOne.innerHTML = `<option>Selecione</option>`
            const dat = e.dataconcluida.toString().split('T')[0].split('-').reverse().join('-')
            const hor = e.dataconcluida.toString().split('T')[1].split('.').reverse().join('-')
            console.log(vTwo == dat)
            if (vTwo == dat) {
                todasTarefasConcluidas.innerHTML += `<span class="tarefaConcl">
            <div style="background-color: rgb(176, 243, 202); cursor: pointer; align-items: center;"> 
                <p>Titulo:</p>
                <h5>${e.titulo}</h5>
                <h5>${dat} / ${e.dataL}</h5>
                <abbr title="DELETE"><i class="bi bi-x-circle-fill deletarTConcl" style="z-index: 999; color: rgb(119, 0, 0);"></i></abbr>
            </div>
            <div class="copiarDados" style="display: none;">
                <abbr title="Copiar">
                    <h4>${dat} / ${e.dataL} <br> ${e.titulo} <br>${e.mensagem}</h4>
                    <p>Finalizada: ${dat} às ${hor.split('-')[1]}</p>
                </abbr>
            </div>
            </span>`

            }


        })
    }
    //carregatarefasC()
    geraDatasIniciais()
    geradorDeCopiarInfoEmpresa()
    geraCliqueConcluidos()
}
function carregatarefasC() {
    const data = JSON.parse(localStorage.getItem('tarefasConcluidas'))
    const todasTarefasConcluidas = document.querySelector('.todasTarefasConcluidas')

    geraDatasIniciais()
    todasTarefasConcluidas.innerHTML = ''
    data.map((e) => {
        const dat = e.dataconcluida.toString().split('T')[0].split('-').reverse().join('-')
        const hor = e.dataconcluida.toString().split('T')[1].split('.').reverse().join('-')

        todasTarefasConcluidas.innerHTML += `<span class="tarefaConcl">
        <div style="background-color: rgb(176, 243, 202); cursor: pointer; align-items: center;"> 
            <p>Titulo:</p>
            <h5>${e.titulo}</h5>
            <h5>${dat} / ${e.dataL}</h5>
            <abbr title="DELETE"><i class="bi bi-x-circle-fill deletarTConcl" style="z-index: 999; color: rgb(119, 0, 0);"></i></abbr>
        </div>
        <div class="copiarDados" style="display: none;">
            <abbr title="Copiar">
                <h4>${dat} / ${e.dataL} <br> ${e.titulo} <br>${e.mensagem}</h4>
                <p>Finalizada: ${dat} às ${hor.split('-')[1]}</p>
            </abbr>
        </div>
    </span>`
    })
    geradorDeCopiarInfoEmpresa()
    geraCliqueConcluidos()
}

function geraCliqueConcluidos() {
    const tarefaConcl = document.querySelectorAll('.tarefaConcl')
    const data = JSON.parse(localStorage.getItem('tarefasConcluidas'))


    for (let index = 0; index < tarefaConcl.length; index++) {
        const doClick = tarefaConcl[index].querySelector('div')



        doClick.addEventListener('click', () => {

            const janelaInfo = tarefaConcl[index].querySelectorAll('div')[1]
            const janelaInf = tarefaConcl[index].querySelectorAll('div')[1].style.display
            if (janelaInf == 'none') {
                doClick.style.backgroundColor = 'gray'
                doClick.style.color = 'white'
                janelaInfo.style.display = 'block'
            } else {
                doClick.style.backgroundColor = 'rgb(176, 243, 202)'
                doClick.style.color = 'black'
                janelaInfo.style.display = 'none'
            }

        })

    }
    console.log(data)
    const deletarTConcl = document.querySelectorAll('.deletarTConcl')
    console.log(deletarTConcl)
    for (let i = 0; i < deletarTConcl.length; i++) {
        //console.log(deletarTConcl[i])
        //deletarTConcl[i].childNodes.remove()     
        deletarTConcl[i].addEventListener('click', () => {
            const vOne = document.querySelector('select#selecionaDataAtividade')
            vOne.innerHTML = ``
            vOne.innerHTML = `<option>Selecione</option>`

            data.splice(i, 1)
            console.log([i])
            tarefaConcl[i].remove()


            localStorage.setItem('tarefasConcluidas', JSON.stringify(data))
            carregatarefasC()
            loadTarefasC()
        })
    }
}
