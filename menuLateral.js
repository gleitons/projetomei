function dMode() {
    dModeT()
    //avisoS('Opção em construção - Em breve Novidades')
}
if (localStorage.getItem('dmodeRede') == null) {
    localStorage.setItem('dmodeRede', 0)
}
const modeAtual = localStorage.getItem('dmodeRede')

if (modeAtual == 1) {
    const moded = document.querySelector('.telaApresentacao').style.backgroundColor = '#555555'

} else {
    document.querySelector('.telaApresentacao').style.backgroundColor = 'white'

}

document.querySelector('head').innerHTML += `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-133729569-2"></script>
    <script>window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments) } gtag("js", new Date()); gtag("config", "UA-133729569-2");</script>`


function dModeT() {
    const menuAtual = document.querySelector('.menusApresentação').style.backgroundColor
    const fundoAtual = document.querySelector('.telaApresentacao').style.backgroundColor
    const modeAtual = localStorage.getItem('dmodeRede')

    if (modeAtual == 0) {
        document.querySelector('.telaApresentacao').style.backgroundColor = '#555555'
        localStorage.setItem('dmodeRede', 1)
    } else {
        document.querySelector('.telaApresentacao').style.backgroundColor = 'white'
        localStorage.setItem('dmodeRede', 0)
    }
    // alert(menuAtual)
    // document.querySelector('.menusApresentação').style.backgroundColor = '#0e0e0e'

    //#555555

}
function horario() {
    const h = new Date()
    const hora = h.getHours().toString().length == 1 ? '0' + h.getHours() : h.getHours()
    const minutos = h.getMinutes().toString().length == 1 ? '0' + h.getMinutes() : h.getMinutes()
    const segundos = h.getSeconds().toString().length == 1 ? '0' + h.getSeconds() : h.getSeconds()
    const horarios =  `${hora}:${minutos}:${segundos}`
    horarioPad.textContent = horarios
    localStorage.setItem('horarioA', JSON.stringify(horarios))
    
    
    //return horario
}
if (localStorage.getItem('perfilRede') == null) {
    loadDadosPrincipais()
}
const MenuLateral = () => {
    const dataT = JSON.parse(localStorage.getItem('perfilRede'))
    const horaAt = JSON.parse(localStorage.getItem('horarioA'))
    const h = new Date()
    const nomeMostra = dataT[0].nome != null ? dataT[0].nome : ''
    const mes = h.getMonth() + 1
    const mesAtual = mes.toString().length == 1 ? '0' + mes : mes
    const dataDia = `${h.getDate()}/${mesAtual}/${h.getFullYear()}`
    const horariod =  `${h.getHours()}:${h.getMinutes()}:${h.getSeconds()}`
    document.querySelector('.menusApresentação').innerHTML = ` 
    <nav class="menuLateral">
    <div>
    <p>FUTURO CONSULTORIA</p>
    <p>Bem-vindo</p>
    <a href="./perfil.html"><p>${nomeMostra}</p></a>
    <p>${dataDia} - <span id="horarioPad">${horaAt}</span></p>
    </div>
    
    <a href="./">
        <li><i class="bi bi-house-fill"></i> Inicio</li>
    </a>
    <a href="./perfil.html">
    <li><i class="bi bi-layout-text-window-reverse"></i> Perfil</li>
    </a>
    
    <p class="avisoDiv">Buscador S</p>
    <a href="./buscar-cnpj.html">
    <li><i class="bi bi-search"></i> Pesquisa Rápida</li>
    </a>
    

    <p class="avisoDiv">MEI, ME, SA</p>
    <li class="menuDrop"><i class="bi bi-universal-access-circle"></i> Universo CNPJ
    <ul class="subMenu">
    <a href="./favoritos.html">
    <li><i class="bi bi-star-fill"></i></i>Favoritos</li>
    </a>   
    <a href="./links-interessantes.html">
    <li><i class="bi bi-globe2"></i> Links Interessantes</li>
    </a>  
    
    </ul>
    </li>  
    <li class="menuDrop"><i class="bi bi-folder-symlink-fill"></i> Atalho
     <ul class="subMenu">
        <a href="./criar-atalho.html">
        <li><i class="bi bi-file-plus-fill"></i></i>Novo</li>
        </a>   
        <a href="./editar-atalho.html">
        <li><i class="bi bi-pencil-fill"></i></i>Editar</li>
        </a>   
        <a href="./excluir-atalho.html">
        <li><i class="bi bi-x-square-fill"></i></i>Excluir</li>
        </a>   
        <a href="#" onclick="addAtalhos()">
        <li><i class="bi bi-house-up-fill"></i>Adicionar na Tela</li>
        </a>   
        
     </ul>
    </li>  

    <p class="avisoDiv">Atendimento SAS SEBRAE</p>

    <li class="menuDrop"><i class="bi bi-receipt"></i> Atendimentos
     <ul class="subMenu">
        <a href="./atividades-concluidas.html">
        <li><i class="bi bi-check-circle-fill"></i> Concluidos</li>
        </a>  
        <!-- <a href="./atendimento-sas-modelos.html">
        <li><i class="bi bi-archive-fill"></i> Modelos</li>
        </a>         
        <a href="./cadastro-empresa.html">
        <li><i class="bi bi-arrow-right-square-fill"></i> Cadastrar</li>
        </a>   
         <a href="./cadastro-imovel.html">
             <li><i class="bi bi-pencil-fill"></i> Editar</li>
         </a>       
         <a href="./cadastro-endereco.html">
             <li><i class="bi bi-x-circle"></i> Excluir</li>
         </a>
         --!>
     </ul>
    </li>  
    

    



    
    <!-- <p class="avisoDiv">+ Opções</p>

    <li class="menuDrop">
    <i class="bi bi-gear-fill"></i> Opções
     <ul class="subMenu">
     <a href="./perfil.html">
     <li><i class="bi bi-pencil-square"></i> Editar Perfil</li>
     </a> 

     <a href="./backup.html">
    <li><i class="bi bi-layer-backward"></i> Backup</li>
    </a>     
    <a href="./documentacao.html">
    <li><i class="bi bi-file-earmark-arrow-down-fill"></i> Documentação</li>
    </a> 
    
    </li>  --!>
 </nav>`
 setInterval('horario()', 1000)

}
MenuLateral()


