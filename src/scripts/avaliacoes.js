
String.prototype.extenso = function (c) {
    var ex = [
        ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
        ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"],
        ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
        ["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
    ];
    var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
    for (var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []) {
        j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
        if (!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
        for (a = -1, l = v.length; ++a < l; t = "") {
            if (!(i = v[a] * 1)) continue;
            i % 100 < 20 && (t += ex[0][i % 100]) ||
                i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
            s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
                ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("?o", "?es") : ex[3][t]) : ""));
        }
        a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
        a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
    }
    return r.join(e);
}
function enviaImprimi() {
    alert('tim')
}
const idForm = document.querySelector('#formEnviar')
idForm.addEventListener('submit', () => {
    verificarEImprimir()
})
const verificaAntes = document.querySelector('#abrirI');
const verLink = window.location.search
if(verLink == "?func=funcio") {
    verificaAntes.innerHTML = `<button onclick="backVolta()" >Carregar Dados Anterior</button>`
}
function backVolta() {
    window.history.back();
}


function verificarEImprimir() {
    const verificaClasse = document.getElementsByTagName('tr');
    const inputsGeral = document.getElementsByTagName('input')
    const toSele = document.getElementsByTagName('select');
    //const toSelect = toSele[0].options[toSele.selectedIndex];
    //console.log(toSele[0].text)

    for(let i = 0; i < inputsGeral.length; i++) {
        if(inputsGeral[i].value.length > 0) {
            //verificaClasse[i].setAttribute('class', '')
            // console.log(inputsGeral[i].value)
        } else {
            inputsGeral[i].style.backgroundColor = 'red'
            toSele[0].style.backgroundColor = 'red'
             toSele[1].style.backgroundColor = 'red'
        }
    
       
    }

    if(inputsGeral[1].value.length > 1) {
        console.log(inputsGeral[1].value)
    }

    calcularAvaliacao()
   // if
   

    // console.log(inputsGeral)
    // console.log(verificaClasse)
    //classeTR
}
//verificarEImprimir();



function calcularAvaliacao() {
const imprimiAvaliacao = document.querySelector('#printAvalia')
const protocoloEcidade = document.querySelector('#protoEcidade').value;
const anoProtocolo = document.querySelector('#anoProtocolo').value;
const nomeSolicitante = document.querySelector('#nomeSolicitante').value.toUpperCase();

const selectFunOne = document.querySelector('#selectFun')
const selectFun = selectFunOne.options[selectFunOne.selectedIndex].text.toUpperCase();

const nomeFazenda = document.querySelector('#nomeFazenda').value.toUpperCase();
const denominacaoFazenda = document.querySelector('#denominacaoFazenda').value.toUpperCase();
const matriculaFazenda = document.querySelector('#matriculaFazenda').value;

const folhaRegistro = document.querySelector('#folhaRegistro').value;

if (folhaRegistro > 0 ) {
    var registroF = `folhas ${folhaRegistro},`
} else {
    var registroF = ``
}

const livroRegistro = document.querySelector('#livroRegistro').value;

if (livroRegistro.length > 0) {
    var livroF = `livro ${livroRegistro}, `

}
const mesesAnos = ["dezembro", "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

const diaRegistro = document.querySelector('#diaRegistro').value;
const mesRegistro = mesesAnos[document.querySelector('#mesRegistro').value];
const anoRegistro = document.querySelector('#anoRegistro').value;
const nomeProprietario = document.querySelector('#nomeProprietario').value.toUpperCase();
const cpfProprietario = document.querySelector('#cpfProprietario').value;
const identidadeProprietario = document.querySelector('#identidadeProprietario').value;

const nomeConjuge = document.querySelector('#nomeConjuge').value;

const cpfconjuge = document.querySelector('#cpfconjuge').value;

const identidadeconjuge = document.querySelector('#identidadeconjuge').value;


if (nomeConjuge.length != 0) {
    var conjuge = `, e seu(a) Cônjuge <strong>${nomeConjuge}</strong>, `
} else {
    var conjuge = ""
}

if (cpfconjuge.length != 0) {
    var cpfDoConjuge = `CPF: <strong>${cpfconjuge}</strong>,`
}else {
    var cpfDoConjuge = ""
}

if (identidadeconjuge.length != 0) {
    var identidadeDoConjuge = `  e identidade <strong>${identidadeconjuge}</strong>, `
} else {
    var identidadeDoConjuge = ""
}





const aptdaoTerraS = document.querySelector('#aptdaoTerra')
const aptdaoTerra = aptdaoTerraS.options[aptdaoTerraS.selectedIndex].value;
const nomeaptdaTerra = aptdaoTerraS.options[aptdaoTerraS.selectedIndex].text;


const alqueireM = document.querySelector('#alqueireM').value;
var alqueireEmHectare = alqueireM * (4.84);


const hectaresM = document.querySelector('#hectaresM').value;
const aresM = document.querySelector('#aresM').value;
const centiaresM = document.querySelector('#centiaresM').value;

const somaHec = parseFloat(alqueireEmHectare) + parseFloat(hectaresM)


if (somaHec.toString().split('.').length > 1) {
    
    

}
var pegaUltimo = somaHec.toString().split('.')[1];

//var somaRestoHec = parseInt(aresM) + parseInt(pegaUltimo)
var somaRestoHec = parseInt(aresM) + parseInt(centiaresM)


    var somaAresCentiares = aresM + centiaresM
    var somatotalHec = `${somaHec}.${somaAresCentiares}`


console.log(somatotalHec)

const valorTotalReal = somatotalHec * aptdaoTerra;
const terraPExtenso = aptdaoTerra.extenso()

const precoHectare = Number(aptdaoTerra).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })



