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

const enderecoLink = location.hash.replace('#', '')

const nomeaTitle = location.pathname.toString().includes('print-rural')

function criadorDePages(cod) {
    const contrato = JSON.parse(localStorage.getItem('contratosETermos'))
    const imovel = JSON.parse(localStorage.getItem('cadastroImovel'))
    const pessoal = JSON.parse(localStorage.getItem('cadastroPessoal'))

    const infoDoImovel = imovel[contrato[cod].imovel]

    const valorIOne = contrato[cod].valor.split(".")[0]
    const valorITwo = contrato[cod].valor.split(".")[1]
    const valorMoney = parseFloat(`${valorIOne},${valorITwo}`).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    console.log(parseInt(valorITwo).length)
    const centavoss = parseInt(valorITwo).length != undefined ? ` e ${valorITwo} centavos`:''
    const valorimovelExtenso = `${valorIOne.extenso()} reais${centavoss}`

    const formaPagamento = contrato[cod].metodoPagamento

    console.log(infoDoImovel)

    document.querySelector('#pageOne').innerHTML = `<h2>CONTRATO PARTICULAR DE COMPRA E VENDA DE IMÓVEL URBANO</h2>

<p>Contrato de compra e venda de <strong>imóvel urbano</strong> que entre si fazem <span id="topoCompradores">os vendedores (a)</span> e <span id="topoVendedores">compradores (a)</span> nas seguintes condições:</p>

<p><strong>CLÁUSULA PRIMEIRA:</strong> <span id="insereVendedores"></span> <strong>VENDE e transfere direito de posse</strong> e domicilio com todos os seus encargos para <span id="insereCompradores"></span> </p>

<p><strong>CELEBRAM</strong> este ato um contrato de compra e venda de <strong>direito de posse de terreno urbano</strong>, com <strong>área total de ${infoDoImovel.areatotalimovel} M²</strong> (${infoDoImovel.areatotalimovel.extenso()} metros quadrados), sendo <strong>${nomeaRua(infoDoImovel.medidafrente)} lineares de frente</strong> pra ${infoDoImovel.nomefrente}, ${nomeaRua(infoDoImovel.medidafundo)} lineares de fundos pra ${infoDoImovel.nomefundo}, ${nomeaRua(infoDoImovel.medidadireito)} lineares do lado direito pra ${infoDoImovel.nomeDireito} e ${nomeaRua(infoDoImovel.medidaEsquerda)} lineares com lado esquerdo pra ${infoDoImovel.nomeesquerdo}. Lote: ${nomeLote(infoDoImovel.lote)} da quadra ${nomeLote(infoDoImovel.quadra)}, setor ${nomeLote(infoDoImovel.setor)}, localizado na ${enderecoImovelLote(infoDoImovel.endereco,infoDoImovel.numero,infoDoImovel.bairro, infoDoImovel.cep, infoDoImovel.cidade, infoDoImovel.estado)}.

<p><strong>CLÁUSULA SEGUNDA:</strong> O valor da presente compra e venda é de <strong>${valorMoney} (${valorimovelExtenso})</strong>, sendo pago<strong> ${formaPagamento.toUpperCase()}</strong>, combinado no ato da assinatura deste.</p>

<p><strong>CLÁUSULA TERCEIRA:</strong> <span id="seVendedor"></span> passa a posse do imóvel no ato da assinatura deste, ficando esclarecido que o vendedor se compromete a assinar qualquer outro documento referente a transferência do imóvel para o nome d<span id="seCompradoress"></span>.</p>

<p><strong>CLÁUSULA QUARTA:</strong> no caso de algum impedimento na transferência do imóvel para o comprador, a transação torna – se sem efeito, ficando o vendedor autorizado a se emitir novamente na posse do referido imóvel, mediante pagamento da quantia recebida pela venda do mesmo, com as correções permitidas em lei.</p>
<h3 class="codigoInfo">COD: 001254</h3>`

observContrato.textContent = infoDoImovel.observacao != null ? infoDoImovel.observacao : ''

    console.log(contrato[cod])
    if (contrato[cod].vendedores.length > 1) {
        var vend = "OS VENDEDORES: "
    } else {
        var vend = "O VENDEDOR: "
    }
    insereVendedores.innerHTML = vend
    topoCompradores.innerHTML = vend.toLowerCase().replace(':', '')
    seVendedor.innerHTML = vend.replace(/:/g, ' ')
    const ovenClass = document.querySelectorAll('.oven').length
    for(let i = 0; i < ovenClass; i++) {
        console.log('oven')
    document.querySelectorAll('.oven')[i].textContent = vend.replace(/:/g, ' ')
    }
    
   
    for (let i = 0; i < contrato[cod].vendedores.length; i++) {
        const prop1 = contrato[cod].vendedores[i].p1 != 0 ? contrato[cod].vendedores[i].p1 : ""
        const prop2 = contrato[cod].vendedores[i].p2 != 0 ? contrato[cod].vendedores[i].p2 : ""

        if (prop1 != '') {

            var principal = `<strong>${pessoal[prop1 - 1].nome.toUpperCase()}</strong>, ${pessoal[prop1 - 1].nacionalidade}, ${pessoal[prop1 - 1].estadoCivil}, ${pessoal[prop1 - 1].profissao}, <strong>CPF: ${pessoal[prop1 - 1].cpf}</strong>, Identidade de número <strong>${pessoal[prop1 - 1].identidade.toUpperCase()},</strong> residente e domiciliado na ${pessoal[prop1 - 1].endereco}, Nº ${pessoal[prop1 - 1].numero}, bairro ${pessoal[prop1 - 1].bairro}, CEP: ${pessoal[prop1 - 1].cep}, município de ${pessoal[prop1 - 1].cidade} - ${pessoal[prop1 - 1].estado}`

            var principalAss = `<div><p>______________________________________________ <br>${pessoal[prop1 - 1].nome.toUpperCase()}<br>${pessoal[prop1 - 1].cpf}</p> </div>`
        } else {
            var principal = '. '
            var principalAss = ``
        }
        if (prop2 != '') {
            var conjuge = `. Sendo cônjuge <strong>${pessoal[prop2 - 1].nome.toUpperCase()}</strong>, ${pessoal[prop2 - 1].nacionalidade}, ${pessoal[prop2 - 1].estadoCivil}, ${pessoal[prop2 - 1].profissao}, <strong>CPF: ${pessoal[prop2 - 1].cpf}</strong>, identidade de número <strong>${pessoal[prop2 - 1].identidade.toUpperCase()}</strong> residente e domiciliado na ${pessoal[prop2 - 1].endereco}, Nº ${pessoal[prop2 - 1].numero}, bairro ${pessoal[prop2 - 1].bairro}, CEP: ${pessoal[prop2 - 1].cep}, município de ${pessoal[prop2 - 1].cidade} - ${pessoal[prop2 - 1].estado}. `

            var conjugeAss = `<div><p>______________________________________________ <br>${pessoal[prop2 - 1].nome.toUpperCase()}<br>${pessoal[prop2 - 1].cpf}</p> </div>`
        } else {
            var conjuge = '. '
            var conjugeAss = ``
        }

        insereVendedores.innerHTML += `<span class="olhar">${i + 1}°</span>) ${principal}${conjuge}`
        assVendedoresC.innerHTML += `${principalAss}${conjugeAss}`
    }
    
    console.log(contrato[cod])
    if (contrato[cod].compradores.length > 1) {
        var vend = "OS COMPRADORES: "
    } else {
        var vend = "O COMPRADOR: "
    }
    insereCompradores.innerHTML = vend
    topoVendedores.innerHTML = vend.toLowerCase().replace(':', '')
    seCompradoress.innerHTML = vend.replace(/:/g, ' ').toLowerCase()
    
    
    //seComprador.innerHTML = vend.replace(/:/g, ' ')

    for (let i = 0; i < contrato[cod].compradores.length; i++) {

        const prop1 = contrato[cod].compradores[i].c1 != 0 ? contrato[cod].compradores[i].c1 : ""
        const prop2 = contrato[cod].compradores[i].c2 != 0 ? contrato[cod].compradores[i].c2 : ""

        if (prop1 != '') {

            var principalC = `<strong>${pessoal[prop1 - 1].nome.toUpperCase()}</strong>, ${pessoal[prop1 - 1].nacionalidade}, ${pessoal[prop1 - 1].estadoCivil}, ${pessoal[prop1 - 1].profissao}, <strong>CPF: ${pessoal[prop1 - 1].cpf}</strong>, Identidade de número <strong>${pessoal[prop1 - 1].identidade.toUpperCase()}</strong> residente e domiciliado na ${pessoal[prop1 - 1].endereco}, Nº ${pessoal[prop1 - 1].numero}, bairro ${pessoal[prop1 - 1].bairro}, CEP: ${pessoal[prop1 - 1].cep}, município de ${pessoal[prop1 - 1].cidade} - ${pessoal[prop1 - 1].estado}`

            var principalAss = `<div><p>______________________________________________ <br>${pessoal[prop1 - 1].nome.toUpperCase()}<br>${pessoal[prop1 - 1].cpf}</p> </div>`
        } else {
            var principalC = '. '
            var principalAss = ``
        }
        if (prop2 != '') {
            var conjugeC = `. Sendo o cônjuge <strong>${pessoal[prop2 - 1].nome.toUpperCase()}</strong>, ${pessoal[prop2 - 1].nacionalidade} ${pessoal[prop2 - 1].estadoCivil} ${pessoal[prop2 - 1].profissao}, <strong>CPF: ${pessoal[prop2 - 1].cpf}</strong>, e identidade de número <strong>${pessoal[prop2 - 1].identidade.toUpperCase()}</strong> residente e domiciliado na ${pessoal[prop2 - 1].endereco}, Nº ${pessoal[prop2 - 1].numero}, bairro ${pessoal[prop2 - 1].bairro}, CEP: ${pessoal[prop2 - 1].cep}, município de ${pessoal[prop2 - 1].cidade} - ${pessoal[prop2 - 1].estado}`

            var conjugeAss = `<div><p>______________________________________________ <br>${pessoal[prop2 - 1].nome.toUpperCase()}<br>${pessoal[prop2 - 1].cpf}</p> </div>`
        } else {
            var conjugeC = '. '
            var conjugeAss = ``
        }

        insereCompradores.innerHTML += `<span class="olhar">${i + 1}°</span>) ${principalC}${conjugeC}`
        assCompradoresC.innerHTML += `${principalAss}${conjugeAss}`
    }
    for(let i =0; i < 2; i++){
        document.querySelectorAll('.codigoInfo')[i].textContent = `COD: ${contrato[cod].codigo}`
    }
    
    
}
criadorDePages(enderecoLink)


