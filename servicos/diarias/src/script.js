if (document.querySelectorAll('nav')[0] != null) {
    document.querySelectorAll('nav')[0].innerHTML = `
<li> <a href="./index.html">Inicio</a></li>
<fieldset>
<legend>Funcionário</legend>
<li><a href="./cadastro.html">Cadastro Funcionário</a></li>
<li><a href="./editar.html">Editar Funcionário</a></li>
<li><a href="./excluir.html">Excluir Funcionário</a></li>
</fieldset>
<fieldset>
<legend>Eventos</legend>
<li><a href="./cadastro-de-evento.html">Cadastrar Evento</a></li>
<li><a href="./editar-evento.html">Editar Evento</a></li>
<li><a href="./excluir-evento.html">Excluir Evento</a></li>
</fieldset>
<fieldset>
<legend>Diária</legend>
<li><a href="./vincular.html">Vincular</a></li>
<li><a href="./diaria.html">Formulário de Solicitação</a></li>
<li><a href="./diaria.html">Diária</a></li>
<li> <a href="/">Página Principal</a></li>
<li> <a href="/">Backup</a></li>
</fieldset>
<fieldset>
<legend>Relatórios</legend>
<li><a href="./diaria.html">Servidores</a></li>
<li><a href="./diaria.html">Eventos</a></li>
<li><a href="./diaria.html">Diárias</a></li>
<li> <a href="/">Backup</a></li>
<li> <a href="./documentacao.html">Documentação</a></li>
</fieldset> 
<fieldset>
<legend>Parâmetros</legend>
<li> <a href="./indenizacao.html">$ Indenização Km</a></li>
<li> <a href="./valor-por-cargo.html">$ Valor por Cargo - Distância - População</a></li>
<li> <a href="./nome-prefeito.html">Nome do Prefeito</a></li>
<li> <a href="./nome-secretario.html">Nome do Secretario</a></li>`
}

const has = window.location.hash