function loadDadosPrincipais() {
    const dados = {
        "imagemFundo": "./src/img/futuro-consultoria.svg",
        "imagem": "./src/img/futuro-consultoria-horizonte.svg",
        "titlo": "FUTURO CONSULTORIA",
        "subTitle": "26.300.217/0001-00",
        "color": "#ffffff",
        "nome": "Atualize Perfil"
    }
    localStorage.setItem('perfilRede', JSON.stringify([dados]))
    
}
function resetaMenuEFundo() {
    loadDadosPrincipais()
    location.reload()
}
const loadItensDoPerfil = () => {
    const data = JSON.parse(localStorage.getItem('perfilRede'))
    linkImagfundo.value = data[0].imagemFundo
    linkImag.value = data[0].imagem
    tituloLocal.value = data[0].titlo
    SubTituloLocal.value = data[0].subTitle
    fundoColor.value = data[0].color
    nomeIdComplete.value = data[0].nome
}
const linkImag = document.querySelector('#linkImag')
if (linkImag != null) {
    loadItensDoPerfil()
}
const menuTop = () => {
    const data = JSON.parse(localStorage.getItem('perfilRede'))
    const imagemFundo = data[0].imagemFundo
    const nomes = data[0].nome
    const imagem = data[0].imagem
    const titlo = data[0].titlo
    const subTitle = data[0].subTitle
    const color = data[0].color
    if(data[0].comoFicaImg == 0){
        var comoFImage = `background-size: contain;`
    } else if (data[0].comoFicaImg == 1) {
        var comoFImage = `background-size: cover;`
    } else {
        var comoFImage = `background-size: auto;`
    }
    const fundoAP = document.querySelector('.telaApresentacao')
    fundoAP.setAttribute('style', `background-image: url('${data[0].imagemFundo}'); background-color: ${color}; ${comoFImage}
    background-position: center;`)

    document.querySelector('header').innerHTML = ` 
    <div>
    <a href="./" style="background-image: url('${imagem}');">
    <div class="logoCima" ">        
    </div>
    </a>
    <div class="letrasLogo">
        <h2>${titlo.toUpperCase()}</h2>
        <h3>${subTitle}</h3>
    </div>
   </div>`

}
menuTop()


