const imgMeme = document.querySelector('#linkImag');
const memeInput = document.querySelector('#imgLoLogo');
memeInput.addEventListener('change', function (evt) {
    if (!(evt.target && evt.target.files && evt.target.files.length > 0)) {
        return;
    }

    // Inicia o file-reader:
    var r = new FileReader();
    // Define o que ocorre quando concluir:
    r.onload = function () {
        // Define o `src` do elemento para o resultado:
        imgMeme.value = r.result;
    }
    // Lê o arquivo e cria um link (o resultado vai ser enviado para o onload.
    r.readAsDataURL(evt.target.files[0]);

    // Define o texto (coisa que já tava fazendo, ~estou ignorando problema de segurança~):
    // console.log(textInsert.value)
    imgMeme.value = r.result;
});



const imgMeme2 = document.querySelector('#linkImagfundo');
const memeInput2 = document.querySelector('#imgFuFundo');
memeInput2.addEventListener('change', function (evt) {
    if (!(evt.target && evt.target.files && evt.target.files.length > 0)) {
        return;
    }

    // Inicia o file-reader:
    var r = new FileReader();
    // Define o que ocorre quando concluir:
    r.onload = function () {
        // Define o `src` do elemento para o resultado:
        imgMeme2.value = r.result;
    }
    // Lê o arquivo e cria um link (o resultado vai ser enviado para o onload.
    r.readAsDataURL(evt.target.files[0]);

    // Define o texto (coisa que já tava fazendo, ~estou ignorando problema de segurança~):
    // console.log(textInsert.value)
    imgMeme2.value = r.result;
});


function carregaI() {
    const it = '<div class="carregaImgLogos" style="background-color:white;"> <p>AGUARDE, CARREGANDO...</p> </div>'
    avisoS(it)
    setTimeout('atualizarPerfilClique()', 2000)
    
}

function carregaPre() {
    const preCityFundo = document.querySelector('#preCityFundo').selectedIndex
    const logos = ["./src/img/futuro-consultoria-horizonte.svg","./src/img/logo-buritizeiro.png", "https://ibiai.mg.gov.br/wp-content/uploads/2021/06/LOGOS-PM-IBIAI.png", "https://site.jequitai.mg.gov.br/wp-content/uploads/elementor/thumbs/Logo-Transp-1-q2606btqeax7iht2ahqg3ejrb3wy7jl5cr9uj32eg8.png", "http://lagoadospatos.mg.gov.br/wp-content/uploads/2021/02/logo-lagoa-patos.png", "https://camaradelassance.mg.gov.br/wp-content/uploads/2017/01/BRAS%C3%83O-JPEG.jpg", "https://upload.wikimedia.org/wikipedia/commons/d/da/Bras%C3%A3o_do_Munic%C3%ADpio_de_Pirapora-MG.png", "https://www.ferias.tur.br/imgs/3644/pontochique/g_brasao-de-ponto-chique-mg.jpg", "https://upload.wikimedia.org/wikipedia/commons/6/6b/Brasaovarzeadapalma.jpg"]
    const fundos = ["./src/img/futuro-consultoria.svg", "https://www.buritizeiro.mg.gov.br/web/fotos/mais-fotos_0_buritizeiro-06_megadesignsaj.com.br_zz074dbd8477.JPG", "https://ibiai.mg.gov.br/wp-content/uploads/2019/10/IMG-20191024-WA0196-1-1024x766.jpg", "https://site.jequitai.mg.gov.br/wp-content/uploads/2023/02/img_cachoeira.png", "https://scontent.fpoj6-1.fna.fbcdn.net/v/t39.30808-6/333979080_989208475392832_3949912853489596139_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=J69iOtgVYgkAX9GmTrE&_nc_ht=scontent.fpoj6-1.fna&oh=00_AfAVGAllVkS9EVixguRhlU_xRc0895n8a00tT1BuzmH7Rg&oe=65B789D9", "https://lassance.mg.gov.br/wp-content/uploads/2019/06/TAPERA-1-1.jpg", "https://s.glbimg.com/jo/g1/f/original/2011/12/21/barco_a_vapor_benjamin_guimaraes.jpg", "https://www.pontochique.mg.gov.br/uploads/_thumb/cedoc_doc_6/img6_sw45eozc8qltiysmv2tqv0q6zzledpo0svpgh4lszk3rbxl574kqrthtzit1u1fyqkd09o7dfc4770wiz11gr4valeegpjdzee8q.jpg", "https://www.minasgerais.com.br/imagens/eventos/1656596015Zx5bQFFn6p.jpg"]
    const nomePefil = ["Atualize o Perfil", "BURITIZEIRO", "IBIAÍ", "JEQUITAÍ", "LAGOA DOS PATOS", "LASSANCE", "PIRAPORA", "PONTO CHIQUE", "VARZEA DA PALMA"]
    const titu = ["FUTURO CONSULTORIA", "PREFEITURA MUNICIPAL", "PREFEITURA MUNICIPAL", "PREFEITURA MUNICIPAL", "PREFEITURA MUNICIPAL DE LAGOA DOS PATOS", "PREFEITURA MUNICIPAL", "PREFEITURA MUNICIPAL", "PREFEITURA MUNICIPAL", "PREFEITURA MUNICIPAL"]
    const subt = ["26.300.217/0001-00","SALA MINEIRA DO EMPREENDEDOR","SALA MINEIRA DO EMPREENDEDOR","SALA MINEIRA DO EMPREENDEDOR","SALA MINEIRA DO EMPREENDEDOR","SALA MINEIRA DO EMPREENDEDOR","SALA MINEIRA DO EMPREENDEDOR","SALA MINEIRA DO EMPREENDEDOR","SALA MINEIRA DO EMPREENDEDOR"]

    linkImag.value = logos[preCityFundo]
    linkImagfundo.value = fundos[preCityFundo]
    nomeIdComplete.value = nomePefil[preCityFundo]
    tituloLocal.value = titu[preCityFundo]
    SubTituloLocal.value = subt[preCityFundo]
    
   
    carregaI()
}