if (localStorage.getItem('valorIndenizacao') == null) {
    localStorage.setItem('valorIndenizacao', JSON.stringify(["0.80"]))
    localStorage.setItem('nomeprefeito', JSON.stringify(["Hércules Vandy Durães da Fonseca"]))
    localStorage.setItem('nomesecretario', JSON.stringify(["Paulo André Rabelo da Fonseca"]))

    
    localStorage.setItem('valorCargo', JSON.stringify(
        [
            {
                "tipo": "SERVIDOR(A) PÚBLICO",
                "ate20Mil": 60,
                "acima20Mil": 80,
                "capital": 200,
                "df": 300
            },
            {
                "tipo": "SECRETÁRIO(A)",
                "ate20Mil": 150,
                "acima20Mil": 200,
                "capital": 320,
                "df": 500
            },
            {
                "tipo": "PROCURADOR(A)",
                "ate20Mil": 150,
                "acima20Mil": 200,
                "capital": 320,
                "df": 500
            },
            {
                "tipo": "PREFEITO(A)",
                "ate20Mil": 250,
                "acima20Mil": 350,
                "capital": 550,
                "df": 800
            },
            {
                "tipo": "VICE-PREFEITO(A)",
                "ate20Mil": 250,
                "acima20Mil": 350,
                "capital": 550,
                "df": 800
            }

        ]))
}
function atualizaValorPorCargoF() {
    const valorNormal = JSON.parse(localStorage.getItem('valorCargo'))
    const h3Cargo = document.querySelectorAll('h3')[1].textContent
    console.log(h3Cargo)

    //const index = valor.findIndex(objeto => objeto.key === objetoParaExcluir);

    console.log(valorNormal)

    const valorAAterar = valorNormal.find(novoObjeto => novoObjeto.tipo == h3Cargo)
    //response.find(objeto => objeto.cpf === verificaCadastro);

    console.log(valorAAterar)

    if (valorAAterar) {

        valorAAterar.tipo = h3Cargo;
        valorAAterar.ate20Mil = valorAte20milHabitantes.value;
        valorAAterar.acima20Mil = valorAcima20milHabitantes.value;
        valorAAterar.capital = capitaislHabitantes.value;
        valorAAterar.df = brasiliaHabitantes.value;

        // O objeto dentro do array foi editado
        localStorage.setItem('valorCargo', JSON.stringify(valorNormal))
        location.reload();
    } else {
        console.log('Objeto não encontrado');
    }

}
if (document.querySelector('#atualizaValorPorCargo') != null) {
    const atualizaValorPorCargo = document.querySelector('#atualizaValorPorCargo')
    atualizaValorPorCargo.addEventListener('click', () => {
        atualizaValorPorCargoF()
    })
}
function dadosDiariaPorCargo() {
    const tabelaMostra = document.querySelector('.tabelaMostra')
    const cargoSelect = document.querySelector('#verificaCargo')
    const cargo = cargoSelect.options[cargoSelect.selectedIndex].textContent

    const servidoresDiaria = JSON.parse(localStorage.getItem('valorCargo'))

    const cidadeAte20k = document.querySelectorAll('table tr td')[4]
    const cidadeAte20kMeia = document.querySelectorAll('table tr td')[5]
    const cidadeMais20k = document.querySelectorAll('table tr td')[7]
    const cidadeMais20kMeia = document.querySelectorAll('table tr td')[8]
    const capitaisGeral = document.querySelectorAll('table tr td')[10]
    const capitaisGeralMeia = document.querySelectorAll('table tr td')[11]
    const distritoDF = document.querySelectorAll('table tr td')[13]
    const distritoDFMeia = document.querySelectorAll('table tr td')[14]
    const h3Cargo = document.querySelectorAll('h3')[1]

    console.log(h3Cargo)
    if (cargo == 'Selecione') {
        tabelaMostra.classList.add('dnone')
        atualizaValorPorCargo.disabled = true
        h3Cargo.textContent = cargo.toUpperCase()
        valorAte20milHabitantes.value = null
        valorAcima20milHabitantes.value = null
        capitaislHabitantes.value = null
        capitaislHabitantes.value = null
        brasiliaHabitantes.value = null
    } else if (cargo == 'Servidor(a) Público') {
        tabelaMostra.classList.remove('dnone')
        cidadeAte20k.textContent = `R$ ${servidoresDiaria[0].ate20Mil},00`
        cidadeAte20kMeia.textContent = `R$ ${servidoresDiaria[0].ate20Mil / 2},00`

        cidadeMais20k.textContent = `R$ ${servidoresDiaria[0].acima20Mil},00`
        cidadeMais20kMeia.textContent = `R$ ${servidoresDiaria[0].ate20Mil / 2},00`

        capitaisGeral.textContent = `R$ ${servidoresDiaria[0].capital},00`
        capitaisGeralMeia.textContent = `R$ ${servidoresDiaria[0].capital / 2},00`

        distritoDF.textContent = `R$ ${servidoresDiaria[0].df},00`
        distritoDFMeia.textContent = `R$ ${servidoresDiaria[0].df / 2},00`



        h3Cargo.textContent = cargo.toUpperCase()
        valorAte20milHabitantes.value = servidoresDiaria[0].ate20Mil
        valorAcima20milHabitantes.value = servidoresDiaria[0].acima20Mil
        capitaislHabitantes.value = servidoresDiaria[0].capital
        capitaislHabitantes.value = servidoresDiaria[0].capital
        brasiliaHabitantes.value = servidoresDiaria[0].df

        atualizaValorPorCargo.disabled = false


    } else if (cargo == 'Secretário(a)') {
        tabelaMostra.classList.remove('dnone')
        cidadeAte20k.textContent = `R$ ${servidoresDiaria[1].ate20Mil},00`
        cidadeAte20kMeia.textContent = `R$ ${servidoresDiaria[1].ate20Mil / 2},00`

        cidadeMais20k.textContent = `R$ ${servidoresDiaria[1].acima20Mil},00`
        cidadeMais20kMeia.textContent = `R$ ${servidoresDiaria[1].ate20Mil / 2},00`

        capitaisGeral.textContent = `R$ ${servidoresDiaria[1].capital},00`
        capitaisGeralMeia.textContent = `R$ ${servidoresDiaria[1].capital / 2},00`

        distritoDF.textContent = `R$ ${servidoresDiaria[1].df},00`
        distritoDFMeia.textContent = `R$ ${servidoresDiaria[1].df / 2},00`



        h3Cargo.textContent = cargo.toUpperCase()
        valorAte20milHabitantes.value = servidoresDiaria[1].ate20Mil
        valorAcima20milHabitantes.value = servidoresDiaria[1].acima20Mil
        capitaislHabitantes.value = servidoresDiaria[1].capital
        capitaislHabitantes.value = servidoresDiaria[1].capital
        brasiliaHabitantes.value = servidoresDiaria[1].df

        atualizaValorPorCargo.disabled = false

    } else if (cargo == 'Procurador(a)') {
        tabelaMostra.classList.remove('dnone')
        cidadeAte20k.textContent = `R$ ${servidoresDiaria[2].ate20Mil},00`
        cidadeAte20kMeia.textContent = `R$ ${servidoresDiaria[2].ate20Mil / 2},00`

        cidadeMais20k.textContent = `R$ ${servidoresDiaria[2].acima20Mil},00`
        cidadeMais20kMeia.textContent = `R$ ${servidoresDiaria[2].ate20Mil / 2},00`

        capitaisGeral.textContent = `R$ ${servidoresDiaria[2].capital},00`
        capitaisGeralMeia.textContent = `R$ ${servidoresDiaria[2].capital / 2},00`

        distritoDF.textContent = `R$ ${servidoresDiaria[2].df},00`
        distritoDFMeia.textContent = `R$ ${servidoresDiaria[2].df / 2},00`


        h3Cargo.textContent = cargo.toUpperCase()
        valorAte20milHabitantes.value = servidoresDiaria[2].ate20Mil
        valorAcima20milHabitantes.value = servidoresDiaria[2].acima20Mil
        capitaislHabitantes.value = servidoresDiaria[2].capital
        capitaislHabitantes.value = servidoresDiaria[2].capital
        brasiliaHabitantes.value = servidoresDiaria[2].df

        atualizaValorPorCargo.disabled = false

    } else if (cargo == 'Prefeito(a)') {
        tabelaMostra.classList.remove('dnone')
        cidadeAte20k.textContent = `R$ ${servidoresDiaria[3].ate20Mil},00`
        cidadeAte20kMeia.textContent = `R$ ${servidoresDiaria[3].ate20Mil / 2},00`

        cidadeMais20k.textContent = `R$ ${servidoresDiaria[3].acima20Mil},00`
        cidadeMais20kMeia.textContent = `R$ ${servidoresDiaria[3].ate20Mil / 2},00`

        capitaisGeral.textContent = `R$ ${servidoresDiaria[3].capital},00`
        capitaisGeralMeia.textContent = `R$ ${servidoresDiaria[3].capital / 2},00`

        distritoDF.textContent = `R$ ${servidoresDiaria[3].df},00`
        distritoDFMeia.textContent = `R$ ${servidoresDiaria[3].df / 2},00`


        h3Cargo.textContent = cargo.toUpperCase()
        valorAte20milHabitantes.value = servidoresDiaria[3].ate20Mil
        valorAcima20milHabitantes.value = servidoresDiaria[3].acima20Mil
        capitaislHabitantes.value = servidoresDiaria[3].capital
        capitaislHabitantes.value = servidoresDiaria[3].capital
        brasiliaHabitantes.value = servidoresDiaria[3].df

        atualizaValorPorCargo.disabled = false

    } else if (cargo == 'Vice-prefeito(a)') {
        tabelaMostra.classList.remove('dnone')
        cidadeAte20k.textContent = `R$ ${servidoresDiaria[4].ate20Mil},00`
        cidadeAte20kMeia.textContent = `R$ ${servidoresDiaria[4].ate20Mil / 2},00`

        cidadeMais20k.textContent = `R$ ${servidoresDiaria[4].acima20Mil},00`
        cidadeMais20kMeia.textContent = `R$ ${servidoresDiaria[4].ate20Mil / 2},00`

        capitaisGeral.textContent = `R$ ${servidoresDiaria[4].capital},00`
        capitaisGeralMeia.textContent = `R$ ${servidoresDiaria[4].capital / 2},00`

        distritoDF.textContent = `R$ ${servidoresDiaria[4].df},00`
        distritoDFMeia.textContent = `R$ ${servidoresDiaria[4].df / 2},00`


        h3Cargo.textContent = cargo.toUpperCase()
        valorAte20milHabitantes.value = servidoresDiaria[4].ate20Mil
        valorAcima20milHabitantes.value = servidoresDiaria[4].acima20Mil
        capitaislHabitantes.value = servidoresDiaria[4].capital
        capitaislHabitantes.value = servidoresDiaria[4].capital
        brasiliaHabitantes.value = servidoresDiaria[4].df

        atualizaValorPorCargo.disabled = false

    } else {
        tabelaMostra.classList.remove('dnone')
        cidadeAte20k.textContent = `R$ ${servidoresDiaria[4].ate20Mil},00`
        cidadeAte20kMeia.textContent = `R$ ${servidoresDiaria[4].ate20Mil / 2},00`

        cidadeMais20k.textContent = `R$ ${servidoresDiaria[4].acima20Mil},00`
        cidadeMais20kMeia.textContent = `R$ ${servidoresDiaria[4].ate20Mil / 2},00`

        capitaisGeral.textContent = `R$ ${servidoresDiaria[4].capital},00`
        capitaisGeralMeia.textContent = `R$ ${servidoresDiaria[4].capital / 2},00`

        distritoDF.textContent = `R$ ${servidoresDiaria[4].df},00`
        distritoDFMeia.textContent = `R$ ${servidoresDiaria[4].df / 2},00`


        h3Cargo.textContent = cargo.toUpperCase()
        valorAte20milHabitantes.value = servidoresDiaria[4].ate20Mil
        valorAcima20milHabitantes.value = servidoresDiaria[4].acima20Mil
        capitaislHabitantes.value = servidoresDiaria[4].capital
        capitaislHabitantes.value = servidoresDiaria[4].capital
        brasiliaHabitantes.value = servidoresDiaria[4].df

        atualizaValorPorCargo.disabled = false

    }
}