function atualizarPerfilDigito() {
    const data = JSON.parse(localStorage.getItem('perfilRede'))
    const perfil = {
        "imagemFundo": linkImagfundo.value,
        "imagem": linkImag.value,
        "titlo": tituloLocal.value,
        "subTitle": SubTituloLocal.value,
        "color": fundoColor.value,
        "nome": nomeIdComplete.value
    }
    localStorage.setItem('perfilRede', JSON.stringify([perfil]))

}

function atualizarPerfilClique() {
    
    const data = JSON.parse(localStorage.getItem('perfilRede'))
    const pImageFundo = document.querySelector('#pImageFundo').selectedIndex
    console.log(pImageFundo)
    const perfil = {
        "imagemFundo": linkImagfundo.value,
        "imagem": linkImag.value,
        "titlo": tituloLocal.value,
        "subTitle": SubTituloLocal.value,
        "color": fundoColor.value,
        "nome": nomeIdComplete.value,
        "comoFicaImg": pImageFundo
    }
    
    localStorage.setItem('perfilRede', JSON.stringify([perfil]))
    location.reload()
}

if (document.querySelector('.classT') != null) {
    window.onstorage = function (e) {

        atualizarPerfilDigito()
        // if(document.querySelector('#AtalhosAdicionandoIcons' != null)) adicionaNoDesktop()

    }
}

document.querySelector('head').innerHTML += `<link rel="shortcut icon" href="./src/img/futuro-consultoria-horizonte.svg" type="image/x-icon">`

document.querySelector('footer').innerHTML += `  <div class="atalhosTelaDesktop confiTela">         

<div >
<abbr title="Home">
    <a href="./">
        <img src="./src/img/icons/inicio-casa.png" alt="Novo Lembrete">
       
    </a>
</div>   
</abbr>        
<abbr title="Novo Atalho">
    <div onclick="addAtalhos()">
        <img src="./src/img/icons/novo-atalho.png" alt="Novo Lembrete">
    
    </div>
</abbr>
<abbr title="Novo Lembrete">
    <div onclick="addLembrete()">
        <img src="./src/img/icons/novo-lembrete.png" alt="Novo Atalho">
    
    </div>
</abbr>
<abbr title="Favoritos">
    <div >
        <a href="./favoritos.html">
            <img src="./src/img/icons/favoritos-empresas.png" alt="Novo Atalho">
    
        </a>
    </div>
</abbr>
 <abbr title="Pesquisar Empresa">
     <div>
        <a href="./buscar-cnpj.html">
            <img src="./src/img/icons/pesquisa-empresas.png" alt="Novo Atalho">
     
        </a>
     </div>
 </abbr>
<abbr title="Editar Perfil">
    <div>
        <a href="./perfil.html">
            <img src="./src/img/icons/editar-perfil.png" alt="Novo Atalho">
    
        </a>
    </div>
</abbr>
<abbr title="REMOVER COR PISCANDO">
    <div>
        <a href="./perfil.html">
            <img src="./src/img/icons/editar-perfil.png" alt="Novo Atalho">
    
        </a>
    </div>
</abbr>

</div>`


document.querySelectorAll('a[href="https://gleiton.com.br"]').forEach(link => {
    console.log(link)
    link.href = 'https://gleiton.vercel.app/servicos';
});