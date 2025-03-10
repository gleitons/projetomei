async function geraIcones() {
    const response = await fetch('./icons')
    const data = await response.json()
    const atalhosTela = document.querySelector('.iconsSeleciona')
    var fast = []
    data.map((e) => {
        const imgLoad = `<img src="https://ialkyrog.sirv.com/sala/icones/${e}" alt="">`
        atalhosTela.innerHTML += `<img src="https://ialkyrog.sirv.com/sala/icones/${e}" alt="">`

        fast.push(imgLoad)

    })

    SelectIcon()
    localStorage.setItem('imgPreLoad', JSON.stringify(fast))
}
function fastIconeLoad() {
    if(localStorage.getItem('imgPreLoad') != null) {
        carregaRapido()
    } else {
        geraIcones()
    }
 
}
function carregaRapido() {
    const data = JSON.parse(localStorage.getItem('imgPreLoad'))
    const atalhosTela = document.querySelector('.iconsSeleciona')
    atalhosTela.innerHTML  = ''
    var fast = []
    data.map((e) => {
        atalhosTela.innerHTML += e
    })
    SelectIcon()
    geraIcones()
}

if (document.querySelector('.iconsSeleciona') != undefined) {
    fastIconeLoad()
}



if (document.querySelector('#editarIconeS') != null) {
    loadIconesTop()
}
function loadIconesTop() {
    const data = JSON.parse(localStorage.getItem('todosAtalhos'))
    data.map((e) => {
        editarIconeS.innerHTML += `<option>${e.texto}</option>`
    })
}
function carregaIconsEditar() {
    const seleciona = document.querySelector('select#editarIconeS').selectedIndex - 1
    const data = JSON.parse(localStorage.getItem('todosAtalhos'))
    linkDoAtalho.value = data[seleciona].link
    nomeIcones.value = data[seleciona].texto
    document.querySelector('.atalhosTela img').src = data[seleciona].imagem
    document.querySelector('.atalhosTela p').textContent = data[seleciona].texto

    numberIcon.value = data[seleciona].id
}
function atualizadorDeIcone() {
    const nomeIcone = document.querySelector('#nomeIcones')
    const imgIcone = document.querySelector('.atalhosTela img').src
    const linkIcon = document.querySelector('#linkDoAtalho')
    const data = JSON.parse(localStorage.getItem('todosAtalhos'))
    const numberIcon = document.querySelector('#numberIcon').value

    const imgPadrao = './src/img/icons/vendedor.png'


    if (nomeIcone.value.length <= 0 || linkIcon.value.length <= 0) {
        alert('Preencha Todos os campos')
    } else {
        const oLink = linkIcon.value.toString()
        console.log(oLink.includes('https://'))
        if (oLink.includes('https://')) {
            var LinkDoIcone = oLink
        } else {
            var LinkDoIcone = `https://${oLink}`
        }

        const iconeEdit = data.find(objeto => objeto.id == numberIcon);

        if (iconeEdit) {

            iconeEdit.id = numberIcon,
                iconeEdit.imagem = imgIcone,
                iconeEdit.texto = nomeIcone.value,
                iconeEdit.link = LinkDoIcone.toLowerCase()

            localStorage.setItem('todosAtalhos', JSON.stringify(data))

        } else {
            alert('ATALHO NÃO ENCONTRO - VAMOS CORRIGIR O ERRO');
        }


        // data.push(addIcons)

        //localStorage.setItem('eventos', JSON.stringify(data))
        location.reload()

        alert('ATALHO ALTERADO COM SUCESSO!!')
        //location.reload()
    }
}
function nomeIconeEdita() {
    const inputIcone = document.querySelector('#nomeIcones').value
    const atalhosTela = document.querySelector('.atalhosTela p')
    atalhosTela.textContent = inputIcone
    executaixiBum()

}
function nomeIcone() {
    const inputIcone = document.querySelector('#nomeIcone').value
    const atalhosTela = document.querySelector('.atalhosTela p')
    atalhosTela.textContent = inputIcone
    executaixiBum()

}
function SelectIcon() {
    const iconsSeleciona = document.querySelectorAll('.iconsSeleciona img')
    const proto = location.protocol + '//'
    const host = location.host
    const link = proto + host
    iconsSeleciona.forEach((e) => {
        e.addEventListener('click', () => {
            const imgReload = e.src.replace(link, '')
            const atalhosTela = document.querySelector('.atalhosTela img')
            atalhosTela.src = imgReload
            executaixiBum()
        })
    })
}

function executaixiBum() {
    const atalhosTela = document.querySelector('.atalhosTela')
    atalhosTela.classList.add('ixiBum')
    setTimeout('tiraIxim()', 400)
}
function tiraIxim() {
    const atalhosTela = document.querySelector('.atalhosTela')
    atalhosTela.classList.remove('ixiBum')

}

function geradorDeIcone() {

    const nomeIcone = document.querySelector('#nomeIcone')
    const imgIcone = document.querySelector('.atalhosTela img').src
    const linkIcon = document.querySelector('#linkDoAtalho')
    const data = JSON.parse(localStorage.getItem('todosAtalhos'))

    const imgPadrao = './src/img/icons/vendedor.png'

    console.log(nomeIcone.value)
    console.log(imgIcone == imgPadrao)
    console.log(linkIcon.value)

    if (nomeIcone.value.length <= 0 || linkIcon.value.length <= 0) {
        alert('Preencha Todos os campos')
    } else {
        const oLink = linkIcon.value.toString()
        console.log(oLink.includes('https://'))
        if (oLink.includes('https://')) {
            var LinkDoIcone = oLink
        } else {
            var LinkDoIcone = `https://${oLink}`
        }

        const addIcons = {
            "id": data.length + 1,
            "imagem": `${imgIcone}`,
            "texto": `${nomeIcone.value}`,
            "link": `${LinkDoIcone}`
        }
        data.push(addIcons)
        localStorage.setItem('todosAtalhos', JSON.stringify(data))
        alert('ATALHO CADASTRADO COM SUCESSO!!')
        location.reload()
    }
}

function excluirIcone() {
    const data = JSON.parse(localStorage.getItem('todosAtalhos'))
    const indice = document.querySelector('select#editarIconeS').selectedIndex - 1

    var index = data.indexOf(indice);
    console.log(indice)
    console.log(index)
    if (indice > -1) {
        data.splice(indice, 1);
        localStorage.setItem('todosAtalhos', JSON.stringify(data))

        console.log(data)
    }

    location.reload()
   
}