function loadBank() {
    const idBancoOne = document.querySelector('#idBanco')
    const idBanco = idBancoOne.options[idBancoOne.selectedIndex].value;
    if (idBanco == 'Outro') {
        outroBanco.style.display = 'block'
    } else {
        outroBanco.style.display = 'none'
    }
    console.log(idBanco)
}
var urlEndereco = location.pathname

if (urlEndereco == '/servicos/diarias/indenizacao.html') {
    const valorInde = JSON.parse(localStorage.getItem('valorIndenizacao'))
    valordeIndenizacaokmatual.value = valorInde[0]
}

if (urlEndereco == '/servicos/diarias/nome-prefeito.html') {
    const valorInde = JSON.parse(localStorage.getItem('nomeprefeito'))
    nomePrefeito.value = valorInde[0]
}

if (urlEndereco == '/servicos/diarias/nome-secretario.html') {
    const valorInde = JSON.parse(localStorage.getItem('nomesecretario'))
    nomesecretario.value = valorInde[0]
}




if (document.querySelector('#atualizarIndenizacao') != null) {
    document.querySelector('#atualizarIndenizacao').addEventListener('click', () => {
        const valorLocal = []
        const valorInde = JSON.parse(localStorage.getItem('valorIndenizacao'))
        const valorIn = document.querySelector('#valordeIndenizacaokmNovo').value
        if (valorIn.includes(',')) {
            var valorI = valorIn.replace(/,/gi, '.')
        } else {
            var valorI = valorIn
        }

        valorLocal.push(valorI)
        console.log(valorI)
        localStorage.setItem('valorIndenizacao', JSON.stringify(valorLocal))

        location.reload()

    })
}

if (document.querySelector('#atualizarPrefeito') != null) {
    document.querySelector('#atualizarPrefeito').addEventListener('click', () => {
        const nPrefeito = []
        const valorInde = JSON.parse(localStorage.getItem('nomeprefeito'))
        const valorIn = document.querySelector('#novoPrefeito').value
       

        nPrefeito.push(valorIn)
        console.log(valorIn)
        localStorage.setItem('nomeprefeito', JSON.stringify(nPrefeito))

        location.reload()

    })
}

if (document.querySelector('#atualizarSecretario') != null) {
    document.querySelector('#atualizarSecretario').addEventListener('click', () => {
        const nSecretario = []
        const valorInde = JSON.parse(localStorage.getItem('nomeprefeito'))
        const valorIn = document.querySelector('#novoSecretario').value
       

        nSecretario.push(valorIn)
        console.log(valorIn)
        localStorage.setItem('nomesecretario', JSON.stringify(nSecretario))
        alert(`Atualizado para: ${valorIn.toUpperCase()}`)

        location.reload()

    })
}


if (document.querySelector('#att') != null || document.querySelector('#att') != undefined) {
    att.innerHTML = `<span class="atencaoC"><strong>*Atenção:</strong>Confira todas as informações</span>`
}

const distanciasCity = async () => {
    const responseMG = await fetch('./arrays/distancias-mg')
    const responseDF = await fetch('./arrays/distancias-df')
    const responseSP = await fetch('./arrays/distancias-sp')
    const responseAC = await fetch('./arrays/distancias-ac')

    const dataMG = await responseMG.json();
    const dataDF = await responseDF.json();
    const dataSP = await responseSP.json();
    const dataAC = await responseAC.json();

    localStorage.setItem('distancias-mg', JSON.stringify(dataMG))
    localStorage.setItem('distancias-df', JSON.stringify(dataDF))
    localStorage.setItem('distancias-sp', JSON.stringify(dataSP))
    localStorage.setItem('distancias-ac', JSON.stringify(dataAC))
}
distanciasCity();

function preencheDiaria(nEvento) {
    const selecionaSer = document.querySelectorAll('select')[0].selectedIndex
    const selecionaEve = document.querySelectorAll('select')[1].selectedIndex

    const ndoServ = selecionaSer - 1
    const ndoEvento = selecionaEve - 1

    const eventoTeste = JSON.parse(localStorage.getItem('eventos'))
    const ServidoresTeste = JSON.parse(localStorage.getItem('servidores'))
    const valorCargoTeste = JSON.parse(localStorage.getItem('valorCargo'))

    const valorPorKm = JSON.parse(localStorage.getItem('valorIndenizacao'))

    const dataDePartida = eventoTeste[ndoEvento].datasEv[0]

    const data = dataDePartida.split('/')

    for (let i = 0; i < eventoTeste[ndoEvento].datasEv.length; i++) {

        var dataPart = eventoTeste[ndoEvento].datasEv[i].split('/')
    }

    const dataInicial = `${data[2]}-${data[1]}-${data[0]}`
    const dataFinal = `${dataPart[2]}-${dataPart[1]}-${dataPart[0]}`

    dataPartida.value = dataInicial
    if (horarioPartida.value == '') horarioPartida.value = '06:00'

    dataChegada.value = dataFinal
    horarioChegada.value = '18:00'

    cidadedoEventoC.value = eventoTeste[ndoEvento].cidade

    distanciaEventoC.value = eventoTeste[ndoEvento].distanciaCidade
    populacaoEventoC.value = eventoTeste[ndoEvento].habitantes



    qtdDeDiaria.value = eventoTeste[ndoEvento].datasEv.length


    if (ServidoresTeste[ndoServ].tipodeCargo == 'Vice-Prefeito') {
        if (populacaoEventoC.value < 20.000) {

            var valorDDS = valorCargoTeste[4].ate20Mil
        }

    } else {
        var valorDDS = 80
    }

    valordaDiaria.value = valorDDS



    if (valorMeiaDiaria.value == '') valorMeiaDiaria.value = 0

    TotaldaDiaria.value = valorDDS * parseInt(qtdDeDiaria.value) + parseInt(valorMeiaDiaria.value)
    console.log(TotaldaDiaria)

    qtdDepassagem.value = '0'
    valordaPassagem.value = 0

    qtddeIndenizacao.value = 0
    valordaindenizacao.value = 0
    valordaindenizacao.value = valorPorKm
    pegaPopulacao(cidadedoEventoC.value)

    qtdpernoite.value = parseInt(qtdDeDiaria.value) - 1



}

