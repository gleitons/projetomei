    function calcularAvaliacao() {
            

            let diaHoje = calculaData()[0];
            let mesHoje = calculaData()[1];
            let anoHoje = calculaData()[2];
            let horaNow = calculaData()[3]
            let minuNow = calculaData()[4]
            
            
            let proT = document.querySelector('input#protoEcidade').value;
            

            let nSol = document.querySelector('input#nomeSolicitante').value.toLocaleUpperCase()
            
            

            let func = document.getElementById('selectFun');
            let funcSelecionado = func.options[func.selectedIndex].text;
            
            
            let nomeFazenda = document.getElementById('nomeFazenda').value.toLocaleUpperCase();
            

            let denominacaoFazenda = document.getElementById('denominacaoFazenda').value.toLocaleUpperCase();
            let matriculaFazendaf2 = document.getElementById('matriculaFazenda').value;
            let matriculaFazendaf = matriculaFazendaf2.length;
            
            if (matriculaFazendaf <= 0) {
                var matriculafFazenda = "" 
            } else {
                var matriculafFazenda = `<strong>MATRICULA: ${matriculaFazendaf2}</strong>` 
            }


                     
            let folhaRegistrof = document.getElementById('folhaRegistro').value;
            let folhaRegistro = `, folhas ${folhaRegistrof}`
            let livroRegistrof = document.getElementById('livroRegistro').value;
            let livroRegistro =  `, livro ${livroRegistrof}`
            let diaRegistro = document.getElementById('diaRegistro').value;
            let mesRegistrof = document.getElementById('mesRegistro').value;
            let mesRegistro = mesdeReg(mesRegistrof)
            let anoRegistro = document.getElementById('anoRegistro').value;
            let nomeProprietario = document.getElementById('nomeProprietario').value;
            let cpfProprietario = document.getElementById('cpfProprietario').value;
            let identidadeProprietariof = document.getElementById('identidadeProprietario').value;
            let identidadeProprietario =  `identidade de número ${identidadeProprietariof}`
            let nomeConjuge = document.getElementById('nomeConjuge').value;
            let cpfconjuge = document.getElementById('cpfconjuge').value;
            let identidadeconjuge = document.getElementById('identidadeconjuge').value;
            

            let aptdaoTerra = document.getElementById('aptdaoTerra');
            
            let valorAptdao01 = aptdaoTerra.options[aptdaoTerra.selectedIndex].value;
            console.log(valorAptdao01)
            let descricaoAptdao = aptdaoTerra.options[aptdaoTerra.selectedIndex].text;
            let valorAptdao = Number(valorAptdao01);    
            

            
            let alqueireMas = document.getElementById('alqueireM').value;
            let hectaresM = parseFloat(document.getElementById('hectaresM').value);
            let aresM = parseFloat(document.getElementById('aresM').value)/100;
            let centiaresM = document.getElementById('centiaresM').value;
            const alqueireM = parseFloat(alqueireMas) * parseFloat(4.84);
            console.log(hectaresM)
            
            var areaTotalN = parseFloat((alqueireM + (hectaresM))) + parseFloat((aresM.toFixed(2))) +   `${parseFloat(centiaresM)}`
            console.log(areaTotalN + " area total") 

            // if (alqueireM.length > 0 && hectaresM == 0) {
            //     var areaTotalN = ` ${parseFloat(alqueireM)} + ${parseFloat(aresM)}${centiaresM}`
            //     console.log(areaTotalN + " area total")
            // } else {
            //     var areaTotalN = `${alqueireM}${hectaresM}.${aresM}${centiaresM}`
            // }

            
            console.log(areaTotalN)
            let dadoStringTotal = String(Object(areaTotalN));
            let dadoAreaTotal = Number(dadoStringTotal)
            let valoparaExtenso = (dadoAreaTotal * valorAptdao01).toFixed(2)
            console.log(valoparaExtenso)
            let valorTerra = (dadoAreaTotal * valorAptdao01).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' });
            console.log(valorTerra)

            let valorporHectare = valorAptdao.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' });
            console.log(valorporHectare)

            let centaValor = valoparaExtenso.slice(-2);
            let vaReais = valoparaExtenso.slice(-6, -3);
            let vaMilhares = valoparaExtenso.slice(-9, -6);
            console.log(valoparaExtenso)
            let vaMilhoes = valoparaExtenso.slice(0, -9)


            if (centaValor <= 0) {
                var centavos = "";
            } else {
                var centavosf = nomePorExtenso(centaValor);
                var centavos = `e ${centavosf} centavos`
            }
            if (vaReais <= 0) {
                var reais = "reais";
            } else {

                let reaisfz = nomePorExtenso(vaReais);
                let reaisf = reaisfz.toString().replace("e Zero","")
                var reais = `${reaisf} reais`            
            }


            if (vaMilhares <= 0) {
                var milhares = "";
            } else {
                var milharesfz = nomePorExtenso(vaMilhares);
                console.log(milharesfz)
                var milharesf = milharesfz.toString().replace("e Zero","")
                var milhares = `${milharesf} mil `            
            }
            
            if (vaMilhoes <= 0) {
                var milhoes = "";
            } else {
                var milhoesf = nomePorExtenso(vaMilhoes);
                if (vaMilhoes <= 1) {
                    var milhoes = `${milhoesf} milhão e`
                } else {
                    var milhoes = `${milhoesf} milhões e`
                }             
     
            }
            
          
            
            
            
            

            
            

            if (alqueireM.length <= 0) {
                var exteAlqueire = alqueireM;
            } else {
                var seTiverAlqueire = nomePorExtenso(alqueireM);
                var exteAlqueire = `${seTiverAlqueire} alqueire(s) `
            }

            if (hectaresM.length <= 0) {
                var exteHectares = hectaresM;
            } else {
                var seTiverHectare = nomePorExtenso(hectaresM);
                var exteHectares = `${seTiverHectare} hectare(s) `
            }

            if (aresM.length <= 0) {
                var exteAres = aresM;
            } else {
                var seTiverAres = nomePorExtenso(aresM);
                var exteAres = `${seTiverAres} are(s) `
            }

            if (centiaresM.length <= 0) {
                var exteCentiares = centiaresM;
            } else {
                var seTiverCentiares = nomePorExtenso(centiaresM);
                var exteCentiares = `${seTiverCentiares} centiare(s) `
            }
                        
            
            

            if (nomeConjuge.length > 0) {
                var esposa = `e seu(a) Cônjuge ${nomeConjuge}, CPF: ${cpfconjuge} e identidade ${identidadeconjuge}`            
            } else {
                var esposa = ""
            }

            //${valorTerra} - ${dadoAreaTotal} - ${dadoStringTotal}

            imprimeProtocolo.innerHTML = `PROTOCOLO ${proT}/${anoHoje}`
            cabecaDesc.innerHTML = `<p>
            Certifico a <strong>pedido verbal e protocolado</strong> de <strong>${nSol}</strong>, pessoa interessada e a quem interessar que,  verificando os valores de Terrenos Rurais do CTM <strong>(Código Tributário Municipal) e CVTN (Comissão de Valor da Terra Nua)</strong>, verifica-se constar o seguinte: </br>
    O Imóvel <strong>${nomeFazenda}</strong>, lugar denominado <strong>${denominacaoFazenda}</strong>, imóvel: ${matriculafFazenda}${folhaRegistro}${livroRegistro}, registrado em <strong>${diaRegistro} de ${mesRegistro}  ${anoRegistro}</strong>, propriedade de: <strong>${nomeProprietario}</strong>, CPF: ${cpfProprietario}, ${identidadeProprietario} ${esposa} com área total de <strong>${areaTotalN}</strong> <strong><i>(${exteAlqueire}${exteHectares},${exteAres}${exteCentiares})</i></strong>, descrita nesta avaliação como <strong>${descricaoAptdao}</strong>, com valor total de <strong>${valorTerra}</strong> <i><strong>( ${milhoes} ${milhares} ${reais} ${centavos})</strong></i>, sendo o preço por Hectare ${valorporHectare}, definido por Comissão de VTN (Valor de Terra Nua), localizado neste Município de Lagoa dos Patos – MG.
        </p>
        <div>
            <div class="tabelaInfo"> 
                <h5 class="leiAnexo">VALOR VENAL RURAL - LAGOA DOS PATOS - MG<br> Avalição de Terra Nua/${anoHoje}</h5>
                <table>
                    <tr>
                        <td class="linhaTab corLinha">Item</td>
                        <td class="linhaTab corLinha">Área</td>
                        <td class="linhaTab corLinha">Valor por Ha</td>
                        <td class="linhaTab corLinha">Caracteristicas da Área</td>     
                        <td class="linhaTab corLinha">Valor Venal Total</td>                            
                        
                        
                    </tr>
                    <tr >  
                        <td class="linhaTab">01</td>
                        <td class="linhaTab">${areaTotalN} Ha</td>
                        <td class="linhaTab">${valorporHectare}</td>
                        <td class="linhaTab">Detalhes da terra: ${descricaoAptdao}</td>       
                        <td class="linhaTab">${valorTerra}</td>                          
                       
                    </tr>
                </table>
            </div>
        </div>
        <div id="valorVenais">
            
        </div>

       <div class="assinaturasEQr">
        <div class="assEsquerdo">
            
        </div>
        <div class="assDireito">
            <div class="nomeAss">
                <div class="AssMaior">${funcSelecionado}</div>
                <div class="cpfAss">Funcionário Responsável</div>
            </div>
            <div class="DadosAss">
                <p class="assinaEData">
                    Emitido Digitalmente por</br>
                    <strong>${funcSelecionado}</strong> <br>Emissão e horário: <br>${diaHoje}/${mesHoje}/${anoHoje} - ${horaNow}:${minuNow}hs <br> -3 UTM LDP MG</div>
                </p>
            </div>
        </div>
        </div>
        <div>
            <h2>
                Lagoa dos Patos – MG, ${diaHoje} de ${mesHoje} de ${anoHoje}.
            </h2>
            <div class="assinaTOperador">
                <p>
                    ________________________________________
                </p>
                <div class="AssinOp">${funcSelecionado}
                </div>
                <p>
                    Divisão de Receitas e Cadastramento Imobiliário
                    Município de Lagoa dos Patos/MG –
                    CNPJ 16.901.381/0001-10
                </p>
            </div>
            <div>             
                <img style="width: 100%;" src="https://www.salamineira.com/src/imagens/pe-lagoa-dos-patos-mg-min.png" alt="">
            </div>`

            //window.alert(`Avaliação Gerada com Sucesso, clique em "IMPRIMIR AGORA"`)
            tituloSalvar.innerHTML = `Avaliação Rural ${nomeProprietario} - ${nSol} ${diaHoje} de ${mesHoje} de ${anoHoje}`    
    
    
             var displayImp = document.getElementById('avaliacaoFundo').style.display;
             if(displayImp == "none"){
               document.getElementById('avaliacaoFundo').style.display = 'block';
                
            }else{
                document.getElementById('avaliacaoFundo').style.display = 'block';
             }
       
            
    }


    function nomePorExtenso(n){

            
            let unidades=["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
            let especiais=["Dez","Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezsete", "Dezoito", "Deznove"]; 
            let dezenas=["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
            let centenas=["Cem", "Duzentos", "Trezentos", "Quatrocentos", "Quinhetos", "Seiscentos","Setescentos","Oitocentos", "Novecentos"];
            let milhares = ["Mil", "Dois Mil", "Três Mil"]

            //calculo do terreno
            //Valores com 1 algarismo
            if(n.length === 1) {
                //Imprimir unidadades
               var extenso = (unidades[parseInt(n[0])]); 
            }	      
            //Valores com 2 algarismos
            else if(n.length === 2) {
                //Especiais
                if((n[0]=='1') && (n[1]=='0'||n[1]=='1'||n[1]=='2'||n[1]=='3'||n[1]=='4'||n[1]=='5'||n[1]=='6'||n[1]=='7'||n[1]=='8'||n[1]=='9')) {
                    var extenso =  (especiais[parseInt(n[1])]);
                }
                
                //Dezenas
                else if((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && n[1]=='0') {
                    var extenso =  (dezenas[parseInt(n[0]-2)]);
                }
    
                //Dezenas compostas
                else {
                    var extenso =  (dezenas[parseInt(n[0]-2)]+" e "+unidades[parseInt(n[1])]);
                }
            }
    
            //Valores com 3 algarimos
            else if (n.length === 3) {
                //Centenas inteiras
                if ((n[0]=='1'||n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && (n[1]=='0' && n[2]=='0')) {
                    var extenso = (centenas[parseInt(n[0]-1)])
                }
    
                //Centenas + números especiais
                else if ((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && (n[1]=='1') && ((n[2]=='1'||n[2]=='2'||n[2]=='3'||n[2]=='4'||n[2]=='5'||n[2]=='6'||n[2]=='7'||n[2]=='8'||n[2]=='9'))) {
                    var extenso =  (centenas[parseInt(n[0]-1)]+" e "+especiais[parseInt(n[2])])
                }
    
                //Centenas + Nº Compostos
                else if ((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && (n[1]!='1')) {
                    var extenso =  (centenas[parseInt(n[0]-1)]+" e "+dezenas[parseInt(n[1]-2)]+" e "+unidades[parseInt(n[2])]);
                }
    
                //Cento + Nº Especiais
                else if ((n[0]=='1') && (n[1]=='1') && (n[2]=='1'||n[2]=='2'||n[2]=='3'||n[2]=='4'||n[2]=='5'||n[2]=='6'||n[2]=='7'||n[2]=='8'||n[2]=='9')) {
                    var extenso =  ("Cento e "+especiais[parseInt(n[2])])
                }
    
                //Cento + Nº Compostos
                else if ((n[0]=='1') && (n[1]!='1') && (n[2]!='0')) {
                    var extenso =  ("Cento e "+dezenas[parseInt(n[1]-2)]+" e "+unidades[parseInt(n[2])]);
                }
                
            }
            return extenso;
    }
    

    function pegadadosaqui() {

        let setor = document.getElementById('selSetor');
        let setSel = setor.options[setor.selectedIndex].value;
        let setorSelecionado = (setSel * 3.71).toFixed(2);
        let setSelect = setor.options[setor.selectedIndex].text;

        let quadra = document.querySelector('input#quadra').value;
        let lote = document.querySelector('input#lote').value;
        
        let n = document.querySelector('input#areaLote').value;
        let ac = document.querySelector('input#areaConstrucao').value;

        

        let somaImovel = (valorTAcabamento * ac)+(setorSelecionado * n);

        let valorAcabaFinal = (valorTAcabamento * ac).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' });
        let comparaSetemLote = Number(TipoDeAc.value)
        let valorm2imovel = Number(TipoDeAc.value)

        
        
        let valorVenalLotes = (setorSelecionado * n).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' });
        
        let precom2Setor = setorSelecionado.toString().replace(".", ",");
        

        if (comparaSetemLote == "0") {
            var mensagemAreaConstruida = "(O imóvel não possui construção no momento da emissão desta avaliação)"
            
        } else {
            var mensagemAreaConstruida = "(Valor calculado de acordo com o código tributário 544/2005 Pág. 87)"
        }
        
        let totalImovels = somaImovel.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' });
        let valorm2imovelSetor = valorm2imovel.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' });

        
        



        let unidades=["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
        let especiais=["Dez","Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezsete", "Dezoito", "Deznove"]; 
        let dezenas=["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
        let centenas=["Cem", "Duzentos", "Trezentos", "Quatrocentos", "Quinhetos", "Seiscentos","Setescentos","Oitocentos", "Novecentos"];
        let milhares = ["Mil", "Dois Mil", "Três Mil"]

        let unidadess=["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
        let especiaiss=["Dez","Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezsete", "Dezoito", "Deznove"]; 
        let dezenass=["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
        let centenass=["Cem", "Duzentos", "Trezentos", "Quatrocentos", "Quinhetos", "Seiscentos","Setescentos","Oitocentos", "Novecentos"];
        let milharess = ["Mil", "Dois Mil", "Três Mil"]
       
        //calculo da casa
        if(ac.length === 1) {
            //Imprimir unidadades
           var extensoCasa = (unidades[parseInt(ac[0])]); 
        }         
        //Valores com 2 algarismos
        else if(ac.length === 2) {
            //Especiais
            if((ac[0]=='1') && (ac[1]=='0'||ac[1]=='1'||ac[1]=='2'||ac[1]=='3'||ac[1]=='4'||ac[1]=='5'||ac[1]=='6'||ac[1]=='7'||ac[1]=='8'||ac[1]=='9')) {
                var extensoCasa =  (especiaiss[parseInt(ac[1])]);
            }
            
            //Dezenas
            else if((ac[0]=='2'||ac[0]=='3'||ac[0]=='4'||ac[0]=='5'||ac[0]=='6'||ac[0]=='7'||ac[0]=='8'||ac[0]=='9') && ac[1]=='0') {
                var extensoCasa =  (dezenass[parseInt(ac[0]-2)]);
            }

            //Dezenas compostas
            else {
                var extensoCasa =  (dezenass[parseInt(ac[0]-2)]+" e "+unidadess[parseInt(ac[1])]);
            }
        }

        //Valores com 3 algarimos
        else if (ac.length === 3) {
            //Centenas inteiras
            if ((ac[0]=='1'||ac[0]=='2'||ac[0]=='3'||ac[0]=='4'||ac[0]=='5'||ac[0]=='6'||ac[0]=='7'||ac[0]=='8'||ac[0]=='9') && (ac[1]=='0' && ac[2]=='0')) {
                var extensoCasa = (centenass[parseInt(ac[0]-1)])
            }

            //Centenas + números especiais
            else if ((ac[0]=='2'||ac[0]=='3'||ac[0]=='4'||ac[0]=='5'||ac[0]=='6'||ac[0]=='7'||ac[0]=='8'||ac[0]=='9') && (ac[1]=='1') && ((ac[2]=='1'||ac[2]=='2'||ac[2]=='3'||ac[2]=='4'||ac[2]=='5'||ac[2]=='6'||ac[2]=='7'||ac[2]=='8'||ac[2]=='9'))) {
                var extensoCasa =  (centenass[parseInt(ac[0]-1)]+" e "+especiaiss[parseInt(ac[2])])
            }

            //Centenas + Nº Compostos
            else if ((ac[0]=='2'||ac[0]=='3'||ac[0]=='4'||ac[0]=='5'||ac[0]=='6'||ac[0]=='7'||ac[0]=='8'||ac[0]=='9') && (ac[1]!='1')) {
                var extensoCasa =  (centenass[parseInt(ac[0]-1)]+" e "+dezenass[parseInt(ac[1]-2)]+" e "+unidadess[parseInt(ac[2])]);
            }

            //Cento + Nº Especiais
            else if ((ac[0]=='1') && (ac[1]=='1') && (ac[2]=='1'||ac[2]=='2'||ac[2]=='3'||ac[2]=='4'||ac[2]=='5'||ac[2]=='6'||ac[2]=='7'||ac[2]=='8'||ac[2]=='9')) {
                var extensoCasa =  ("Cento e "+especiaiss[parseInt(ac[2])])
            }

            //Cento + Nº Compostos
            else if ((ac[0]=='1') && (ac[1]!='1') && (ac[2]!='0')) {
                var extensoCasa =  ("Cento e "+dezenass[parseInt(ac[1]-2)]+" e "+unidadess[parseInt(ac[2])]);
            }
            
        }


        //calculo do terreno
        //Valores com 1 algarismo
        if(n.length === 1) {
            //Imprimir unidadades
           var extenso = (unidades[parseInt(n[0])]); 
        }	      
        //Valores com 2 algarismos
        else if(n.length === 2) {
            //Especiais
            if((n[0]=='1') && (n[1]=='0'||n[1]=='1'||n[1]=='2'||n[1]=='3'||n[1]=='4'||n[1]=='5'||n[1]=='6'||n[1]=='7'||n[1]=='8'||n[1]=='9')) {
                var extenso =  (especiais[parseInt(n[1])]);
            }
            
            //Dezenas
            else if((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && n[1]=='0') {
                var extenso =  (dezenas[parseInt(n[0]-2)]);
            }

            //Dezenas compostas
            else {
                var extenso =  (dezenas[parseInt(n[0]-2)]+" e "+unidades[parseInt(n[1])]);
            }
        }

        //Valores com 3 algarimos
        else if (n.length === 3) {
            //Centenas inteiras
            if ((n[0]=='1'||n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && (n[1]=='0' && n[2]=='0')) {
                var extenso = (centenas[parseInt(n[0]-1)])
            }

            //Centenas + números especiais
            else if ((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && (n[1]=='1') && ((n[2]=='1'||n[2]=='2'||n[2]=='3'||n[2]=='4'||n[2]=='5'||n[2]=='6'||n[2]=='7'||n[2]=='8'||n[2]=='9'))) {
                var extenso =  (centenas[parseInt(n[0]-1)]+" e "+especiais[parseInt(n[2])])
            }

            //Centenas + Nº Compostos
            else if ((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && (n[1]!='1')) {
                var extenso =  (centenas[parseInt(n[0]-1)]+" e "+dezenas[parseInt(n[1]-2)]+" e "+unidades[parseInt(n[2])]);
            }

            //Cento + Nº Especiais
            else if ((n[0]=='1') && (n[1]=='1') && (n[2]=='1'||n[2]=='2'||n[2]=='3'||n[2]=='4'||n[2]=='5'||n[2]=='6'||n[2]=='7'||n[2]=='8'||n[2]=='9')) {
                var extenso =  ("Cento e "+especiais[parseInt(n[2])])
            }

            //Cento + Nº Compostos
            else if ((n[0]=='1') && (n[1]!='1') && (n[2]!='0')) {
                var extenso =  ("Cento e "+dezenas[parseInt(n[1]-2)]+" e "+unidades[parseInt(n[2])]);
            }
            
        }

        if (proTString.length <= "0" || nomeSol.length <= "0" || quadra.length <= "0"|| lote.length <= "0" || n.length <= "0" || ac.length <= "0") {
           // alert("FALTA DADOS A SEREM PREENCHIDOS")

        }  else if (setor.value.length <= "0"){
          //  alert("O SETOR DEVE SER SELECIONADO")
        }
        else if (func.value.length <= "0"){
           // alert("O USUÁRIO DEVE SER SELECIONADO")
        }
        else {

        let extensoSZero = extenso.toString().replace("e Zero","")


        valorVenais.innerHTML = `<p>
                    <strong>* Terreno (Lote):</strong> <u>${valorVenalLotes}</u> (Este é o valor do terreno sem imóvel, localizado no <strong>${setSelect}</strong> sendo o preço médio de <strong>R$ ${precom2Setor}</strong> por M²). <strong>(*VT)</strong>
                </p>
                <p>
                    <strong>* Área Construída:</strong> <u>${valorAcabaFinal}</u> ${mensagemAreaConstruida}<strong>(*VT)</strong>
                </p>
                <p>
                    <strong>*Valor total do Imóvel:</strong> <u>${totalImovels}</u> (Sendo <strong>${valorVenalLotes}</strong> o valor do lote ${lote}, localizado na Quadra ${quadra} do ${setSelect} e a área construida avaliada em <strong>${valorAcabaFinal}</strong>. <i>Calculo de acordo com o código tributário 544/2005, onde o valor é  ${valorm2imovelSetor} por M²).</i><strong>(*VT)</strong>
                </p>
                <p>
                    <strong>VT= </strong>(Valor de tributação).
                </p>`

    }
    }


    function fazerProtocolo(){
        //alert('POR FAVOR NÃO SE ESQUEÇA DE FAZER O PROTOCOLO ANTES DE COMEÇAR')
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
    

    function mesdeReg(numb) {
        
        let mesDoc = parseInt(numb) - 1;
        
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
        return mesDDoc;
    }


        function operator() {
            let data = new Date;
            let anoAtual = data. getFullYear();
            let nomeOp = prompt("Insira o Nome do Funcionário");
            let Protocol = prompt("Insira o numero de Protocolo Geral");
            let nomeSolicita = prompt("Insira o nome do Solicitante");
            let oper = nomeOp.toUpperCase(nomeOp)

            titleImpressao.innerHTML = `Documento validado através do Protocolo Geral N° ${Protocol}/${anoAtual}`
            operador.innerHTML = `${oper}`
        }
        function assinaturaProtocolo(nProtocolo){
            let AssProtocolo = operator(assinatura)
        }

        function Mudarestado(el) {
            var display = document.getElementById(el).style.display;
            if(display == "none")
                document.getElementById(el).style.display = 'block';
                
            else
                document.getElementById(el).style.display = 'none';
        }

       