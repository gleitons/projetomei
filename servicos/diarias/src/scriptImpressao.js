const has = window.location.hash 

console.log(has)

function imprimirSolicitacao() {    
    const data = JSON.parse(localStorage.getItem('eventoServidorImpressao'))

    if(data.codigo == has.replace(/#/g, '')){
        anoExercicio.textContent = 2024
        dataDiaAtual.textContent = data.dateOfEvent[0]
        nomeServidor.textContent = data.nome
        matricula.textContent = data.matricula
        cpf.textContent = data.cpf
        departamento.textContent = data.departamento
        cargo.textContent = data.cargo
        qtdDiarias.textContent = data.dateOfEvent.length
        nomeBanco.textContent = data.nomeBanco
        tipoDeConta.textContent = data.tipoConta == 'pp'? 'Poupança' : data.tipoConta == 'cc' ? 'Conta Corrente' : 'error'
        agencia.textContent = data.agencia
        conta.textContent = data.conta
        selecaoAntecipadas.innerHTML = data.tipodeDiariaAnote == 'antecipadas'? `<i class="bi bi-check-square"></i>  Antecipadas - <i class="bi bi-square"></i>  Vencidas - <i class="bi bi-square"></i>  Indenização`: data.tipodeDiariaAnote == 'vencidas'? `<i class="bi bi-square"></i>  Antecipadas - <i class="bi-check-square"></i>  Vencidas - <i class="bi bi-square"></i>  Indenização` : `<i class="bi bi-square"></i>  Antecipadas - <i class="bi bi-square"></i>  Vencidas - <i class="bi bi-check-square"></i>  Indenização`
        dataSaida.textContent = data.dateOfEvent[0]
        for(let i = 0; i < data.dateOfEvent.length; i ++) {
            var dataC = data.dateOfEvent[i]
        }
        dataChegada.textContent = dataC

        veiculoOf.innerHTML = data.veiculoOficial == 'Sim'? `Veiculo Oficial: <i class="bi bi-check-square"></i>  Sim  <i class="bi bi-square"></i>  Não` :`Veiculo Oficial: <i class="bi bi-square"></i>  Sim  <i class="bi bi-check-square"></i>  Não`

        viagemInterm.innerHTML = data.viagemIntermunicipal == 'Outro'? `Avião <i class="bi bi-square"></i>  Ônibus <i class="bi bi-square"></i>  Outro <i class="bi bi-check-square"></i> ` : data.viagemIntermunicipal == 'Aviao' ?`Avião <i class="bi bi-check-square"></i>  Ônibus <i class="bi bi-square"></i>  Outro <i class="bi bi-square"></i> ` : `Avião <i class="bi bi-check-square"></i>  Ônibus <i class="bi bi-check-square"></i>  Outro <i class="bi bi-check-square"></i>`

        const valorI = JSON.parse(localStorage.getItem('valorIndenizacao'))

        cidadedoEvento.textContent = data.cityOfEvent

        viagemVParticular.innerHTML = data.nome

        justificativaVProprio.innerHTML = data.justificaVeiculo

        distanciaidaEVolta.innerHTML = data.distanciaidaEVolta + ' Km'

        valorIndenizacao.textContent = valorI
        console.log(data.indenizado)

        valoraIndenizar.textContent = data.indenizado == 'sim' ? (valorI * data.distanciaidaEVolta).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) : ''

        placaVparticular.textContent = data.placa != '' ? data.placa : '______________'

        objetivo.textContent = data.objetivo

        qtdDiaria.textContent = data.dateOfEvent.length

        qtdPassagem.textContent = data.dateOfEvent.length
        
        valorDiaria.textContent = (data.valorDiaria).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

        kmIndenizacao.textContent = data.distanciaidaEVolta

        valorUniIndenizacao.textContent = (parseFloat(valorI)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

        indenizacaoSolicitada.textContent = (parseFloat(data.distanciaidaEVolta) * parseFloat(valorI)).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})

        valorAprovadoIndenizacao.textContent = (parseFloat(data.distanciaidaEVolta) * parseFloat(valorI)).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})


        totalAprovado.textContent = ((parseFloat(data.distanciaidaEVolta) * parseFloat(valorI)) +( parseFloat(data.valorDiaria) * data.dateOfEvent.length)).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

        nomeSec.textContent = JSON.parse(localStorage.getItem('nomesecretario'))
        nomePref.textContent = JSON.parse(localStorage.getItem('nomeprefeito'))
        
    }

}

imprimirSolicitacao()