async function createCadastro() {
    
    codigoEvento.value == '' ? codigoEvento.value = 1 : codigoEvento.value = parseInt(codigoEvento.value) + 1
    console.log(codigoEvento.value)
    const selecionaSer = document.querySelectorAll('select')[0].selectedIndex
    const selecionaEve = document.querySelectorAll('select')[1].selectedIndex

    const ndoServ = selecionaSer - 1
    const ndoEvento = selecionaEve - 1

    const veiculeOficial = document.querySelector('input[name=veiculoOf]:checked').value
    const tipodeDiariaAnote = document.querySelector('input[name=tipodeDiariaAnote]:checked').value
    const viagemIntermunicipal = document.querySelector('input[name=viagemIntermunicipal]:checked').value

    if (veiculeOficial == 'Sim') {
        var veiculoOficialOn = 'Sim'
    } else {
        var veiculoOficialOn = 'Não'
    }

    const dataServidor = await JSON.parse(localStorage.getItem('servidores'))
    const dataEvento = await JSON.parse(localStorage.getItem('eventos'))
    console.log(dataEvento[ndoEvento].titulo)
    const informacoes = {
        "codigo": codigoEvento.value,
        "nome": dataServidor[ndoServ].nome,
        "cpf": dataServidor[ndoServ].cpf,
        "tipodeCargo": dataServidor[ndoServ].tipodeCargo,
        "matricula": dataServidor[ndoServ].matricula,
        "cargo": dataServidor[ndoServ].cargo,
        "departamento": dataServidor[ndoServ].departamento,
        "tipoConta": dataServidor[ndoServ].tipoConta,
        "agencia": dataServidor[ndoServ].agencia,
        "conta": dataServidor[ndoServ].conta,

        "titleEvent": dataEvento[ndoEvento].titulo,
        "objetivo": dataEvento[ndoEvento].objetivo,
        "cityOfEvent": dataEvento[ndoEvento].cidade,
        "dateOfEvent": dataEvento[ndoEvento].datasEv,
        "distanciaEventoC": distanciaEventoC.value.replace(/ km/, ''),
        "populacaoEventoC": populacaoEventoC.value,

        "veiculoOficial": veiculoOficialOn,
        "placa": placa.value,
        "tipodeDiariaAnote": tipodeDiariaAnote,
        "viagemIntermunicipal": viagemIntermunicipal,
        "justificaVeiculo": justificaVeiculo.value,
        "dadosVeiculoParticular": dadosVeiculoParticular.value,
        "distanciaidaEVolta": parseInt(distanciaEventoC.value.replace(/ km/, '')) * 2
    }
    console.log(dataServidor[ndoServ])
    console.log(informacoes)
    localStorage.setItem('eventoServidorImpressao', JSON.stringify(informacoes))
}

async function pegaPopulacao(cidadePop) {
    const response = await fetch('./arrays/populacao-mg')
    const data = await response.json();

    data.map((citPop) => {
        if (citPop.destinho == cidadePop) {
            populacaoEventoC.value = citPop.populacao.replace(/ hab./gi, '').replace(/ /gi, '.')


            if (populacaoEventoC.value.length > 0) {
                sePop.textContent = ` Habitantes`
            }


        } else {
            if (populacaoEventoC.value.length == 0) {

                sePop.innerHTML = `Ver a população de <a href="https://cidades.ibge.gov.br/brasil/mg/${cidadePop.replace(/ MG/, '').replace(/ /gi, '-').toLowerCase()}/panorama" target="_blank">${cidadePop}</a>`
            }
        }
    })


}

// console.log(document.querySelectorAll('.direito fieldset'))

if (document.querySelector('#selecionaSe') != null) {

    //preencheDiaria();
}


function verificaVeiculoParticular() {
    const radioVP = document.querySelector('input[name=veiculoParticular]:checked').value
    const SimjustificaVeiculo = document.querySelector('#SimjustificaVeiculo')

    if (radioVP == 'sim') {


        SimjustificaVeiculo.style.display = 'block'
    } else {

        SimjustificaVeiculo.style.display = 'none'
    }
}



const cancels = document.querySelector('#cancelS')

if (cancels != null) {
    cancels.addEventListener('click', () => {
        location.reload()
    })

}
const dataSimples = new Date()
const idAnoExercicioano = new Date().getFullYear();
const idAnoExercicio = document.querySelector('#idAnoExercicio')

if (idAnoExercicio != null) {
    idAnoExercicio.value = idAnoExercicioano

    if (dataSimples.getDate().toString().length == 1) {
        var diaDHoje = '0' + dataSimples.getDate()
    } else {
        var diaDHoje = dataSimples.getDate()
    }
    if (dataSimples.getMonth().toString().length == 1) {
        var mesDHoje = '0' + parseInt(dataSimples.getMonth() + 1)
    } else {
        var mesDHoje = parseInt(dataSimples.getMonth() + 1)
    }
    const idDataHoje = document.querySelector('#idDataHoje')
    if (idDataHoje != null) {
        idDataHoje.value = `${diaDHoje}/${mesDHoje}/${idAnoExercicioano}`
    }

}







if (localStorage.getItem('servidores') == null) {
    localStorage.setItem('servidores', JSON.stringify([]))
} else {
    var servidoresMunicipais = JSON.parse(localStorage.getItem('servidores'))
}

if (localStorage.getItem('eventos') == null || localStorage.getItem('eventos') == '') {
    localStorage.setItem('eventos', JSON.stringify([]))
} else {
    var eventosECursos = JSON.parse(localStorage.getItem('eventos'))
}





function verCadastro() {
    const verificaCadastro = document.querySelector('#verificaCadastro').value;
    const mostraDados = document.querySelector('#mostraDados')
    const dadosServidor = JSON.parse(localStorage.getItem('servidores'))
    const btnContinuar = document.querySelector('#btnContinuar')
    const codServidor = document.querySelector('#codServidor')
    var btnenviarDados = document.querySelector('#btnenviarDados')
    const servidoCadastrado = document.querySelector('#servidoCadastrado')


    dadosServidor.map((dadosServidorMunicipal) => {

        if (verificaCadastro == dadosServidorMunicipal.cpf) {
            btnContinuar.remove()
            servidoCadastrado.classList.add('dnone')

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
            botaoEnvia.setAttribute('onclick', `excluirServidor(${coddoServidor})`)
            botaoEnvia.textContent = 'Excluir'

            btnenviarDados.appendChild(botaoEnvia)



        } else {
            servidoCadastrado.classList.remove('dnone')

        }

    })
    console.log(dadosServidor)
}

