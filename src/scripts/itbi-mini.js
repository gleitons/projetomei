function imprimirITBI(){let a=calculaData()[0],b=calculaData()[1],c=calculaData()[2],d=calculaData()[3],e=calculaData()[4];const f=document.getElementById("protoEcidade").value,g=document.getElementById("selectFun"),h=g.options[g.selectedIndex].text,i=document.getElementById("condicaoImovelMark"),j=i.options[i.selectedIndex].text,k=document.getElementById("situacaoTransmitente"),l=k.options[k.selectedIndex].text,m=document.getElementById("selectNatureza"),n=m.options[m.selectedIndex].text,o=m.options[m.selectedIndex].value,p=document.getElementById("selectTipoImovel"),q=p.options[p.selectedIndex].text,r=document.getElementById("selectQualidadeImovel"),s=r.options[r.selectedIndex].text,t=calculoITBI(document.getElementById("valorITBI"))[2],u=calculoITBI(document.getElementById("valorITBI"))[0],v=calculoITBI(document.getElementById("valorITBI"))[1],w=`${a} de ${b} de ${c}`,x=document.getElementById("adquirenteITBI"),y=x.value+"",z=document.getElementById("transmitenteITBI").value,A=document.getElementById("descricaoImovelITBI").value;if("COMPRAEVENDA"==o)var B=`(2% sobre R$ ${t} = R$ ${u}) + taxa de expediente: R$ 7,90 = <strong>R$ ${v}</strong>`;else if("selecione"==o)var B=`Por favor Insira a natureza da Operação`;else var B=`Não tributável acordo com o Artigo 156 da Constituição Federal.`;imprimirComplete.innerHTML=`
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
                        <h3>PROTOCOLO: ${f}/${c}</h3>
                        <p>SECRETARIA DA FAZENDA – DIVISÃO DE CADASTRO - CNPJ: 16.901.381/0001-00</p>
                    </div>
                </div>
            </div>
            <div >
                <fieldset class="adquirente">
                    <legend>ADQUIRENTE</legend>
                    <p>
                        ${y}
                    </p>
                </fieldset>
                <fieldset class="transmitente">
                    <legend>TRASMITENTE</legend>
                    <P>
                        ${z}
                    </P>
                </fieldset>
                
            </div>
            <div class=" marca dInlineflex justificaItens">
                <div>
                    <fieldset class="naturezaTransmissao">
                        <legend>NATUREZA DA TRANSMISSÃO</legend>
                        <p>${n}</p>
                    </fieldset>
                </div>
                <div>
                    <fieldset class="tipodeImovel">
                        <legend>TIPO DE IMÓVEL</legend>
                        <p>${q}</p>
                        
                        
                    </fieldset>
                </div>
                <div>
                    <fieldset class="qualidadeDoImovel">
                        <legend>QUALIDADE DO IMÓVEL:</legend>
                        <p>${s}</p>
                    </fieldset>
                </div>
            </div>
            <div>
                <fieldset class="descImovel">
                    <legend>DESCRIÇÃO DO IMÓVEL</legend>
                    <p>
                        ${A}
                    </p>
                </fieldset>
            </div>
            <div class=" marca dInlineflex justificaItens">
                <div>
                    <fieldset>
                        <legend>VALOR DA TRANSAÇÃO</legend>
                        <p>Valor: <strong>R$ ${t}.</strong></p>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <legend>LOCAL DE DATA</legend>
                        <p>LAGOA DOS PATOS - MG, <strong>${w}</strong>.</p>
                    </fieldset>
                </div>
                
            </div>
            <div>
                <fieldset>
                    <legend>PARA USO DA REPARTIÇÃO</legend>
                   <p>
                    VALOR DO IMÓVEL <strong>R$ ${t}</strong> <br>     <strong>TOTAL A TRIBUTAR: </strong>R$ ${v} <br>
                    <strong>DATA: </strong>${w}. <br>    
                    <strong>VALOR DO ITBI:</strong> ${B} 
                   </p>
                   <p><STRONG>ATENÇÃO:</STRONG> Segue boleto para pagamento em anexo junto com este documento.</p>
                   
                   <div class="bloc">
                    <div class="assinaturaAnalisador">
                        <p><strong>${h}</strong></p>
                        <p >
                            Divisão de Receitas e Cadastramento Imobiliário Município 
                            de Lagoa dos Patos/MG – CNPJ 16.901.381/0001-10
                        </p>
                    </div>
                </div>
                <p><strong>LAGOA DOS PATOS - MG ${w} </strong></p>
                </fieldset>
            </div>
            <div class=" marca dInlineflex justificaItens">
                <div>
                    <fieldset>
                        <legend>CONDIÇÕES DO IMÓVEL</legend>
                        <p><strong>${j}</strong></p>
                        <!-- <p>&#9745 Água  &#9745 Esgoto  &#9745 Iluminação  &#9745 Calçamento  &#9745 Asfalto</p> -->
                        <div>
                            <p>Avaliador:</p>
                            <div class="assinaturaAnalisador">
                                <p>${h}</p>
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
                        <p><strong>${l}</strong></p>
                        
                        <!--<p>&#9745 Nada Consta <br> &#9745 Possui Divida Ativa</p>-->
                        <div class="">
                               <div class="assinaturaAnalisador">
                                <p>Avaliador:</p>
                                <p>${h}</p>
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
                            LAGOA DOS PATOS-MG ${w} </p>
                        <div class="dInlineflex centralizar">
                            
                            <div class="assinaturaAnalisador">
                                
                                <div>
                                    <p><I><strong>${h}</strong></I></p>
                                    <p >
                                        Divisão de Receitas e Cadastramento Imobiliário Município <br>
                                        de Lagoa dos Patos/MG – CNPJ 16.901.381/0001-10
                                    </p>
                                </div>
                            </div>
                            <div class="alinharUAssinatura">
                                <p>Ass. Avaliador    _________________________________________.</p>
                                <p>${w}</p>
                            </div>
                        </div>
                    </fieldset>
                </div>

            </div>  

        </div>
    </div>`,titleSave.innerHTML=`<title>${f}_${o}_${w}</title>`,window.print()}function calculoITBI(a){const b=document.querySelector("input#valorITBI").value;if("0"==b.length)valorCalculado.innerHTML=`<strong>Insira um valor para calcular</strong>`;else{var c=(+a.value).toFixed(2);var d=(2*b/100).toFixed(2),e=(d-7.42+14.84).toFixed(2),f=valorCalculado.innerHTML=`Valor: R$ ${d} + taxa de expediente: R$ 7,42 - <strong>Total: R$ ${e}</strong>`}return[d,e,c]}function calculaData(){let a=new Date,b=a.getHours(),c=a.getMinutes(),d=a.getDate(),e=a.getMonth(),f=a.getFullYear();if(0==e)var g="Janeiro";else if(1==e)var g="Fevereiro";else if(2==e)var g="Mar\xE7o";else if(3==e)var g="Abril";else if(4==e)var g="Maio";else if(5==e)var g="Junho";else if(6==e)var g="Julho";else if(7==e)var g="Agosto";else if(8==e)var g="Setembro";else if(9==e)var g="Outubro";else if(10==e)var g="Novembro";else if(11==e)var g="Dezembro";return[d,g,f,b,c]}function contadordeLetras(){const a=document.getElementById("adquirenteITBI").value;if(1200<=a.length){const b=a.length;mCaracDigitado.innerHTML=`Quantidade max: 1050 - Seu texto: ${b}`}else{const b=a.length;mCaracDigitado.innerHTML=`Quantidade max: 1050 - Seu texto: ${b}`}}