const valorEmReais = valorTotalReal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
const valorRealT = valorTotalReal.toString().split('.')[0]
const valorRea = valorTotalReal

const porExtenso = valorRealT.toString().extenso();
const divideValor = valorRea.toString().split('.')[1];

console.log(valorRea)
console.log(porExtenso)



if (divideValor > 0) {
    var primeiroD = divideValor.slice(0, 2)
    const SegundoD = divideValor.slice(2)
    console.log(primeiroD)
    

    console.log(SegundoD)
    console.log(SegundoD)
    if(primeiroD.length == 1){
        primeiroD = primeiroD + "0"
    }

    var cPorExtenso = Math.round(`${primeiroD}.${SegundoD}`).toString().extenso() + " centavos";
    console.log(cPorExtenso)
} else {
    var cPorExtenso = ""
}



const hectaresExenso = somatotalHec.toString().split('.')[0]
const aresCExenso = somatotalHec.toString().split('.')[1]
const extHectares = hectaresExenso.extenso() + ' hectares' 
const aresExtenso = aresM.extenso() + ' ares';
const centiExtenso = centiaresM.extenso() + ' centiares';
//e ${valorEmReais}

console.log(centiExtenso)
//console.log(cPorExtenso)
//console.log(primeiroD)
//  console.log(SegundoD)





//if (folhaRegistro.lenght > 0)
const data = new Date();
const dia = data.getDate()
const mes = mesesAnos[data.getMonth()+1]
 console.log(data)