function adiconarMatricula() {

    idMatricula.value = 2351
    const fundoMatricula = document.querySelector('#fundoMatricula')
    fundoMatricula.classList.toggle('dnone')
}


// if (has != '') {
//     document.querySelector('#verificaCadastro').value = has.replace(/#/g, '')
// }


function cadastroSer() {
    const cadastroMaisFuncionarios = JSON.parse(localStorage.getItem('servidores'))
    const verificaCadastro = document.querySelector('#verificaCadastro').value

    if (verificaCadastro.length > 0) {

        var idTipodeServidorOne = document.querySelector('#idTipodeServidor')
        const idTipodeServidor = idTipodeServidorOne.options[idTipodeServidorOne.selectedIndex].textContent;
        var idTipodeContaOne = document.querySelector('#idTipodeConta')
        const idTipodeConta = idTipodeContaOne.options[idTipodeContaOne.selectedIndex].value;
        var idBancoOne = document.querySelector('#idTipodeConta')
        const idBanco = idBancoOne.options[idBancoOne.selectedIndex].textContent;
        if (idBanco == 'outro') {
            var bancoD = outroBanco.value
        } else {
            var bancoD = idBanco
        }
        if (idTipodeConta == '') {
            idTipodeContaOne.classList.add('marcaInput')
        } else {
            idTipodeContaOne.classList.remove('marcaInput')
        }
        const idNome = document.querySelector('#idNome').value
        const idEndereco = document.querySelector('#idEndereco').value
        const idNumero = document.querySelector('#idNumero').value
        const idBairro = document.querySelector('#idBairro').value
        const idMatricula = document.querySelector('#idMatricula').value
        const idCargo = document.querySelector('#idCargo').value
        const idAgencia = document.querySelector('#idAgencia').value
        const idConta = document.querySelector('#idConta').value
        const idDepartamento = document.querySelector('#idDepartamento').value

        const funcionarioSS = {
            "id": JSON.parse(localStorage.getItem('servidores')).length + 1,
            "nome": idNome,
            "cpf": verificaCadastro,
            "matricula": idMatricula,
            "tipodeCargo": idTipodeServidor,
            "banco": bancoD,
            "tipoConta": idTipodeConta,
            "agencia": idAgencia,
            "conta": idConta,
            "departamento": idDepartamento,
            "cargo": idCargo,
            "endereco": idEndereco,
            "numero": idNumero,
            "bairro": idBairro
        }
        console.log(funcionarioSS)
        console.log(cadastroMaisFuncionarios)

        cadastroMaisFuncionarios.push(funcionarioSS)
        localStorage.setItem('servidores', JSON.stringify(cadastroMaisFuncionarios))
        alert(`Cadastro Efetuado ${JSON.parse(localStorage.getItem('servidores')).length}`)

    } else {

        alert('Informe um CPF')

    }

}



function editarCadastro() {
    const verificaCadastro = document.querySelector('#verificaCadastro').value;
    const mostraDados = document.querySelector('#mostraDados')
    const dadosServidor = JSON.parse(localStorage.getItem('servidores'))
    const btnContinuar = document.querySelector('#btnContinuar')
    const codServidor = document.querySelector('#codServidor')
    var btnenviarDados = document.querySelector('#btnenviarDados')
    const servidoCadastrado = document.querySelector('#servidoCadastrado')

    dadosServidor.map((dadosServidorMunicipal) => {

        if (verificaCadastro == dadosServidorMunicipal.cpf) {
            btnContinuar.remove()
            servidoCadastrado.classList.add('dnone')
            const coddoServidor = dadosServidorMunicipal.id
            mostraDados.classList.remove('dnone')
            codServidor.value = coddoServidor
            idNome.value = dadosServidorMunicipal.nome
            idNumero.value = dadosServidorMunicipal.nome
            idEndereco.value = dadosServidorMunicipal.endereco
            idNumero.value = dadosServidorMunicipal.numero
            idBairro.value = dadosServidorMunicipal.bairro
            idMatricula.value = dadosServidorMunicipal.matricula
            idCargo.value = dadosServidorMunicipal.cargo;
            idBanco.value = dadosServidorMunicipal.banco
            idAgencia.value = dadosServidorMunicipal.agencia
            idConta.value = dadosServidorMunicipal.conta
            btnenviarDados.innerHTML = ''
            const botaoEnvia = document.createElement('button')
            botaoEnvia.setAttribute('id', 'cadastrarOuAtualizar')
            botaoEnvia.setAttribute('onclick', `atualizaSer(${coddoServidor})`)
            botaoEnvia.textContent = 'Editar'
            btnenviarDados.appendChild(botaoEnvia)
        } else {
            servidoCadastrado.classList.remove('dnone')
        }
    })
}

function atualizaSer(num) {

    const response = JSON.parse(localStorage.getItem('servidores'))
    const verificaCadastro = document.querySelector('#verificaCadastro').value

    const codServidor = document.querySelector('#codServidor').value
    const idNome = document.querySelector('#idNome').value
    const idNumero = document.querySelector('#idNumero').value
    const idBairro = document.querySelector('#idBairro').value
    const idMatricula = document.querySelector('#idMatricula').value
    const idCargo = document.querySelector('#idCargo').value
    const idBanco = document.querySelector('#idBanco').value
    const idAgencia = document.querySelector('#idAgencia').value
    const idConta = document.querySelector('#idConta').value
    const idEndereco = document.querySelector('#idEndereco').value
    const idSetor = document.querySelector('#idSetor').value

    const objetoParaExcluir = verificaCadastro;

    // Encontre o objeto que você deseja editar com base em alguma condição, por exemplo, o id
    const objetoParaEditar = response.find(objeto => objeto.cpf === verificaCadastro);

    if (objetoParaEditar) {

        objetoParaEditar.nome = idNome;
        objetoParaEditar.endereco = idEndereco;
        objetoParaEditar.numero = idNumero;
        objetoParaEditar.bairro = idBairro;
        objetoParaEditar.matricula = idMatricula;
        objetoParaEditar.cargo = idCargo;
        objetoParaEditar.banco = idBanco;
        objetoParaEditar.agencia = idAgencia;
        objetoParaEditar.conta = idConta;
        objetoParaEditar.setor = idSetor;

        console.log(response); // O objeto dentro do array foi editado
        localStorage.setItem('servidores', JSON.stringify(response))
    } else {
        console.log('Objeto não encontrado');
    }
    notificado()
    setTimeout('apagaReload()', 2000)

}

