const infoContrato = localStorage.getItem('infoContrato');

function contratoMostra() {
    const contratoc = document.querySelector('#contratoc')
    const data = JSON.parse(infoContrato)
    console.log(data)
    const nomeVendedora = data.tipo

    contratoc.innerHTML = "ok"
}
contratoMostra()