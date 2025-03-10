
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


const imprimiAvaliacao = document.querySelector('#printAvalia')
const protocoloEcidade = document.querySelector('#protoEcidade').value;
const anoProtocolo = document.querySelector('#anoProtocolo').value;
const nomeSolicitante = document.querySelector('#nomeSolicitante').value.toUpperCase();

const selectFunOne = document.querySelector('#selectFun')
const selectFun = selectFunOne.options[selectFunOne.selectedIndex].value.toUpperCase();

const nomeFazenda = document.querySelector('#nomeFazenda').value.toUpperCase();
const denominacaoFazenda = document.querySelector('#denominacaoFazenda').value.toUpperCase();
const matriculaFazenda = document.querySelector('#matriculaFazenda').value;

const folhaRegistro = document.querySelector('#folhaRegistro').value;

if (folhaRegistro > 0) {
    var registroF = `folhas ${folhaRegistro},`
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

if (nomeConjuge.length > 0) {
    var conjuge = `, e seu(a) Cônjuge <strong>${nomeConjuge}</strong>, `

}
const cpfconjuge = document.querySelector('#cpfconjuge').value;
if (cpfconjuge.length > 0) {
    var cpfDoConjuge = `CPF: <strong>${cpfconjuge}</strong>,`

}
const identidadeconjuge = document.querySelector('#identidadeconjuge').value;
if (identidadeconjuge.length > 0) {
    var identidadeDoConjuge = `  e identidade <strong>${identidadeconjuge}</strong>, `

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
    var somatotalHec = somaHec + somaAresCentiares


console.log(somatotalHec)

const valorTotalReal = somatotalHec * aptdaoTerra;

const precoHectare = aptdaoTerra.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })



const valorEmReais = valorTotalReal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
const valorRea = valorTotalReal
const porExtenso = valorRea.toFixed(0).toString().extenso();
const divideValor = valorRea.toString().split('.')[1];


if (divideValor > 0) {
    const primeiroD = divideValor.slice(0, 2)
    const SegundoD = divideValor.slice(2)

    var cPorExtenso = Math.round(`${primeiroD}.${SegundoD}`).toString().extenso() + " centavos";
} else {
    var cPorExtenso = ""
}




//e ${valorEmReais}

console.log(valorEmReais)
//console.log(cPorExtenso)
//console.log(primeiroD)
//  console.log(SegundoD)





//if (folhaRegistro.lenght > 0)




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
        <p>O Imóvel<strong> ${nomeFazenda}</strong>, lugar denominado <strong>${denominacaoFazenda}</strong>, imóvel: <strong>MATRICULA: ${matriculaFazenda}</strong>, ${registroF} ${livroF} registrado em <strong>${diaRegistro} de <span class="toUCase">${mesRegistro}</span> ${anoRegistro}</strong>, propriedade de: <strong>${nomeProprietario}</strong>, CPF: ${cpfProprietario}, identidade de número ${identidadeProprietario}${conjuge}${cpfDoConjuge}${identidadeDoConjuge}com área total de <strong>${somatotalHec} (Dez hectare(s) ,Doze are(s) Dez centiare(s) )</strong>, descrita nesta avaliação como <strong>${nomeaptdaTerra}</strong>, com valor total avaliado em <strong>${valorEmReais} reais </strong> <strong>( ${porExtenso} reais ${cPorExtenso})</strong>, sendo o preço por Hectare <strong>${precoHectare}</strong>, definido por Comissão de VTN (Valor de Terra Nua), localizado neste Município de Lagoa dos Patos – MG.</p>
        <div>
            <div class="tabelaInfo"> 
                <h5 class="leiAnexo">VALOR VENAL RURAL - LAGOA DOS PATOS - MG<br> Avalição de Terra Nua/${anoProtocolo}</h5>
                <table>
                    <tr>
                        <td class="linhaTab corLinha">Item</td>
                        <td class="linhaTab corLinha">Área</td>
                        <td class="linhaTab corLinha">Valor por Ha</td>
                        <td class="linhaTab corLinha">Características da Área</td>     
                        <td class="linhaTab corLinha">Valor Venal Total</td>                            
                        
                        
                    </tr>
                    <tr >  
                        <td class="linhaTab">01</td>
                        <td class="linhaTab">${1} Ha</td>
                        <td class="linhaTab">${1}</td>
                        <td class="linhaTab">Detalhes da terra: ${1}</td>       
                        <td class="linhaTab">${1}</td>                          
                       
                    </tr>
                </table>
            </div>
        </div>
        <h4 class="cidadeData">Lagoa dos Patos – MG, 30 de Março de 2022.</h4>
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
                <p>DATA: 01/03/2022</p>
                <p>HORA: 14:53</p>
                <p>GTM -3:00</p>
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

//+ Carlos R. L. Rodrigues
//@ http://jsfromhell.com/string/extenso [rev. #3]


function gerarAvaliacao() {







}