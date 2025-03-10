function selectTipo() {
    const tipoCont = document.querySelector('#termoOuContrato')
    const tipoContrato = tipoCont.options[tipoCont.selectedIndex].value;
    const NovoPegaDados = document.querySelector('#NovoPegaDados')



    if (tipoContrato == "compraVenda") {
        return selectNovoDados()
    } else if (tipoContrato == "termoDoacao") {
        return selectNovoDados()
    } else {
        NovoPegaDados.innerHTML = ""
    }

}

function selectNovoDados() {
    const NovoPegaDados = document.querySelector('#NovoPegaDados')
    NovoPegaDados.innerHTML = ` 
    <select name="" id="tipoCont" onchange="inserirDadosI()" >
    <option value="">SELECIONE</option>
    <option value="novoContrato">NOVO</option>
    <option value="pegarDadosSistema">PEGAR DADOS DO SISTEMA</option>
    </select>`
}

function inserirDadosI() {
    const NovoPegaDados = document.querySelector('#InsiraDados')
    const tipoCont = document.querySelector('#tipoCont')
    const tipoContrato = tipoCont.options[tipoCont.selectedIndex].value;
    console.log(tipoContrato)

    if (tipoContrato == "pegarDadosSistema") {
        NovoPegaDados.innerHTML = ` 
    <legend>INSIRA OS DADOS</legend>
    <div class="preecherD">
        <div class="alinhaSpan">Matricula:</div> <input type="number" name="" id="idMatricula" placeholder="matricula" value="116">
    </div> 
    <div class="preecherD">
        <div class="alinhaSpan">CPF Proprietário:</div> <input type="text" name="" id="idCPF" placeholder="ex: 08303020699" value="02593223693"> 
    </div> 
    <button onclick="gerarDados()">Buscar</button> <br>`
        preencherDados.innerHTML = ''

    } else {
        preenchimentoLimpo()
    }


}





var contratos = []