function carregaFonte() {
    const carrF =  document.querySelectorAll('.page')
    const fontesACarregar = document.querySelector('#fontesACarregar').selectedIndex

    const normal = `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`
    const maquinaEscrever = `'Courier New', Courier, monospace`
    const pequena = `'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif`
    const muitosItens = `'Times New Roman', Times, serif`
    const grande = `Verdana, Geneva, Tahoma, sans-serif`
    const cartorio = `monospace`
    const cursiva = `cursive`

    const todasFontes = [normal, maquinaEscrever, pequena, muitosItens, grande,cartorio, cursiva]

    
    for(let i = 0; i < carrF.length; i++){
        carrF[i].style.fontFamily = todasFontes[fontesACarregar]
    }
}

function carregaTFonte() {
    const carrF =  document.querySelectorAll('.page')
    const fontesACarregar = document.querySelector('#tamanhoFontesACarregar').selectedIndex
    const Tamanho = '16px'
    const Minuscula = '8px'
    const Pequena = '12px'
    const Normal = '15px'
    const Grande = '20px'
    const ExtraGrande = '24px'
    

    const todasFontes = [Tamanho, Minuscula, Pequena, Normal, Grande, ExtraGrande]

    
    for(let i = 0; i < carrF.length; i++){
        carrF[i].style.fontSize = todasFontes[fontesACarregar]
    }
}