imprimiAvaliacao.innerHTML = ` <div class="fundoImpressao">
<div class="corpoFolha">
    <div>
    <div class="cabecaFolha">
        <div>
            <img src="/src/imagens/brasao-lagoa-dos-patos-mg-tributos-modular.png" alt="">
        </div>
        <div class="prefeituraTexto">   
            <h3>PREFEITURA DE LAGOA DOS PATOS MG</h3>
            <h5>CNPJ: 16.901.381/0001-10</h5>
            <h5>PRAÇA 31 DE MARÇO, 111, CENTRO - LAGOA DOS PATOS - MG</h5>
            <h5>(38) 3745-1239</h5>
        </div>
    </div>
    <div class="meioFolha">
        <div class="certidaoEProtocolo">
            <h3>CERTIDÃO DE VALOR VENAL DE IMÓVEL RURAL</h3>
            <h4>PROTOCOLO ${protocoloEcidade}/${anoProtocolo}</h4>
        </div>
        <p>Certifico a pedido verbal e protocolado de <strong>${nomeSolicitante}</strong>, pessoa interessada e a quem interessar que, verificando os valores de Terrenos Rurais do CTM <strong>(Código Tributário Municipal)</strong> e CVTN <strong>(Comissão de Valor da Terra Nua)</strong>, verifica-se constar o seguinte:</p>
        <p>O Imóvel<strong> ${nomeFazenda}</strong>, lugar denominado <strong>${denominacaoFazenda}</strong>, imóvel: <strong>MATRICULA: ${matriculaFazenda}</strong>,<strong> ${registroF} ${livroF}</strong> registrado em <strong>${diaRegistro} de <span class="toUCase">${mesRegistro}</span> ${anoRegistro}</strong>, propriedade de: <strong>${nomeProprietario}</strong>, CPF/CNPJ: <strong>${cpfProprietario}</strong>, identidade de número <strong>${identidadeProprietario}</strong>${conjuge}${cpfDoConjuge}${identidadeDoConjuge}, com área total de <strong>${somatotalHec} (${extHectares} ${aresExtenso} ${centiExtenso} )</strong>, descrita nesta avaliação como <strong>${nomeaptdaTerra}</strong>, com valor total avaliado em <strong>${valorEmReais} reais </strong> <strong>( ${porExtenso} reais ${cPorExtenso})</strong>, sendo o preço por Hectare <strong>${precoHectare} (${terraPExtenso})</strong>, definido por Comissão de VTN (Valor de Terra Nua), localizado neste Município de Lagoa dos Patos – MG.</p>
        <div>
            <div class="tabelaInfo"> 
                <h5 class="leiAnexo">VALOR VENAL RURAL - LAGOA DOS PATOS - MG<br> Avalição de Terra Nua/${anoProtocolo}</h5>
                <table class="tablesLa">
                    <tr>
                        <td class="linhaTab corLinha">Item</td>
                        <td class="linhaTab corLinha">Área</td>
                        <td class="linhaTab corLinha">Valor por Ha</td>
                        <td class="linhaTab corLinha">Características da Área</td>     
                        <td class="linhaTab corLinha">Valor Venal Total</td>                            
                        
                        
                    </tr>
                    <tr >  
                        <td class="linhaTab">01</td>
                        <td class="linhaTab">${somatotalHec} Ha</td>
                        <td class="linhaTab">${precoHectare}</td>
                        <td class="linhaTab">Detalhes da terra: ${nomeaptdaTerra}</td>       
                        <td class="linhaTab"><strong>${valorEmReais}</strong> </td>                          
                       
                    </tr>
                </table>
            </div>
        </div>
        <h4 class="cidadeData">Lagoa dos Patos – MG, ${dia} de ${mes} de ${anoProtocolo}.</h4>
        <div class="localAssinatura">
            <p>_______________________________________</p>
            <h5>${selectFun}</h5>
            <P>Divisão  de  Receitas  e  Cadastramento  Imobiliário Município  de  Lagoa  dos  Patos/MG –  CNPJ 16.901.381/0001-10</P>
        </div>
        <div class="assinaturaDigital">
            <h2>${selectFun}</h2>
            <div>
                <h3>Emitido Digitalmente por:</h3>
                <h4>${selectFun}</h4>
                <p>${data}</p>
               
            </div>
        </div>
    </div>

    <div class="peFolha">
        <div>
            <img src="/src/imagens/footer-avaliacao.png" alt="">
        </div>
    </div>



    </div>

</div>
</div>`
window.print();
}
const atua = new Date();
const mostraAt = atua
atualizacao.innerHTML = `<p style="background-color: white; padding:1px; color:black; font-size:12px; width:fit-content; margin:5px 0;">Última atualização: Quinta Mar 02/03/2023 12:18:30 GMT-0300 (Horário de Brasília) </p>`