function gerarDados() {
    //var url = "http://177.152.105.125:8070/e-cidadeonline/digitamatricula.php"
    //var url = 'https://casadosdados.com.br/empresas/localidade/mg/pirapora'
    //http://177.152.105.125:8070/e-cidadeonline/listabicimovel.php?matricula=819&id_usuario=&cgccpf=08303020692=
    var ver = document.querySelector('#ver');
    const matricula = document.querySelector('#idMatricula').value
    var cpf = document.querySelector('#idCPF').value
    //var cpf = '08303020692'
    var preencherDados = document.querySelector('#preencherDados')

    var url = `http://177.152.105.125:8070/e-cidadeonline/listabicimovel.php?matricula=${matricula}&id_usuario=&cgccpf=${cpf}=`
    //var url = `http://177.152.105.125:8070/e-cidadeonline/listabicimovel.php?matricula=819&id_usuario=&cgccpf==`

    fetch(url)
        .then((resp) => resp.text())
        .then(function (data) {
            ver.innerHTML = data
            InsiraDados.innerHTML = ''

            var propri = ver.getElementsByTagName('tbody')[4]
            var propriedade = propri.getElementsByTagName('tr')[1]


            var proprietario = propriedade.getElementsByTagName('td')[1].innerText

            var propriedadeEnd = propri.getElementsByTagName('tr')[4]
            var ende = propriedadeEnd.getElementsByTagName('td')[1].innerText
            var end = ende.replace(/[^A-Z ]/g, '')
            var numeroCasa = ende.replace(/[^0-9]/g, '').slice(2)

            console.log(numeroCasa)

            var setor = propriedade.getElementsByTagName('td')[3].innerText

            var quadrainfo = propri.getElementsByTagName('tr')[2]
            var quadra = quadrainfo.getElementsByTagName('td')[3].innerText

            var loteinfo = propri.getElementsByTagName('tr')[3]
            var lote = loteinfo.getElementsByTagName('td')[3].innerHTML
            var loteNumber = lote.replace('&nbsp;', '')

            var areaInfo = propri.getElementsByTagName('tr')[5]
            var areaI = areaInfo.getElementsByTagName('td')[1].innerHTML
            var areaTotImovel = areaI.replace('&nbsp;', '')


            var medidas = ver.getElementsByTagName('tbody')[7]


            var quadroOne = medidas.getElementsByTagName('tr')[0]
            var endeOne = quadroOne.getElementsByTagName('td')[1].innerHTML.split('-')[1].replace(' ', '').replace(/�/g, 'Ã')
            var metragemOne = quadroOne.getElementsByTagName('td')[5].innerText

            var quadroTwo = medidas.getElementsByTagName('tr')[1]
            console.log(quadroTwo)
            if (quadroTwo != undefined) {
                var endeTwo = quadroTwo.getElementsByTagName('td')[1].innerHTML.split('-')[1].replace(' ', '').replace(/�/g, 'Ã')
                var metragemTwo = quadroTwo.getElementsByTagName('td')[5].innerText
            } else {
                var endeTwo = ''
            }



            var quadroTree = medidas.getElementsByTagName('tr')[2]

            if (quadroTree != undefined) {
                var endeTree = quadroTree.getElementsByTagName('td')[1].innerHTML.split('-')[1].replace(' ', '').replace(/�/g, 'Ã')
                var metragemTree = quadroTree.getElementsByTagName('td')[5].innerText
            } else {
                var endeTree = ''
            }
            var quadroFour = medidas.getElementsByTagName('tr')[3]

            if (quadroFour != undefined) {

                var endeFour = quadroFour.getElementsByTagName('td')[1].innerHTML.split('-')[1].replace(' ', '').replace(/�/g, 'Ã')
                var metragemFour = quadroFour.getElementsByTagName('td')[5].innerText
            } else {
                var endeFour = ''
            }

            var cpfC = cpf.split('')
            if (cpfC[0] != undefined) {
                var cpfCompleto = `${cpfC[0]}${cpfC[1]}${cpfC[2]}.${cpfC[3]}${cpfC[4]}${cpfC[5]}.${cpfC[6]}${cpfC[7]}${cpfC[8]}-${cpfC[9]}${cpfC[10]}`
                //const nMatricula = matricula.innerText.split(' ')[0]
            } else {
                var cpfCompleto = ''
            }
            preencherDados.innerHTML = ` <fieldset>
            <legend>IMÓVEL</legend>
            <fieldset class="ProprietarioClass">
                <legend>Endereço</legend>
                <div class="preecherD">
                <div class="alinhaSpan">Matricula:</div> <input type="number" placeholder="ex: 0004 " id="matriculaImovel" value=${matricula}> 
            </div> 
                <div class="preecherD">
                    <div class="alinhaSpan">Setor:</div> <input type="number" placeholder="ex: 0004 " id="setorImovel" value=${setor}> 
                </div> 
                <div class="preecherD">
                    <div class="alinhaSpan">Quadra:</div> <input type="number" placeholder="ex: 0010 " id="quadraImovel" value=${quadra}> 
                </div> 
                <div class="preecherD">
                    <div class="alinhaSpan">Lote:</div> <input type="number" placeholder="ex: 0005" id="loteImovel" value=${loteNumber}> 
                </div> 
                <div class="preecherD">
                    <div class="alinhaSpan">Lote:</div> <input type="number" placeholder="ex: 250" id="areaTotalImovel" value=${areaTotImovel}> M²
                </div> 
                <fieldset>
                    <legend>Medidas</legend>
                    <div class="preecherD"> 
                        <select name="proP" id="orientacaoOne">
                            <option value="">Selecione</option>
                            <option value="frente">Frente</option>
                            <option value="fundo">Fundo</option>
                            <option value="direito">Direito</option>
                            <option value="esquerdo">Esquerdo</option>
                        </select>  
                        <div class="alinhaSpan"></div> <input type="text" placeholder="Rua Um" maxlength="500" id="ruaOne" value="${endeOne}">
                        <div class="alinhaSpan"></div> <input type="number" placeholder="metros" maxlength="500" id="metragemOne" value="${metragemOne}"> metros
                    </div> 

                    <div class="preecherD"> 
                        <select name="proP" id="orientacaoTwo">
                            <option value="">Selecione</option>
                            <option value="frente">Frente</option>
                            <option value="fundo">Fundo</option>
                            <option value="direito">Direito</option>
                            <option value="esquerdo">Esquerdo</option>
                        </select>  
                        <div class="alinhaSpan"></div> <input type="text" placeholder="Orientação Dois" id="ruaTwo" maxlength="500" value="${endeTwo}">
                        <div class="alinhaSpan"></div> <input type="number" placeholder="metros" maxlength="500" id="metrosTwo" value="${metragemTwo}"> metros
                    </div> 

                    <div class="preecherD"> 
                        <select name="proP" id="orientacaoTree">
                            <option value="">Selecione</option>
                            <option value="frente">Frente</option>
                            <option value="fundo">Fundo</option>
                            <option value="direito">Direito</option>
                            <option value="esquerdo">Esquerdo</option>
                        </select>  
                        <div class="alinhaSpan"></div> <input type="text" placeholder="Rua Três" maxlength="500" id="ruaTree" value="${endeTree}">
                        <div class="alinhaSpan"></div> <input type="number" placeholder="metros" maxlength="500" id="metrosTree" value="${metragemTree}"> metros
                    </div> 

                    <div class="preecherD"> 
                        <select name="proP" id="orientacaoFour">
                            <option value="">Selecione</option>
                            <option value="frente">Frente</option>
                            <option value="fundo">Fundo</option>
                            <option value="direito">Direito</option>
                            <option value="esquerdo">Esquerdo</option>
                        </select>  
                        <div class="alinhaSpan"></div> <input type="text" placeholder="Rua Quatro" maxlength="500" id="ruaFour" value="${endeFour}">
                        <div class="alinhaSpan"></div> <input type="number" placeholder="metros" maxlength="500" id="metrosFour" value="${metragemFour}"> metros
                    </div> 

                    
                </fieldset>

                <div class="preecherD">
                <div class="alinhaSpan">Endereço:</div> <input type="text" id="enderecoImovel" placeholder="Endereço" value="${end}">
                </div> 
                
                
                <div class="preecherD">
                    <div class="alinhaSpan">Numero:</div> <input type="number" placeholder="Endereço: ex: 22" value="${numeroCasa}" id="numeroImovel"> 
                </div> 
                <div class="preecherD">
                    <div class="alinhaSpan">Bairro:</div> <input type="text" id="bairroImovel" placeholder="Endereço: ex: Centro "> 
                </div> 
                <div class="preecherD">
                    <div class="alinhaSpan">Cidade:</div> <input type="text" id="cidadeImovel" placeholder="Endereço: ex: Lagoa dos Patos " value="Lagoa dos Patos"> 
                </div> 
                <div class="preecherD">
                    <div class="alinhaSpan">Estado:</div> <input type="text" id="estadoImovel" placeholder="ex: MG "  value="MG"> 
                </div> 
               
            </fieldset>


            <fieldset class="ProprietarioClass">
                <legend>Valor da Transação</legend>
                <div class="preecherD">
                    <div class="alinhaSpan">R$:</div> <input type="number" placeholder="ex: 10000 "  id="valorTransacao"> 
                </div> 
               
            </fieldset>
            <fieldset class="ProprietarioClass">
                <legend>Forma de Pagamento</legend>
                <div class="preecherD">
                    <select name="proP" id="metodoPagamento">
                        <option value="">Selecione</option>
                        <option value="avista">A vista</option>
                        <option value="aprazo">A prazo </option>
                        <option value="parcelado">Parcelado</option>
                    </select> 
                </div> 
                <div class="preecherD">
                    <div class="alinhaSpan">Observações:</div> <input type="text" placeholder="Adicione Qualquer tipo de informação "  id="oservacoes"> 
                </div> 
            </fieldset>
        </fieldset>
        
        <fieldset>
        <legend>PROPRIETÁRIO</legend>
        <fieldset class="ProprietarioClass">
            <legend>Vendedor</legend>
        <div class="preecherD">
            <div class="alinhaSpan">Proprietário:</div> <input type="text" placeholder="Nome Vendedor" id="nomeVendedor" value="${proprietario}">
        </div> 
        <div class="preecherD">
            <div class="alinhaSpan">Sexo:</div> <select name="proP" id="sexoVendedor">
                <option value="">Selecione</option>
                <option value="m">MASCULINO</option>
                <option value="f">FEMININO </option>            
            </select> 
        </div> 

        <div class="preecherD">
            <div class="alinhaSpan">CPF:</div> <input type="text" placeholder="CPF Vendedor" id="cpfVendedor" value="${cpfCompleto}">
        </div> 

        <div class="preecherD">
            <div class="alinhaSpan">Identidade:</div> <input type="text" placeholder="Identidade Vendedor" id="identidadeVendedor"> 
        </div> 

        <div class="preecherD">
            <div class="alinhaSpan">Estado Civil:</div> 
            <select name="proP" id="estadoCivilVendedor">
                <option value="">Selecione</option>
                <option value="s">Solteiro</option>
                <option value="c">Casado </option>
                <option value="a">Amaziado</option>
                <option value="ue">União estável</option>            
            </select> 
        </div> 
        
        <div class="preecherD">
            <div class="alinhaSpan">Profissão:</div> <input type="text" placeholder="profissão" id="profissaoVendedor"> 
        </div> 
        <div class="preecherD">
            <div class="alinhaSpan">Endereço:</div> <input type="text" placeholder="Endereço: ex rua " id="ruaVendedor"> 
        </div> 
        <div class="preecherD">
            <div class="alinhaSpan">Numero:</div>  <input type="number" placeholder="ex: 22" id="numeroVendedor"> 
        </div> 
        <div class="preecherD">
            <div class="alinhaSpan">Bairro:</div>   <input type="text" placeholder="Bairro: " id="bairroVendedor">
        </div> 

        <div class="preecherD">
            <div class="alinhaSpan">Cidade:</div>    <input type="text" placeholder="Cidade:  " id="cidadeVendedor">
        </div> 

        <div id="outrosProp">          
            <button onclick="adicionarPro()">Adicionar + Proprietário</button>
        </div>
        </fieldset>
        <fieldset class="ProprietarioClass">
        <legend>Comprador</legend>
       
        <div class="preecherD">
            <div class="alinhaSpan">Proprietário:</div> <input type="text" placeholder="Nome do Comprador" id="nomeComprador" >
        </div> 
        <div class="preecherD">
            <div class="alinhaSpan">Sexo:</div> <select name="proP" id="sexoComprador">
                <option value="">Selecione</option>
                <option value="m">MASCULINO</option>
                <option value="f">FEMININO </option>            
            </select> 
        </div> 

        <div class="preecherD">
            <div class="alinhaSpan">CPF:</div> <input type="text" placeholder="CPF do Comprador" id="cpfComprador" >
        </div> 

        <div class="preecherD">
            <div class="alinhaSpan">Identidade:</div> <input type="text" placeholder="Identidade do Comprador" id="identidadeComprador"> 
        </div> 

        <div class="preecherD">
            <div class="alinhaSpan">Estado Civil:</div> 
            <select name="estadoCivilComprador" id="estadoCivilComprador">
                <option value="">Selecione</option>
                <option value="s">Solteiro</option>
                <option value="c">Casado </option>
                <option value="a">Amaziado</option>
                <option value="ue">União estável</option>            
            </select> 
        </div> 
        
        <div class="preecherD">
            <div class="alinhaSpan">Profissão:</div> <input type="text" placeholder="profissão" id="profissaoComprador"> 
        </div> 

        <div class="preecherD">
            <div class="alinhaSpan">Endereço:</div> <input type="text" placeholder="Endereço: ex rua " id="enderecoComprador"> 
        </div> 

        <div class="preecherD">
            <div class="alinhaSpan">Numero:</div>  <input type="number" placeholder="ex: 22" id="numeroComprador"> 
        </div> 

        <div class="preecherD">
            <div class="alinhaSpan">Bairro:</div>   <input type="text" placeholder="Bairro: " id="bairroComprador">
        </div> 

        <div class="preecherD">
            <div class="alinhaSpan">Cidade:</div>    <input type="text" placeholder="Cidade:  " id="cidadeComprador">
        </div> 
        <button onclick="adicionarCom()">Adicionar + Comprador</button>
       

        <div id="outrosComp">
        </div>
    </fieldset>
    <button onclick="inclusaoDados()">GERAR CONTRATO</button>`






        })
        .catch(function (error) {
            console.log(error)
        });
}


