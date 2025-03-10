function retirac() {

    
    let parte1 = document.getElementById('ilink').value;
    let parte2 = parte1.replace("background-image: url('", "")
    let parte3 = parte2.replace("')", "")


    mostra.innerHTML = `<a target="_blank" href="${parte3}">${parte3}</a>`
}

// navigator.clipboard.writeText(text);
// navigator.clipboard.readText().then((text)=> {
//     alert('text');
// });

function refresh() {
    window.location.reload()
}