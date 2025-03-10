function imprimirITBI() {

            let diaHoje = calculaData()[0];
            let mesHoje = calculaData()[1];
            let anoHoje = calculaData()[2];
            let horaNow = calculaData()[3]
            let minuNow = calculaData()[4]

            const nProtocolo = document.getElementById('protoEcidade').value;
            const nfuncionario = document.getElementById('selectFun')
            const sfuncionario = nfuncionario.options[nfuncionario.selectedIndex].text;

            const ncondicaImovel = document.getElementById('condicaoImovelMark')
            const scondicaImovel = ncondicaImovel.options[ncondicaImovel.selectedIndex].text;


            const nSituacaoContribuinte = document.getElementById('situacaoTransmitente')
            const sSituacaoContribuinte = nSituacaoContribuinte.options[nSituacaoContribuinte.selectedIndex].text;
            




            //const condicaoI = `&#9745${aguas} &#9745${esgotos} &#9745${iluminacaos}`;

            const nNatureza = document.getElementById('selectNatureza')
            const sNatureza = nNatureza.options[nNatureza.selectedIndex].text;
            const vNatureza = nNatureza.options[nNatureza.selectedIndex].value;

            const nTipoImovel = document.getElementById('selectTipoImovel')
            const sTipodeImovel = nTipoImovel.options[nTipoImovel.selectedIndex].text;

            const nselectQualidadeImovel = document.getElementById('selectQualidadeImovel')
            const sselectQualidadeImovel = nselectQualidadeImovel.options[nselectQualidadeImovel.selectedIndex].text;
            

            const valorImovel = calculoITBI(document.getElementById('valorITBI'))[2]
            const valorITBIImovel = calculoITBI(document.getElementById('valorITBI'))[0]
            const valorTotalITBI = calculoITBI(document.getElementById('valorITBI'))[1]
            const txExp = calculoITBI(document.getElementById('valorITBI'))[3]

            const dataHoje = `${diaHoje} de ${mesHoje} de ${anoHoje}`;

            const adquirenteCompraR = document.getElementById('adquirenteITBI');
            const adquirenteCompra = String(adquirenteCompraR.value);

            const TransmitenteITR = document.getElementById('transmitenteITBI').value;

            const descImovel = document.getElementById('descricaoImovelITBI').value;

            if (vNatureza == "COMPRAEVENDA") {
                var itbiTributavel = `(2% sobre R$ ${valorImovel} = R$ ${valorITBIImovel}) + taxa de expediente: R$  ${txExp} = <strong>R$ ${valorTotalITBI}</strong>`
            } else if (vNatureza == "selecione"){
                var itbiTributavel = `Por favor Insira a natureza da Operação`
            }
            else {
                var itbiTributavel = `Não tributável acordo com o Artigo 156 da Constituição Federal.`      
            }
            


            imprimirComplete.innerHTML = `
        <div class="impriITBI">
            <div  class="outDoor">
            <div class="marca paddInterno">
                <div class="marca dInlineflex topoGuia centralizar ">
                    <div>
                        <img class="logobrasao" src="/src/imagens/brasao-lagoa-dos-patos-mg-tributos-modular.png" alt="">
                    </div>
                    <div>
                        <div class="infoTopo">
                            <h1>GUIA DE INFORMAÇÃO DE I.T.B.I</h1>
                            <H2>PREFEITURA DE LAGOA DOS PATOS MG</H2>
                            <p>CONTATO: (38) 3745-1239 | tributos@lagoadospatos.mg.gov.br</p>
                            <h3>PROTOCOLO: ${nProtocolo}/${anoHoje}</h3>
                            <p>SECRETARIA DA FAZENDA – DIVISÃO DE CADASTRO - CNPJ: 16.901.381/0001-00</p>
                        </div>
                    </div>
                </div>
                <div >
                    <fieldset class="adquirente">
                        <legend>ADQUIRENTE</legend>
                        <p>
                            ${adquirenteCompra}
                        </p>
                    </fieldset>
                    <fieldset class="transmitente">
                        <legend>TRASMITENTE</legend>
                        <P>
                            ${TransmitenteITR}
                        </P>
                    </fieldset>
            
                </div>
                <div class=" marca dInlineflex justificaItens">
                    <div>
                        <fieldset class="naturezaTransmissao">
                            <legend>NATUREZA DA TRANSMISSÃO</legend>
                            <p>${sNatureza}</p>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset class="tipodeImovel">
                            <legend>TIPO DE IMÓVEL</legend>
                            <p>${sTipodeImovel}</p>
            
            
                        </fieldset>
                    </div>
                    <div>
                        <fieldset class="qualidadeDoImovel">
                            <legend>QUALIDADE DO IMÓVEL:</legend>
                            <p>${sselectQualidadeImovel}</p>
                        </fieldset>
                    </div>
                </div>
                <div>
                    <fieldset class="descImovel">
                        <legend>DESCRIÇÃO DO IMÓVEL</legend>
                        <p>
                            ${descImovel}
                        </p>
                    </fieldset>
                </div>
                <div class=" marca dInlineflex justificaItens">
                    <div>
                        <fieldset>
                            <legend>VALOR DA TRANSAÇÃO</legend>
                            <p>Valor: <strong>R$ ${valorImovel}.</strong></p>
                        </fieldset>
                    </div>
                    <div>
                    <fieldset>
                        <legend>ÁREA</legend>
                        <p><strong>${areadoTerreno.value}</strong>.</p>
                    </fieldset>
                </div>
                    <div>
                        <fieldset>
                            <legend>LOCAL DE DATA</legend>
                            <p>LAGOA DOS PATOS - MG, <strong>${dataHoje}</strong>.</p>
                        </fieldset>
                    </div>
            
                </div>
                <div>
                    <fieldset>
                        <legend>PARA USO DA REPARTIÇÃO</legend>
                       <p>
                        VALOR DO IMÓVEL <strong>R$ ${valorImovel}</strong> <br>     <strong>TOTAL A TRIBUTAR: </strong>R$ ${valorTotalITBI} <br>
                        <strong>DATA: </strong>${dataHoje}. <br>
                        <strong>VALOR DO ITBI:</strong> ${itbiTributavel}
                       </p>
                       <p><STRONG>ATENÇÃO:</STRONG> Segue boleto para pagamento em anexo junto com este documento.</p>
            
                       <div class="bloc">
                        <div class="assinaturaAnalisador">
                            <p><strong>${sfuncionario}</strong></p>
                            <p >
                                Divisão de Receitas e Cadastramento Imobiliário Município
                                de Lagoa dos Patos/MG – CNPJ 16.901.381/0001-10
                            </p>
                        </div>
                    </div>
                    <p><strong>LAGOA DOS PATOS - MG ${dataHoje} </strong></p>
                    </fieldset>
                </div>
                <div class=" marca dInlineflex justificaItens">
                    <div>
                        <fieldset>
                            <legend>CONDIÇÕES DO IMÓVEL</legend>
                            <p><strong>${scondicaImovel}</strong></p>
                            <!-- <p>&#9745 Água  &#9745 Esgoto  &#9745 Iluminação  &#9745 Calçamento  &#9745 Asfalto</p> -->
                            <div>
                                <p>Avaliador:</p>
                                <div class="assinaturaAnalisador">
                                    <p>${sfuncionario}</p>
                                    <p >
                                        Divisão de Receitas e Cadastramento Imobiliário Município <br>
                                        de Lagoa dos Patos/MG – CNPJ 16.901.381/0001-10
                                    </p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div style="width: 60%;">
                        <fieldset>
                            <legend>SEÇÃO DE DIVIDA ATIVA</legend>
                            <p><strong>${sSituacaoContribuinte}</strong></p>
            
                            <!--<p>&#9745 Nada Consta <br> &#9745 Possui Divida Ativa</p>-->
                            <div class="">
                                   <div class="assinaturaAnalisador">
                                    <p>Avaliador:</p>
                                    <p>${sfuncionario}</p>
                                    <p >
                                        Divisão de Receitas e Cadastramento Imobiliário Município <br>
                                        de Lagoa dos Patos/MG – CNPJ 16.901.381/0001-10
                                    </p>
                                </div>
                                <div>
            
                                </div>
                            </div>
                        </fieldset>
                    </div>
            
                </div>
                <div class=" marca dInlineflex justificaItens">
                    <div >
                        <fieldset>
                            <legend style="text-align: center;">C E R T I D Ã O</legend>
                            <p>Certifico que o(s) contribuinte(s) que está (ão) relacionado(s) nesta guia está(ão) quites com a Fazenda
                                Municipal com
                                Referência ao imóvel objeto da presente transação.
                                LAGOA DOS PATOS-MG ${dataHoje} </p>
                            <div class="dInlineflex centralizar">
            
                                <div class="assinaturaAnalisador">
            
                                    <div>
                                        <p><I><strong>${sfuncionario}</strong></I></p>
                                        <p >
                                            Divisão de Receitas e Cadastramento Imobiliário Município <br>
                                            de Lagoa dos Patos/MG – CNPJ 16.901.381/0001-10
                                        </p>
                                    </div>
                                </div>
                                <div class="alinharUAssinatura">
                                    <p>Ass. Avaliador    _________________________________________.</p>
                                    <p>${dataHoje}</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
                </div>
        </div>`
    titleSave.innerHTML = `<title>${nProtocolo}_${vNatureza}_${dataHoje}</title>`
    
    window.print()
}