function preenchimentoLimpo() {
    preencherDados.innerHTML = ` <button onclick="inclusaoDados()">GERAR CONTRATO</button>
    <fieldset>
    <legend>IMÓVEL</legend>
    <fieldset class="ProprietarioClass">
        <legend>Endereço</legend>
        <div class="preecherD">
        <div class="alinhaSpan">Matricula:</div> <input type="number" placeholder="ex: 0004 " id="matriculaImovel" value=""> 
    </div> 
        <div class="preecherD">
            <div class="alinhaSpan">Setor:</div> <input type="number" placeholder="ex: 0004 " id="setorImovel" value=""> 
        </div> 
        <div class="preecherD">
            <div class="alinhaSpan">Quadra:</div> <input type="number" placeholder="ex: 0010 " id="quadraImovel" value=""> 
        </div> 
        <div class="preecherD">
            <div class="alinhaSpan">Lote:</div> <input type="number" placeholder="ex: 0005" id="loteImovel" value=""> 
        </div> 
        <div class="preecherD">
                    <div class="alinhaSpan">Lote:</div> <input type="number" placeholder="ex: 250" id="areaTotalImovel" value=""> M²
                </div> 
        <fieldset>
            <legend>Medidas</legend>
            <div class="preecherD"> 
                <select name="proP" id="orientacaoOne">
                    <option value="">Selecione</option>
                    <option value="frente">Frente</option>
                    <option value="fundo">Fundo</option>
                    <option value="direito">Direito</option>
                    <option value="esquerdo">Esquerdo</option>
                </select>  
                <div class="alinhaSpan"></div> <input type="text" placeholder="Rua Um" maxlength="500" id="ruaOne" value="">
                <div class="alinhaSpan"></div> <input type="number" placeholder="metros" maxlength="500" id="metragemOne" value=""> metros
            </div> 

            <div class="preecherD"> 
                <select name="proP" id="orientacaoTwo">
                    <option value="">Selecione</option>
                    <option value="frente">Frente</option>
                    <option value="fundo">Fundo</option>
                    <option value="direito">Direito</option>
                    <option value="esquerdo">Esquerdo</option>
                </select>  
                <div class="alinhaSpan"></div> <input type="text" placeholder="Orientação Dois" id="ruaTwo" maxlength="500" value="">
                <div class="alinhaSpan"></div> <input type="number" placeholder="metros" maxlength="500" id="metrosTwo" value=""> metros
            </div> 

            <div class="preecherD"> 
                <select name="proP" id="orientacaoTree">
                    <option value="">Selecione</option>
                    <option value="frente">Frente</option>
                    <option value="fundo">Fundo</option>
                    <option value="direito">Direito</option>
                    <option value="esquerdo">Esquerdo</option>
                </select>  
                <div class="alinhaSpan"></div> <input type="text" placeholder="Rua Três" maxlength="500" id="ruaTree" value="">
                <div class="alinhaSpan"></div> <input type="number" placeholder="metros" maxlength="500" id="metrosTree" value=""> metros
            </div> 

            <div class="preecherD"> 
                <select name="proP" id="orientacaoFour">
                    <option value="">Selecione</option>
                    <option value="frente">Frente</option>
                    <option value="fundo">Fundo</option>
                    <option value="direito">Direito</option>
                    <option value="esquerdo">Esquerdo</option>
                </select>  
                <div class="alinhaSpan"></div> <input type="text" placeholder="Rua Quatro" maxlength="500" id="ruaFour" value="">
                <div class="alinhaSpan"></div> <input type="number" placeholder="metros" maxlength="500" id="metrosFour" value=""> metros
            </div> 

            
        </fieldset>

        <div class="preecherD">
        <div class="alinhaSpan">Endereço:</div> <input type="text" placeholder="Endereço" id="enderecoImovel" value="">
        </div> 
        
        
        <div class="preecherD">
            <div class="alinhaSpan">Numero:</div> <input type="number" placeholder="Endereço: ex: 22" value="" id="numeroImovel"> 
        </div> 
        <div class="preecherD">
            <div class="alinhaSpan">Bairro:</div> <input type="text" id="bairroImovel" placeholder="Endereço: ex: Centro "> 
        </div> 
        <div class="preecherD">
        <div class="alinhaSpan">Cidade:</div> <input type="text" id="cidadeImovel" placeholder="Endereço: ex: Lagoa dos Patos " value="Lagoa dos Patos"> 
        </div> 
        <div class="preecherD">
            <div class="alinhaSpan">Estado:</div> <input type="text" id="estadoImovel" placeholder="ex: MG "  value="MG"> 
        </div> 
       
    </fieldset>


    <fieldset class="ProprietarioClass">
        <legend>Valor da Transação</legend>
        <div class="preecherD">
            <div class="alinhaSpan">R$:</div> <input type="number" placeholder="ex: 10000 "  id="valorTransacao"> 
        </div> 
       
    </fieldset>
    <fieldset class="ProprietarioClass">
        <legend>Forma de Pagamento</legend>
        <div class="preecherD">
            <select name="proP" id="metodoPagamento">
                <option value="">Selecione</option>
                <option value="avista">A vista</option>
                <option value="aprazo">A prazo </option>
                <option value="parcelado">Parcelado</option>
            </select> 
        </div> 
        <div class="preecherD">
            <div class="alinhaSpan">Observações:</div> <input type="text" placeholder="Adicione Qualquer tipo de informação "  id="oservacoes"> 
        </div> 
    </fieldset>
</fieldset>

<fieldset>
<legend>PROPRIETÁRIO</legend>
<fieldset class="ProprietarioClass">
    <legend>Vendedor</legend>
<div class="preecherD">
    <div class="alinhaSpan">Proprietário:</div> <input type="text" placeholder="Nome Vendedor" id="nomeVendedor" value="">
</div> 
<div class="preecherD">
    <div class="alinhaSpan">Sexo:</div> <select name="proP" id="sexoVendedor">
        <option value="">Selecione</option>
        <option value="m">MASCULINO</option>
        <option value="f">FEMININO </option>            
    </select> 
</div> 

<div class="preecherD">
    <div class="alinhaSpan">CPF:</div> <input type="text" placeholder="CPF Vendedor" id="cpfVendedor" value="">
</div> 

<div class="preecherD">
    <div class="alinhaSpan">Identidade:</div> <input type="text" placeholder="Identidade Vendedor" id="identidadeVendedor"> 
</div> 

<div class="preecherD">
    <div class="alinhaSpan">Estado Civil:</div> 
    <select name="proP" id="estadoCivilVendedor">
        <option value="">Selecione</option>
        <option value="s">Solteiro</option>
        <option value="c">Casado </option>
        <option value="a">Amaziado</option>
        <option value="ue">União estável</option>            
    </select> 
</div> 

<div class="preecherD">
    <div class="alinhaSpan">Profissão:</div> <input type="text" placeholder="profissão" id="profissaoVendedor"> 
</div> 
<div class="preecherD">
    <div class="alinhaSpan">Endereço:</div> <input type="text" placeholder="Endereço: ex rua " id="ruaVendedor"> 
</div> 
<div class="preecherD">
    <div class="alinhaSpan">Numero:</div>  <input type="number" placeholder="ex: 22" id="numeroVendedor"> 
</div> 
<div class="preecherD">
    <div class="alinhaSpan">Bairro:</div>   <input type="text" placeholder="Bairro: " id="bairroVendedor">
</div> 

<div class="preecherD">
    <div class="alinhaSpan">Cidade:</div>    <input type="text" placeholder="Cidade:  " id="cidadeVendedor">
</div> 

<div id="outrosProp">          
    <button onclick="adicionarPro()">Adicionar + Proprietário</button>
</div>
</fieldset>
<fieldset class="ProprietarioClass">
<legend>Comprador</legend>

<div class="preecherD">
    <div class="alinhaSpan">Proprietário:</div> <input type="text" placeholder="Nome do Comprador" id="nomeComprador" >
</div> 
<div class="preecherD">
    <div class="alinhaSpan">Sexo:</div> <select name="proP" id="sexoComprador">
        <option value="">Selecione</option>
        <option value="m">MASCULINO</option>
        <option value="f">FEMININO </option>            
    </select> 
</div> 

<div class="preecherD">
    <div class="alinhaSpan">CPF:</div> <input type="text" placeholder="CPF do Comprador" id="cpfComprador" >
</div> 

<div class="preecherD">
    <div class="alinhaSpan">Identidade:</div> <input type="text" placeholder="Identidade do Comprador" id="identidadeComprador"> 
</div> 

<div class="preecherD">
    <div class="alinhaSpan">Estado Civil:</div> 
    <select name="estadoCivilComprador" id="estadoCivilComprador">
        <option value="">Selecione</option>
        <option value="s">Solteiro</option>
        <option value="c">Casado </option>
        <option value="a">Amaziado</option>
        <option value="ue">União estável</option>            
    </select> 
</div> 

<div class="preecherD">
    <div class="alinhaSpan">Profissão:</div> <input type="text" placeholder="profissão" id="profissaoComprador"> 
</div> 

<div class="preecherD">
    <div class="alinhaSpan">Endereço:</div> <input type="text" placeholder="Endereço: ex rua " id="enderecoComprador"> 
</div> 

<div class="preecherD">
    <div class="alinhaSpan">Numero:</div>  <input type="number" placeholder="ex: 22" id="numeroComprador"> 
</div> 

<div class="preecherD">
    <div class="alinhaSpan">Bairro:</div>   <input type="text" placeholder="Bairro: " id="bairroComprador">
</div> 

<div class="preecherD">
    <div class="alinhaSpan">Cidade:</div>    <input type="text" placeholder="Cidade:  " id="cidadeComprador">
</div> 
<button onclick="adicionarCom()">Adicionar + Comprador</button>


<div id="outrosComp">
</div>
</fieldset>
<!-- <button onclick="inclusaoDados()">GERAR CONTRATO</button> -->`
    InsiraDados.innerHTML = ''

}

