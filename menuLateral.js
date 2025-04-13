// Configuração inicial e verificação de valores no localStorage
document.addEventListener('DOMContentLoaded', function() {
    // Inicialização do localStorage
    if (localStorage.getItem('dmodeRede') === null) {
        localStorage.setItem('dmodeRede', '0');
    }
    
    if (localStorage.getItem('perfilRede') === null) {
        loadDadosPrincipais();
    }
    
    // Aplicar modo escuro se estiver ativo
    const modeAtual = localStorage.getItem('dmodeRede');
    if (modeAtual === '1') {
        document.querySelector('.telaApresentacao').style.backgroundColor = '#555555';
    } else {
        document.querySelector('.telaApresentacao').style.backgroundColor = 'white';
    }
    
    // Carregar componentes da página
    MenuLateral();
    menuTop();
    iniciarRelogio();
    
    // Adicionar ouvintes de eventos para elementos específicos
    if (document.querySelector('.classT') !== null) {
        window.onstorage = function(e) {
            atualizarPerfilDigito();
        };
    }
    
    // Inicializar campos do perfil se existirem
    const linkImag = document.querySelector('#linkImag');
    if (linkImag !== null) {
        loadItensDoPerfil();
    }
});

// Google Analytics
document.querySelector('head').innerHTML += `
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-133729569-2"></script>
    <script>
        window.dataLayer = window.dataLayer || []; 
        function gtag() { dataLayer.push(arguments); } 
        gtag("js", new Date()); 
        gtag("config", "UA-133729569-2");
    </script>
    <link rel="shortcut icon" href="./src/img/curso-ads-gleiton.png" type="image/x-icon">
`;

// Função para alternar o modo escuro
function dMode() {
    dModeT();
}

function dModeT() {
    const modeAtual = localStorage.getItem('dmodeRede');

    if (modeAtual === '0') {
        document.querySelector('.telaApresentacao').style.backgroundColor = '#555555';
        localStorage.setItem('dmodeRede', '1');
    } else {
        document.querySelector('.telaApresentacao').style.backgroundColor = 'white';
        localStorage.setItem('dmodeRede', '0');
    }
}

// Funções de data e hora
function formatarNumero(numero) {
    return numero.toString().length === 1 ? '0' + numero : numero;
}

function horario() {
    const h = new Date();
    const hora = formatarNumero(h.getHours());
    const minutos = formatarNumero(h.getMinutes());
    const segundos = formatarNumero(h.getSeconds());
    const horarios = `${hora}:${minutos}:${segundos}`;
    
    const horarioPad = document.getElementById('horarioPad');
    if (horarioPad) {
        horarioPad.textContent = horarios;
    }
    
    localStorage.setItem('horarioA', JSON.stringify(horarios));
}

function iniciarRelogio() {
    horario();
    setInterval(horario, 1000);
}

// Funções de gerenciamento de perfil
function loadDadosPrincipais() {
    const dados = {
        "imagemFundo": "./src/img/curso-ads-gleiton.png",
        "imagem": "./src/img/curso-ads-gleiton.png",
        "titlo": "PROJETO PARA AJUDAR O MEI - ADS",
        "subTitle": "00.000.000/0000-00",
        "color": "#ffffff",
        "nome": "Atualize Perfil",
        "comoFicaImg": 0
    };
    localStorage.setItem('perfilRede', JSON.stringify([dados]));
}

function resetaMenuEFundo() {
    loadDadosPrincipais();
    location.reload();
}

function loadItensDoPerfil() {
    const data = JSON.parse(localStorage.getItem('perfilRede'));
    
    document.querySelector('#linkImagfundo').value = data[0].imagemFundo;
    document.querySelector('#linkImag').value = data[0].imagem;
    document.querySelector('#tituloLocal').value = data[0].titlo;
    document.querySelector('#SubTituloLocal').value = data[0].subTitle;
    document.querySelector('#fundoColor').value = data[0].color;
    document.querySelector('#nomeIdComplete').value = data[0].nome;
    
    // Se existir o seletor de imagem, atualizar
    const pImageFundo = document.querySelector('#pImageFundo');
    if (pImageFundo && data[0].comoFicaImg !== undefined) {
        pImageFundo.selectedIndex = data[0].comoFicaImg;
    }
}