function calculoITBI(valorI) {
   
    const valorITBI = document.querySelector('input#valorITBI').value;
    const ufmAtual = document.querySelector('#valorUFM').value
    
    

    if (valorITBI.length == "0") {
        valorCalculado.innerHTML = `<strong>Insira um valor para calcular</strong>`
        // alert('Insira um valor para calcular');
    } else {
        
        var valorInserido = parseInt(valorI.value).toFixed(2);
        var taxaExpediente = ufmAtual * 2 ;
        var valorC = ((valorITBI * 2 )/ 100).toFixed(2);
        console.log(taxaExpediente)
        console.log(valorC)
        var valorTItbi = (parseFloat(valorC) + taxaExpediente); 
        //var valorTItbi = ((valorC - taxaExpediente)+14.84).toFixed(2);        
        var resultITBI = valorCalculado.innerHTML = `Valor: R$ ${valorC} + taxa de expediente: ${taxaExpediente} - <strong>Total: R$ ${valorTItbi}</strong>`
        // alert ('O valor do ITBI é de 2% sobre o valor da transação, a taxa de expediente atualmente é de R$ 7,86 que será somado ao valor total descrito abaixo.')
        
        
    }
    return [valorC, valorTItbi, valorInserido, taxaExpediente];
    
}

function calculaData(){
    let dataDoc = new Date();
    let horaDoc = dataDoc.getHours();
    let minDoc = dataDoc.getMinutes();
    let diaDoc = dataDoc.getDate();
    let mesDoc = dataDoc.getMonth();
    let anoDoc = dataDoc.getFullYear();

    if (mesDoc==0){
        var mesDDoc = "Janeiro"
    } else if (mesDoc == 1){
        var mesDDoc = "Fevereiro"
    }
    else if (mesDoc == 2){
        var mesDDoc = "Março"
    }
    else if (mesDoc == 3){
        var mesDDoc = "Abril"
    }
    else if (mesDoc == 4){
        var mesDDoc = "Maio"
    }
    else if (mesDoc == 5){
        var mesDDoc = "Junho"
    }else if (mesDoc == 6){
        var mesDDoc = "Julho"
    }else if (mesDoc == 7){
        var mesDDoc = "Agosto"
    }else if (mesDoc == 8){
        var mesDDoc = "Setembro"
    }else if (mesDoc == 9){
        var mesDDoc = "Outubro"
    }else if (mesDoc == 10){
        var mesDDoc = "Novembro"
    }else if(mesDoc == 11){
        var mesDDoc = "Dezembro"
    }
   return [diaDoc, mesDDoc, anoDoc, horaDoc, minDoc]
}

function contadordeLetras() {
    const contarAdq = document.getElementById('adquirenteITBI').value;



    if (contarAdq.length >= 1200) {
        // alert('Por favor, a quantidade de caracteres maxima é de 1052 caracteres, diminua o texto e tente novamente.')
        const qtdDigitado = contarAdq.length;
        mCaracDigitado.innerHTML = `Quantidade max: 1050 - Seu texto: ${qtdDigitado}`
    } else {
        const qtdDigitado = contarAdq.length;
        // alert('Seu texto possui '+qtdDigitado+' caracteres digitados');
        mCaracDigitado.innerHTML = `Quantidade max: 1050 - Seu texto: ${qtdDigitado}`   
     }

}