preenchimentoLimpo()

function fecharProp(recebeN) {
    const fecharProp = document.querySelector(`#propCompleto${recebeN}`)
    fecharProp.remove()
}

//${ClassProp}

function adicionarPro() {
    const outrosProp = document.querySelector('#outrosProp')
    const ClassProp = document.getElementsByClassName('addOutroProp').length
    const insereDados = document.createElement('div');
    insereDados.setAttribute('id', `propCompleto${ClassProp}`)
    insereDados.innerHTML += ` <div  class="addOutroProp vendedorAdicionado">
    <i class="bi bi-x-circle-fill" onclick="fecharProp(${ClassProp})">Fechar</i>
        <p>Outro Proprietário</p>
        <select name="proP" id="prop${ClassProp}">
            <option value="">Selecione</option>
            <option value="conjuge">conjuge</option>
            <option value="esposa">esposa </option>
            <option value="esposo">esposo</option>
            <option value="irmão">irmão</option>
            <option value="irmã">irmã</option>
            <option value="filho">Filho</option>
            <option value="filha">Filha</option>
            <option value="pai">pai</option>
            <option value="mãe">mãe</option>
            <option value="tio">tio</option>
            <option value="tia">tia</option>
            <option value="e">e</option>
        </select> <br>
        <input type="text" placeholder="Nome Completo" id="nomeProp${ClassProp}"> <br>
        <input type="text" placeholder="Profissão" id="profissaoProp${ClassProp}"> <br>
        <input type="text" placeholder="ex: 083.030.206-93" id="cpfProp${ClassProp}"> <br>
        <input type="text" placeholder="Identidade" id="identidadeProp${ClassProp}"> <br>
        <input type="text" placeholder="Endereço: ex rua Joana Dark" id="ruaProp${ClassProp}">
        <input type="number" placeholder="Numero: " id="numbProp${ClassProp}">
        <input type="text" placeholder="Bairro: " id="bairroProp${ClassProp}">
        <input type="text" placeholder="Cidade:  " id="cidadeProp${ClassProp}">
        
    </div>
    `;
    console.log(ClassProp)
    outrosProp.appendChild(insereDados)
}

