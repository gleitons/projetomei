
var editais = []

function pegandoEditais() {
    for (let i = 0; i < 1; i++) {
        const url =

            pegarDados(`https://docs.google.com/spreadsheets/d/14HYAgWuPQI3xxfzhPpeiNeVx_jXF5UxlSqV99NSKs9w/edit?usp=sharing`)

    }
}
pegandoEditais()
//setInterval('pegandoEditais()' , 10000)


function pegarDados(endereco) {

    fetch(endereco)
        .then((resp) => resp.text())
        .then(function (data) {
            ver.innerHTML = data

            var contratosFeitos = []
            var corpoLicita = document.querySelectorAll('tbody tr')

            for (let i = 2; i < 500; i++) {

                if(corpoLicita[i] != undefined) {
                    const dataRegistro = corpoLicita[i].querySelectorAll('td')[0].innerHTML
                const codRegistro = corpoLicita[i].querySelectorAll('td')[1].innerHTML
                const arrayRegistro = corpoLicita[i].querySelectorAll('td')[3].innerHTML

                const resultadoParcial = {
                    "dataRegistro": dataRegistro,
                    "codRegistro": codRegistro,
                    "arrayRegistro": arrayRegistro
                }
                console.log(resultadoParcial)
                contratosFeitos.push(resultadoParcial)
                } 
                
                
            }
            localStorage.setItem('registrosContratos', JSON.stringify(contratosFeitos))

            document.querySelector('#ver').style.display = 'none'
            //console.log(resultadoParcial)


        })

        .catch(function (error) {
            console.log(error)
        });


}