function carregaCFundo() {
    
    const fontesACarregar = document.querySelector('#FundoACarregar').selectedIndex
    const selecione = ''
    const amarelo = '-amarelo'
    const verde = '-verde'
    const normal = ''

    const todasFontes = [selecione,amarelo, verde, normal]
    
    for(let i = 0; i < 4; i++){

        if(fontesACarregar == 1) {
            location.href = `./print${todasFontes[1]}.html#${enderecoLink}`
        } else if (fontesACarregar == 2) {
            location.href = `./print${todasFontes[2]}.html#${enderecoLink}`
        } else {
            location.href = `./print${todasFontes[3]}.html#${enderecoLink}`
        }
        
        //carrF[i].style.fontSize = todasFontes[fontesACarregar]
    }
}

function nomeaRua(metros) {
    const med = metros.split('.')
    const metross = med[0]
    const centimetros = med[1] != undefined ? ` e ${med[1].extenso()} centimetros`: ''
    const medidas = `<strong>${metros}M (${metross.extenso()} Metros${centimetros})</strong>`
    return medidas
}   

function nomeLote(lote){
    const loteCorreto = parseInt(lote)
    const infoLote = lote.replace(/[^A-Z]/g,'')
    console.log(loteCorreto)
    const infoRetorna = `<strong>${lote} (${lote.extenso()} ${infoLote})</strong>`
    return infoRetorna
}
function enderecoImovelLote(endereco, numero, bairro, cep, cidade, estado ) {
    return `${endereco}, Nº ${numero}, ${bairro}, ${cep}, ${cidade} - ${estado}`
}
const imprimiContra = () => {
    print()
}

if(nomeaTitle == true){
    const compPrint = document.querySelector('#compPrint').textContent
    const vendPrint = document.querySelector('#vendPrint').textContent
     //criadorDePages(cod)
     document.querySelector('title').textContent = `CV RURAL - ${vendPrint.split(' ')[0]} para ${compPrint.split(' ')[0]}`
 }