function atualizaSerd(num) {
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

    const atualizarServidor = JSON.parse(localStorage.getItem('servidores'))[num - 1];


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

    //localStorage.setItem('servidores', JSON.stringify(atualizarServidor))
}

function excluirServidor(num) {
    notificado()
    const response = JSON.parse(localStorage.getItem('servidores'))
    const verificaCadastro = document.querySelector('#verificaCadastro').value



    const objetoParaExcluir = verificaCadastro;

    // Encontre o índice do objeto no array
    const index = response.findIndex(objeto => objeto.cpf === objetoParaExcluir);

    // Verifique se o objeto foi encontrado
    if (index !== -1) {
        // Remova o objeto usando splice()
        response.splice(index, 1);

    }

    localStorage.setItem('servidores', JSON.stringify(response))

    console.log(response);
    location.reload();

}

function notificado() {
    const notificado = document.querySelector('#notificado')
    const divN = document.createElement('div')
    divN.classList.add('excluido')
    const notificadoT = document.createElement('h2')
    notificadoT.textContent = "REALIZADO COM SUCESSO"

    divN.appendChild(notificadoT)

    notificado.appendChild(divN)

}

function apagaReload() {
    const notificado = document.querySelector('#notificado')
    notificado.innerHTML = ''
    location.reload();
}

function verificaCadas() {
    const response = JSON.parse(localStorage.getItem('servidores'))
    const verificaCadastro = document.querySelector('#verificaCadastro').value
    const fundoMatricula = document.querySelector('#fundoMatricula')

    response.map((e) => {
        if (e.cpf == verificaCadastro) {
            colocarCPF.value = e.cpf
            fundoMatricula.classList.remove('dnone')
            infoJ.innerHTML = ` 
            <a href="./editar.html#${e.cpf}"><button>Editar</button></a>
            <a href="./excluir.html#${e.cpf}"><button>Excluir</button></a>
            <a href="./emitir.html#${e.cpf}"><button>Solicitar Diária</button></a>`
        }
    })

}

if (document.querySelector('.adicionarData') != null) {

    const adicionarData = document.querySelector('.adicionarData')
    var contadorD = 0
    adicionarData.addEventListener('click', () => {
        const diasEventos = document.querySelector('#diasEventos').value
        const mostraDatas = document.querySelector('#mostraDatas')
        if (diasEventos == '') {
            favorPreencha.innerHTML = `<p>POR FAVOR PREENCHA UMA DATA</p>`
            setTimeout('apagaD()', 3000)
        } else {

            contadorD = contadorD + 1

            const diaDoEvento = diasEventos.split('-').reverse().join('/');

            mostraDatas.innerHTML += `<p onclick="apagaDate(${contadorD})" id="clo${contadorD}">${diaDoEvento}</p>`
        }

    })
}

function apagaDate(numb) {
    const close = document.querySelector(`#clo${numb}`)

    close.remove()

    //apagaDate(del3)
}
function apagaD() {

    favorPreencha.innerHTML = ''
}

function stopDefAction(evt) {
    evt.preventDefault();
}

/*Cadastro de Evento*/

const cadastrarEvento = document.querySelector('#cadastrarEvento')

if (cadastrarEvento == null) {

} else {

    cadastrarEvento.addEventListener('click', () => {
        const datadosEventos = []
        const data = JSON.parse(localStorage.getItem('eventos'))
        const tipodeEventoOne = document.querySelector('#tipodeEvento')
        const datasEventoDiv = document.querySelectorAll('#mostraDatas p')

        if (datasEventoDiv.length > 0) {
            for (let i = 0; i < datasEventoDiv.length; i++) {
                const dataE = datasEventoDiv[i].innerHTML;

                datadosEventos.push(dataE)

                if (data.length == '') {
                    codigoEvento.value = data.length + 1;
                } else {
                    codigoEvento.value = data.length;
                }
            }

            const idAnoExercicioOn = document.querySelector('#idAnoExercicio').value
            const tituloEvento = document.querySelector('#tituloEvento').value
            const codigoEventoOn = document.querySelector('#codigoEvento').value
            const tipodeEvento = tipodeEventoOne.options[tipodeEventoOne.selectedIndex].value;

            const cidadEventoOn = document.querySelector('#cidadEvento')
            const cidadeEvento = cidadEventoOn.options[cidadEventoOn.selectedIndex].value

            const estadoEventoOn = document.querySelector('#cidadEvento')
            const estadoEvento = estadoEventoOn.options[estadoEventoOn.selectedIndex].value

            const distanciaAte = document.querySelector('#distanciaAte').value
            const tempoV = document.querySelector('#tempoV').value


            const codEv = `${tituloEvento.toUpperCase()}${codigoEvento.value}`

            const descExcluir = `<h3>O evento será realizado nas datas <span>${datadosEventos},</span> acontecerá na cidade de <span>${cidadeEvento}</span>. O nome do <span>${tipodeEvento}</span> será <span>${tituloEvento}</span> que tem como objetivo <span>${objetivoViagem.value}</span>. A distancia de Lagoa dos Patos até <span>${cidadeEvento}</span> é de <span>${distanciaAte}</span>, com duração de viagem estimada em <span>${tempoV}</span></h3>`

            const eventoC = {
                "key": codigoEventoOn,
                "codEvento": codigoEventoOn,
                "exercicio": idAnoExercicioOn,
                "titulo": tituloEvento,
                "tipo": tipodeEvento,
                "estado": estadoEvento,
                "cidade": cidadeEvento,
                "datasEv": datadosEventos,
                "distanciaCidade": distanciaAte,
                "tempoViagem": tempoV,
                "objetivo": objetivoViagem.value,
                "habitantes": '',
                "codEventoN": codEv,
                "descexcluir": descExcluir
            }

            console.log(eventoC)
            eventosECursos.push(eventoC)

            localStorage.setItem('eventos', JSON.stringify(eventosECursos))


        } else {
            favorPreencha.innerHTML = `<p>POR FAVOR ADICIONE A DATA</p>`
            setTimeout('apagaD()', 3000)
        }
    })
}


function search_Servidor() {
    let input = document.getElementById('ServidorDiaria').value
    ServidorDiaria.value = input.toUpperCase()
    const doServidorB = document.querySelector('#doServidorB')
    input = input.toLowerCase();
    let x = document.getElementsByClassName('servidorM');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
            doServidorB.style.display = 'block'
        }
        else {
            x[i].style.display = "list-item";
            doServidorB.style.display = 'block'
        }
    }
}