function atualizarPerfilDigito() {
    const data = JSON.parse(localStorage.getItem('perfilRede'));
    
    const perfil = {
        "imagemFundo": document.querySelector('#linkImagfundo').value,
        "imagem": document.querySelector('#linkImag').value,
        "titlo": document.querySelector('#tituloLocal').value,
        "subTitle": document.querySelector('#SubTituloLocal').value,
        "color": document.querySelector('#fundoColor').value,
        "nome": document.querySelector('#nomeIdComplete').value,
        "comoFicaImg": data[0].comoFicaImg || 0
    };
    
    localStorage.setItem('perfilRede', JSON.stringify([perfil]));
}

function atualizarPerfilClique() {
    const pImageFundo = document.querySelector('#pImageFundo');
    const selectedIndex = pImageFundo ? pImageFundo.selectedIndex : 0;
    
    const perfil = {
        "imagemFundo": document.querySelector('#linkImagfundo').value,
        "imagem": document.querySelector('#linkImag').value,
        "titlo": document.querySelector('#tituloLocal').value,
        "subTitle": document.querySelector('#SubTituloLocal').value,
        "color": document.querySelector('#fundoColor').value,
        "nome": document.querySelector('#nomeIdComplete').value,
        "comoFicaImg": selectedIndex
    };
    
    localStorage.setItem('perfilRede', JSON.stringify([perfil]));
    location.reload();
}

// Componentes de UI
function MenuLateral() {
    const dataT = JSON.parse(localStorage.getItem('perfilRede'));
    const horaAt = JSON.parse(localStorage.getItem('horarioA') || '"00:00:00"');
    
    const h = new Date();
    const nomeMostra = dataT[0].nome || '';
    const mes = h.getMonth() + 1;
    const mesAtual = formatarNumero(mes);
    const dataDia = `${formatarNumero(h.getDate())}/${mesAtual}/${h.getFullYear()}`;
    
    const menuLateralHTML = `
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
    </nav>`;
    
    const menuElement = document.querySelector('.menusApresentação');
    if (menuElement) {
        menuElement.innerHTML = menuLateralHTML;
    }
}

function menuTop() {
    const data = JSON.parse(localStorage.getItem('perfilRede'));
    
    let comoFImage = 'background-size: contain;';
    if (data[0].comoFicaImg === 1) {
        comoFImage = 'background-size: cover;';
    } else if (data[0].comoFicaImg === 2) {
        comoFImage = 'background-size: auto;';
    }
    
    // Aplicar estilos ao fundo
    const fundoAP = document.querySelector('.telaApresentacao');
    if (fundoAP) {
        fundoAP.setAttribute('style', `
            background-image: url('${data[0].imagemFundo}'); 
            background-color: ${data[0].color}; 
            ${comoFImage}
            background-position: center;
        `);
    }
    
    // Atualizar o header
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = `
        <div>
            <a href="./" style="background-image: url('${data[0].imagem}');">
                <div class="logoCima"></div>
            </a>
            <div class="letrasLogo">
                <h2>${data[0].titlo.toUpperCase()}</h2>
                <h3>${data[0].subTitle}</h3>
            </div>
        </div>`;
    }
    
    // Adicionar atalhos no footer
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML += `
        <div class="atalhosTelaDesktop confiTela">         
            <div>
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
                <div>
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
        </div>`;
    }
    
    // Redirecionar links específicos
    document.querySelectorAll('a[href="https://gleiton.com.br"]').forEach(link => {
        link.href = 'https://gleiton.vercel.app/servicos';
    });
}