function adicionarCom() {
    const outrosProp = document.querySelector('#outrosComp')
    const insereDados = document.createElement('div');

    const ClassComp = document.getElementsByClassName('addOutroProp').length

    insereDados.setAttribute('id', `compCompleto${ClassComp}`)

    insereDados.innerHTML += ` <div  class="addOutroProp compradorAdicionado">
    <i class="bi bi-x-circle-fill" onclick="fecharComp(${ClassComp})">Fechar</i>
        <p>Outro Comprador</p>
        <select name="proP" id="comp${ClassComp}">
            <option value="">Selecione</option>
            <option value="conjuge">conjuge</option>
            <option value="esposa">esposa </option>
            <option value="esposo">esposo</option>
            <option value="irmão">irmão</option>
            <option value="irmã">irmã</option>
            <option value="filho">Filho</option>
            <option value="filha">Filha</option>
            <option value="pai">pai</option>
            <option value="mãe">mãe</option>
            <option value="tio">tio</option>
            <option value="tia">tia</option>
            <option value="e">e</option>
        </select> <br>
        <input type="text" placeholder="Nome Completo" id="nomeComp${ClassComp}"> <br>
        <input type="text" placeholder="Profissão" id="profissaoComp${ClassComp}"> <br>
        <input type="text" placeholder="ex: 083.030.206-93" id="cpfComp${ClassComp}"> <br>
        <input type="text" placeholder="Identidade" id="identidadeComp${ClassComp}"> <br>
        <input type="text" placeholder="Endereço: ex rua Joana Dark" id="ruaComp${ClassComp}">
        <input type="number" placeholder="Numero: " id="numbComp${ClassComp}">
        <input type="text" placeholder="Bairro: " id="bairroComp${ClassComp}">
        <input type="text" placeholder="Cidade:  " id="cidadeComp${ClassComp}">
        
    </div>`;
    outrosProp.appendChild(insereDados)

}