// search_Servidor()
function search_Matricula() {
    let input = document.getElementById('pesquisarMatricu').value
    const doServidorB = document.querySelector('#mostraMatricula')
    input = input.toLowerCase();
    let x = document.getElementsByClassName('matriculadoServidor');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
            doServidorB.style.display = 'block'
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}
async function inseriDadosdoServidor(numb) {
    const response = await fetch('./arrays/servidores')
    const data = await response.json()

    const secDepartamento = data[numb].cargo

    if (secDepartamento.includes('-')) {
        if (secDepartamento.split('-').length > 2) {
            idCargo.value = secDepartamento.split('-')[1]
            idDepartamento.value = secDepartamento.split('-')[2]
        } else {
            idCargo.value = secDepartamento.split('-')[0]
            idDepartamento.value = secDepartamento.split('-')[1]
        }

    }

    console.log(secDepartamento.split('-').length)


    idMatricula.value = data[numb].matricula
    idNome.value = data[numb].nome
    idEndereco.value = data[numb].endereco
    idNumero.value = data[numb].numero
    idBairro.value = data[numb].bairro
    idCargo.value = data[numb].cargo

    mostraAbaDel()
}


async function geraFuncionario() {
    const response = await fetch('./arrays/servidores')
    const data = await response.json()
    const mostraMatricula = document.querySelector('#mostraMatricula')
    mostraMatricula.innerHTML = ''
    data.map((func, index) => {
        const linhaDoc = document.createElement('li')
        linhaDoc.setAttribute('onclick', `inseriDadosdoServidor(${index})`);
        linhaDoc.classList.add('matriculadoServidor')
        linhaDoc.textContent = `${func.nome} - ${func.matricula}`
        mostraMatricula.appendChild(linhaDoc)

    })

}

function search_Evento() {
    let input = document.getElementById('tituloEvento').value
    const doServidorB = document.querySelector('#doEventoB')
    input = input.toLowerCase();
    let x = document.getElementsByClassName('eventoM');

    console.log(input)

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
            doServidorB.style.display = 'block'
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}


function inserirSer(num) {
    const ServidorDiaria = document.querySelector('#ServidorDiaria')
    const doServidorB = document.querySelector('#doServidorB')
    const nome = document.querySelector(`#nome${num}`).textContent
    ServidorDiaria.value = nome.split('-')[0];
    doServidorB.style.display = 'none'
}
function inserirEve(num) {
    const ServidorDiaria = document.querySelector('#tituloEvento')
    const doServidorB = document.querySelector('#doEventoB')
    const nome = document.querySelector(`#nevento${num}`).textContent
    ServidorDiaria.value = nome;
    doServidorB.style.display = 'none'
}


function cadastroDiariaF() {
    const dataServidor = JSON.parse(localStorage.getItem('servidores'))
    const dataEventos = JSON.parse(localStorage.getItem('eventos'))

    dataServidor.map((servidor, index) => {
        const lidoServidor = document.querySelector('li');
        lidoServidor.setAttribute('onclick', `inserirSer(${index})`)
        lidoServidor.classList.add('servidorM')
        lidoServidor.textContent = `${servidor.cpf} - ${servidor.nome} - ${servidor.matricula}`
        doSerB.appendChild(lidoServidor)

    })

    // dataEventos.map((eventos, index) => {
    //     listEvent.innerHTML += `<li id="nevento${index}" onclick="inserirEve(${index})" class="eventoM">${eventos.titulo}</li>`
    // })

}
//cadastroDiariaF()
function geraFuncionarioDiaria() {
    const dataServidor = JSON.parse(localStorage.getItem('servidores'))
    const dataEventos = JSON.parse(localStorage.getItem('eventos'))
    const selecionaSe = document.querySelector('#selecionaSe')
    const selecionaEv = document.querySelector('#selecionaEv')

    dataServidor.map((servidor, index) => {
        const optSelect = document.createElement('option')
        optSelect.innerHTML = `${servidor.nome}`
        selecionaSe.appendChild(optSelect)
    })
    dataEventos.map((events, index) => {
        const optSelect = document.createElement('option')
        optSelect.innerHTML = `${events.titulo} - ${events.cidade}`
        selecionaEv.appendChild(optSelect)

    })
}
if (document.querySelector('#selecionaSe') != null) {
    geraFuncionarioDiaria()
}



function geraEventoDiaria() {

}
function editarEventoOn() {
    const dataEventos = JSON.parse(localStorage.getItem('eventos'))

    dataEventos.map((eventos, index) => {
        if (eventos.titulo != undefined) {
            listEvent.innerHTML += `<li id="nevento${index}" onclick="geraEdicaoEvento(${index})" class="eventoM">${eventos.titulo.toUpperCase()} - ${eventos.tipo} - ${eventos.exercicio} <br> Cidade de ${eventos.cidade}</li>`
        }

    })

}

async function geraEstados() {
    loadEstadoE.textContent = 'Carregando...'
    const estadoEventoss = document.querySelector('#estadoEvento')
    const response = await fetch('./arrays/estados-brasil')
    const data = await response.json()
    data.map((estados) => {
        const option = document.createElement('option')
        option.textContent = estados.sigla
        estadoEventoss.appendChild(option)
        // estadoEventoss.innerHTML += ` <option  >${estados.sigla}</option>`
    })
    loadEstadoE.textContent = 'Estado do Evento'


}

if (document.querySelector('#estadoEvento') != null) {
    geraEstados()
}



function selecionaCidade() {
    cevento.textContent = 'Carregando...'
    const estadoEventoss = document.querySelector('#estadoEvento')
    const estadoEvento = estadoEventoss.options[estadoEventoss.selectedIndex].textContent
    const cidadEvento = document.querySelector('#cidadEvento')

    const data = JSON.parse(localStorage.getItem(`distancias-${estadoEvento.toLowerCase()}`))
    cidadEvento.innerHTML = `<option value="" >Selecione</option>`
    data.map((cidades) => {
        const option = document.createElement('option')
        option.textContent = cidades.destinho
        cidadEvento.appendChild(option)

    })
    cevento.textContent = 'Cidade do Evento:'
}

async function mostraInfoCidade() {
    const estadoEventoss = document.querySelector('#estadoEvento')
    const estadoEvento = estadoEventoss.options[estadoEventoss.selectedIndex].value
    const cidadEventoo = document.querySelector('#cidadEvento')
    const cidadEvento = cidadEventoo.options[cidadEventoo.selectedIndex].textContent
    const mostraida = document.querySelector('#mostraida')

    const response = await fetch(`./arrays/distancias-${estadoEvento.toLowerCase()}`)
    const data = await response.json();
    const response2 = await fetch(`./arrays/populacao-${estadoEvento.toLowerCase()}`)
    const data2 = await response2.json();

    data.map((cidades) => {
        if (cidadEvento == cidades.destinho) {
            distanciaAte.value = cidades.distanciaConducao
            tempoV.value = cidades.tempo
            mostraida.innerHTML = ` <span>A distância de Lagoa dos Patos MG até cidade de <strong>${cidades.destinho}</strong> é de <strong>${cidades.distanciaConducao}</strong> dirigindo, em linha reta é ${cidades.distanciaReta}, a viagem é em torno de <strong>${cidades.tempo}</strong> de viagem. <strong>Tenha uma boa viagem.</strong></span>`
            data2.map((cal) => {
                if (cidades.destinho == cal.destinho) {
                    const qtdHab = cal.populacao.replace(/ hab./gi, '')
                    populacaoV.value = qtdHab.replace(/ /gi, '.')
                    mostraida.innerHTML += `<div>
                        <p>Sendo a população da cidade ${cal.destinho} de <strong>${cal.populacao} </strong></p>
                    </div>`
                    console.log('arroz')
                } else {
                    populacaoV.value = 'Sem cadastro'
                }
            })
        }
    })
}
//mostraInfoCidade()

function geraEdicaoEvento(numb) {

    const data = JSON.parse(localStorage.getItem('eventos'))
    const editE = document.querySelector('#editE')
    const nome = data[numb].codEventoN
    tituloEvento.value = nome
    tituloEvento.disabled = true
    tituloEventoE.value = data[numb].titulo
    idAnoExercicio.value = data[numb].exercicio
    codigoEvento.value = data[numb].codEvento
    const doServidorB = document.querySelector('#doEventoB')
    doServidorB.style.display = 'none'
    const editEn = document.querySelector('#editEn')
    if (editEn != null) {
        mostraAvi.innerHTML = data[numb].descexcluir
        editEn.setAttribute('onclick', `excluirEvento(${numb})`)
    }
    for (let i = 0; i < data[numb].datasEv.length; i++) {
        mostraDatas.innerHTML += `<p onclick="apagaDate(${i})" id="clo${i}">${data[numb].datasEv[i]}</p>`
    }
    idPernoite.value = data[numb].objetivo
    console.log(data[numb])
    editE.setAttribute('onclick', `editaNovoEvento(${numb})`)
    console.log('clicou')

}



function editaNovoEvento(numb) {
    const datadosEventosE = []
    const data = JSON.parse(localStorage.getItem('eventos'))
    const tipodeEventoOne = document.querySelector('#tipodeEvento')
    const tipodeEvento = tipodeEventoOne.options[tipodeEventoOne.selectedIndex].value

    const datasEventoDiv = document.querySelectorAll('#mostraDatas p')

    const estadoEventoOn = document.querySelector('#estadoEvento')
    const estadoEvento = estadoEventoOn.options[estadoEventoOn.selectedIndex].value

    const cidadeEventoOn = document.querySelector('#cidadEvento')
    const cidadeEvento = cidadeEventoOn.options[cidadeEventoOn.selectedIndex].value

    const tituloEventoE = document.querySelector('#tituloEventoE').value

    for (let i = 0; i < datasEventoDiv.length; i++) {
        const dataE = datasEventoDiv[i].innerHTML;

        datadosEventosE.push(dataE)
    }

    const objetodeCadastro = codigoEvento.value
    const objetoParaEditar = data.find(objeto => objeto.key == objetodeCadastro);

    if (objetoParaEditar) {

        objetoParaEditar.exercicio = idAnoExercicio.value,
            objetoParaEditar.titulo = tituloEventoE,
            objetoParaEditar.tipo = tipodeEvento,
            objetoParaEditar.estado = estadoEvento,
            objetoParaEditar.cidade = cidadeEvento,
            objetoParaEditar.datasEv = datadosEventosE,
            objetoParaEditar.distanciaCidade = distanciaAte.value,
            objetoParaEditar.tempoViagem = tempoV.value,
            objetoParaEditar.objetivo = idPernoite.value,
            objetoParaEditar.habitantes = '',
            objetoParaEditar.codEventoN = tituloEventoE + objetoParaEditar.codEvento

    }

    else {
        console.log('Objeto não encontrado');
    }
    localStorage.setItem('eventos', JSON.stringify(data))
    //location.reload()
}



function excluirEvento(num) {
    //notificado()
    const data = JSON.parse(localStorage.getItem('eventos'))
    const verificaCadastro = document.querySelector('#codigoEvento').value
    const objetoParaExcluir = verificaCadastro;

    // Encontre o índice do objeto no array
    const index = data.findIndex(objeto => objeto.key === objetoParaExcluir);

    // Verifique se o objeto foi encontrado
    if (index !== -1) {
        // Remova o objeto usando splice()
        data.splice(index, 1);


    }

    localStorage.setItem('eventos', JSON.stringify(data))

    location.reload();

}

function atualizaEventoS(numb) {
    const data = JSON.parse(localStorage.getItem('eventos'))
    const verificaCadastro = document.querySelector('#verificaCadastro').value
    const codServidor = document.querySelector('#codServidor').value
    const idNome = document.querySelector('#idNome').value
    const idNumero = document.querySelector('#idNumero').value
    const idBairro = document.querySelector('#idBairro').value
    const idMatricula = document.querySelector('#idMatricula').value
    const idCargo = document.querySelector('#idCargo').value
    const idBanco = document.querySelector('#idBanco').value
    const idAgencia = document.querySelector('#idAgencia').value
    const idConta = document.querySelector('#idConta').value
    const idEndereco = document.querySelector('#idEndereco').value
    const idSetor = document.querySelector('#idSetor').value
    const objetoParaExcluir = verificaCadastro;

    // Encontre o objeto que você deseja editar com base em alguma condição, por exemplo, o id
    const objetoParaEditar = response.find(objeto => objeto.cpf === verificaCadastro);

    if (objetoParaEditar) {
        objetoParaEditar.nome = idNome;
        objetoParaEditar.endereco = idEndereco;
        objetoParaEditar.numero = idNumero;
        objetoParaEditar.bairro = idBairro;
        objetoParaEditar.matricula = idMatricula;
        objetoParaEditar.cargo = idCargo;
        objetoParaEditar.banco = idBanco;
        objetoParaEditar.agencia = idAgencia;
        objetoParaEditar.conta = idConta;
        objetoParaEditar.setor = idSetor;

        console.log(response); // O objeto dentro do array foi editado
        localStorage.setItem('servidores', JSON.stringify(response))
    } else {
        console.log('Objeto não encontrado');
    }
    notificado()
    setTimeout('apagaReload()', 2000)

}



function mostraAbaDel() {
    pesquisarMatricu.value = ''
    if (document.getElementById("codigoEvento") != null) {
        var tituloEvento = document.querySelector('#codigoEvento').value

        if (tituloEvento != null) {
            const abaDel = document.querySelector('#abaDel')

            if (tituloEvento.length > 0) {
                abaDel.classList.toggle('dnone')
            } else {
                alert('Pesquise um Evento')
            }
        }
    } else {
        abaDel.classList.toggle('dnone')
    }




}