function fecharComp(recebeN) {
    const fecharProp = document.querySelector(`#compCompleto${recebeN}`)
    fecharProp.remove()
}






function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(20, 20); //cima deixa quiet
        ctx.lineTo(20, 130); // nada. frente
        ctx.lineTo(400, 130); //direita, fundo
        ctx.lineTo(400, 20); // cima
        ctx.fill();
    }
}

//draw()

function draws() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();

        ctx.font = '10px serif';
        ctx.fillText(`Frente: Avenida Presidente Médici: 13.55 metros`, 50, 10);

        ctx.font = '10px serif';
        ctx.fillText(`Fundo: 12.99 metros`, 215, 150);

        ctx.font = '10px serif';
        ctx.fillText(`Esquerdo: 40.30 Metros`, 200, 60);

        ctx.font = '10px serif';
        ctx.fillText(`Direito: 40.20 Metros`, 210, 95);

        //o valor terá que ser somado + 100 px * 10 px

        ctx.fillStyle = 'rgb(158, 158, 158)';
        ctx.moveTo(0, 15); //cima deixa quiet
        ctx.lineTo(0, 140); // nada. esquerdo
        ctx.lineTo(80, 130); //fundo, direita
        ctx.lineTo(60, 15); // frente  + 100px





        ctx.fill();

    }
}
//draws()


function inclusaoDados() {
    const tipoContratoON = document.querySelector('#termoOuContrato')

    // informação do imovel
    const matricula = document.querySelector('#matriculaImovel').value
    const setor = document.querySelector('#setorImovel').value
    const quadra = document.querySelector('#quadraImovel').value
    const lote = document.querySelector('#loteImovel').value
    const tamanhoArea = document.querySelector('#areaTotalImovel').value

    const enderecoImovel = document.querySelector('#enderecoImovel').value

    const numeroImovel = document.querySelector('#numeroImovel').value

    const bairroImovel = document.querySelector('#bairroImovel').value

    const cidadeImovel = document.querySelector('#cidadeImovel').value

    const estadoImovel = document.querySelector('#estadoImovel').value

    const valorTransacao = document.querySelector('#valorTransacao').value

    const metodoPagamentoOne = document.querySelector('#metodoPagamento')
    const metodoPagamento = metodoPagamentoOne.options[metodoPagamentoOne.selectedIndex].value

    const observacao = document.querySelector('#oservacoes').value
    //NOME COMPRADOR

    const nomeVendedor = document.querySelector('#nomeVendedor').value

    const sexoVen = document.querySelector('#sexoVendedor')
    const sexoVendedor = sexoVen.options[sexoVen.selectedIndex].value
    
    const cpfVendedor = document.querySelector('#cpfVendedor').value

    const identidadeVendedor = document.querySelector('#identidadeVendedor').value

    const estadoCivilVendedo = document.querySelector('#estadoCivilVendedor')
    const estadoCivilVendedor = estadoCivilVendedo.options[estadoCivilVendedo.selectedIndex].value

    const profissaoVendedor = document.querySelector('#profissaoVendedor').value

    const ruaVendedor = document.querySelector('#ruaVendedor').value

    const numeroVendedor = document.querySelector('#ruaVendedor').value

    const bairroVendedor = document.querySelector('#ruaVendedor').value

    const cidadeVendedor = document.querySelector('#cidadeVendedor').value
    //medidas do lote


    const nomeCompradorPrincipal = document.querySelector('#nomeComprador').value

    const sexoComp = document.querySelector('#sexoComprador')
    const sexoComprador = sexoComp.options[sexoComp.selectedIndex].value
    
    const cpfComprador = document.querySelector('#cpfComprador').value

    const identidadeComprador = document.querySelector('#identidadeComprador').value

    const estadoCivilComprado = document.querySelector('#estadoCivilComprador')
    const estadoCivilComprador = estadoCivilComprado.options[estadoCivilComprado.selectedIndex].value

    const profissaoComprador = document.querySelector('#profissaoComprador').value

    const ruaComprador = document.querySelector('#enderecoComprador').value

    const numeroComprador = document.querySelector('#numeroComprador').value

    const bairroComprador = document.querySelector('#bairroComprador').value

    const cidadeComprador = document.querySelector('#cidadeComprador').value


    const orientacaoOne0 = document.querySelector('#orientacaoOne')
    const orientacaoOne = orientacaoOne0.options[orientacaoOne0.selectedIndex].value
    const ruaOrienteacaoOne = document.querySelector('#ruaOne').value
    const medidaOrientacaoOne = document.querySelector('#metragemOne').value



    const orientacaoTwo0 = document.querySelector('#orientacaoTwo')
    const orientacaoTwo = orientacaoTwo0.options[orientacaoTwo0.selectedIndex].value
    const ruaOrienteacaoTwo = document.querySelector('#ruaTwo').value
    const medidaOrientacaoTwo = document.querySelector('#metrosTwo').value

    const orientacaoTree0 = document.querySelector('#orientacaoTree')
    const orientacaoTree = orientacaoTree0.options[orientacaoTree0.selectedIndex].value
    const ruaOrienteacaoTree = document.querySelector('#ruaTree').value
    const medidaOrientacaoTree = document.querySelector('#metrosTree').value

    const orientacaoFour0 = document.querySelector('#orientacaoFour')
    const orientacaoFour = orientacaoFour0.options[orientacaoFour0.selectedIndex].value
    const ruaOrienteacaoFour = document.querySelector('#ruaFour').value
    const medidaOrientacaoFour = document.querySelector('#metrosFour').value





    if (orientacaoOne == 'frente') {
        var frente = ruaOrienteacaoOne
        var medidaFrente = medidaOrientacaoOne
    } else if (orientacaoOne == 'fundo') {
        var fundo = ruaOrienteacaoOne
        var medidaFundo = medidaOrientacaoOne
    } else if (orientacaoOne == 'esquerdo') {
        var esquerdo = ruaOrienteacaoOne
        var medidaEsquerdo = medidaOrientacaoOne
    } else if (orientacaoOne == 'direito') {
        var direito = ruaOrienteacaoOne
        var medidaDireito = medidaOrientacaoOne
    } else {
        console.log("primeiro")
        // var direito = ""
        // var medidaDireito = ""
        // var esquerdo = ""
        // var medidaEsquerdo = ""
        // var frente = ""
        // var medidaFrente = ""
        // var fundo = ""
        // var medidaFundo = ""
    }

    if (orientacaoTwo == 'frente') {
        var frente = ruaOrienteacaoTwo
        var medidaFrente = medidaOrientacaoTwo
    } else if (orientacaoTwo == 'fundo') {
        var fundo = ruaOrienteacaoTwo
        var medidaFundo = medidaOrientacaoTwo
    } else if (orientacaoTwo == 'esquerdo') {
        var esquerdo = ruaOrienteacaoTwo
        var medidaEsquerdo = medidaOrientacaoTwo
    } else if (orientacaoTwo == 'direito') {
        var direito = ruaOrienteacaoTwo
        var medidaDireito = medidaOrientacaoTwo
    } else {
        console.log("segundo")
        // var direito = ""
        // var medidaDireito = ""
        // var esquerdo = ""
        // var medidaEsquerdo = ""
        // var frente = ""
        // var medidaFrente = ""
        // var fundo = ""
        // var medidaFundo = ""
    }

    if (orientacaoTree == 'frente') {
        var frente = ruaOrienteacaoTree
        var medidaFrente = medidaOrientacaoTree
    } else if (orientacaoTree == 'fundo') {
        var fundo = ruaOrienteacaoTree
        var medidaFundo = medidaOrientacaoTree
    } else if (orientacaoTree == 'esquerdo') {
        var esquerdo = ruaOrienteacaoTree
        var medidaEsquerdo = medidaOrientacaoTree
    } else if (orientacaoTree == 'direito') {
        var direito = ruaOrienteacaoTree
        var medidaDireito = medidaOrientacaoTree
    } else {
        console.log("terceiro")
        // var direito = ""
        // var medidaDireito = ""
        // var esquerdo = ""
        // var medidaEsquerdo = ""
        // var frente = ""
        // var medidaFrente = ""
        // var fundo = ""
        // var medidaFundo = ""
    }

    if (orientacaoFour == 'frente') {
        var frente = ruaOrienteacaoFour
        var medidaFrente = medidaOrientacaoFour
    } else if (orientacaoFour == 'fundo') {
        var fundo = ruaOrienteacaoFour
        var medidaFundo = medidaOrientacaoFour
    } else if (orientacaoFour == 'esquerdo') {
        var esquerdo = ruaOrienteacaoFour
        var medidaEsquerdo = medidaOrientacaoFour
    } else if (orientacaoFour == 'direito') {
        var direito = ruaOrienteacaoFour
        var medidaDireito = medidaOrientacaoFour
    } else {
        console.log("quarto")
        // var direito = ""
        // var medidaDireito = ""
        // var esquerdo = ""
        // var medidaEsquerdo = ""
        // var frente = ""
        // var medidaFrente = ""
        // var fundo = ""
        // var medidaFundo = ""
    }


    // if(orientacaoOne == 'fundo' || orientacaoTwo == 'fundo' || orientacaoTree == 'fundo' || orientacaoFour == 'fundo'){
    //     var fundo = ruaOrienteacaoTwo
    //     var medidaFundo = medidaOrientacaoTwo
    // } else {
    //     var fundo = ""
    //     var medidaFundo = ""
    // }

    // if(orientacaoOne == 'direito' || orientacaoTwo == 'direito' || orientacaoTree == 'direito' || orientacaoFour == 'direito'){
    //     var esquerdo = ruaOrienteacaoTree
    //     var medidaEsquerdo = medidaOrientacaoTree
    // } else {
    //     var esquerdo = ""
    //     var medidaEsquerdo = ""
    // }

    // if(orientacaoOne == 'esquerdo' || orientacaoTwo == 'esquerdo' || orientacaoTree == 'esquerdo' || orientacaoFour == 'esquerdo'){
    //     var direito = ruaOrienteacaoFour
    //     var medidaDireito = medidaOrientacaoFour
    // } else {
    //     var direito = ""
    //     var medidaDireito = ""
    // }

    //informação do vendedor


    //informação do comprador
    const tipoContrato = tipoContratoON.options[tipoContratoON.selectedIndex].value
    var nomeComprador = document.getElementsByClassName('compradorAdicionado')
    var comp = document.getElementsByClassName('compradorAdicionado')
    var vend = document.getElementsByClassName('vendedorAdicionado')




    var contratoCompleto = []

    var vendedores = []
    var compradores = []

    if (vend.length > 0) {
        for (let i = 0; i < vend.length; i++) {
            const ii = i + 1
            const parent = document.querySelector(`#prop${i}`)

            const nomeCompleto = document.querySelector(`#nomeProp${i}`).value
            const profissaoProp = document.querySelector(`#profissaoProp${i}`).value
            const cpfProp = document.querySelector(`#cpfProp${i}`).value
            const identidadeProp = document.querySelector(`#identidadeProp${i}`).value
            const ruaProp = document.querySelector(`#ruaProp${i}`).value
            const numbProp = document.querySelector(`#numbProp${i}`).value
            const bairroProp = document.querySelector(`#bairroProp${i}`).value
            const cidadeProp = document.querySelector(`#cidadeProp${i}`).value
            const grauParentesco = parent.options[parent.selectedIndex].value




            const vendedor = {
                "nome": nomeCompleto,
                "parentesco": grauParentesco,
                "profissao": profissaoProp,
                "cpf": cpfProp,
                "identidade": identidadeProp,
                "rua": ruaProp,
                "numero": numbProp,
                "bairro": bairroProp,
                "cidade": cidadeProp

            }
            vendedores.push(vendedor)
        }
    }
    if (comp.length > 0) {
        for (let i = 0; i < comp.length; i++) {
            const ii = i + 1
            const parent = document.querySelector(`#comp${ii}`)
            const nomeCompleto = document.querySelector(`#nomeComp${ii}`).value
            const profissaoComp = document.querySelector(`#profissaoComp${ii}`).value
            const cpfComp = document.querySelector(`#cpfComp${ii}`).value
            const identidadeComp = document.querySelector(`#identidadeComp${ii}`).value
            const ruaComp = document.querySelector(`#ruaComp${ii}`).value
            const numbComp = document.querySelector(`#numbComp${ii}`).value
            const bairroComp = document.querySelector(`#bairroComp${ii}`).value
            const cidadeComp = document.querySelector(`#cidadeComp${ii}`).value
            console.log(parent)
            const grauParentesco = parent.options[parent.selectedIndex].value

            const comprador0 = {
                "nome": nomeCompleto,
                "parentesco": grauParentesco,
                "profissao": profissaoComp,
                "cpf": cpfComp,
                "identidade": identidadeComp,
                "rua": ruaComp,
                "numero": numbComp,
                "bairro": bairroComp,
                "cidade": cidadeComp

            }
            compradores.push(comprador0)
        }
    }


    const contratoPreenchido = {
        "tipo": `${tipoContrato}`,
        "outrosCompradoresArray": compradores,
        "outrosVendedoreArray": vendedores,
        "medidasImovel": 0,
        "frente": frente,
        "medidaFrente": medidaFrente,
        "fundo": fundo,
        "medidaFundo": medidaFundo,
        "esquerdo": esquerdo,
        "medidaEsquerdo": medidaEsquerdo,
        "direito": direito,
        "medidaDireito": medidaDireito,
        "lote": lote,
        "matricula": matricula,
        "setor": setor,
        "quadra": quadra,        
        "areaTotal": tamanhoArea,
        "enderecoImovel": enderecoImovel,
        "numerodoImovel": numeroImovel,
        "bairrodoImovel": bairroImovel,
        "cidadedoImovel": cidadeImovel,
        "estadodoImovel": estadoImovel,
        "valorCompra": valorTransacao,
        "metododePagamento": metodoPagamento,
        "observacao": observacao,
        "nomeVendedor": nomeVendedor,
        "sexodoVendedor": sexoVendedor,
        "cpfdoVendedor": cpfVendedor,
        "identidadeVendedor": identidadeVendedor,
        "estadoCivildoVendedor": estadoCivilVendedor,
        "profissaodoVendedor": profissaoVendedor,
        "ruadoVendedor": ruaVendedor,
        "numerodovendedor": numeroVendedor,
        "bairroVendedor": bairroVendedor,
        "cidadedoVendedor": cidadeVendedor,
        "nomecomprador": nomeCompradorPrincipal,
        "sexodoComprador": sexoComprador,
        "cpfdoComprador": cpfComprador,
        "identidadedoComprador": identidadeComprador,
        "estadoCivildoComprador": estadoCivilComprador,
        "profissaodoComprador": profissaoComprador,
        "ruadoComprador": ruaComprador,
        "numerodoComprador": numeroComprador,
        "bairrodoComprador": bairroComprador,
        "cidadedoComprador": cidadeComprador

    }
    contratos.push(contratoPreenchido);

    const adicionaLocal = JSON.stringify(contratos)

    console.log(adicionaLocal)

    localStorage.setItem('infoContrato', adicionaLocal)

    console.log(contratos)


}
