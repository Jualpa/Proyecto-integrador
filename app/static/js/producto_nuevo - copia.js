function guardar() {
    let n = document.getElementById("nombre").value
    let d = document.getElementById("descripcion").value
    let ct = document.getElementById("contenido_teo").value
    let cp = document.getElementById("contenido_pra").value
    let p = parseFloat(document.getElementById("precio").value)
    let v = parseInt(document.getElementById("vacantes").value)
    let i = document.getElementById("imagen").value


    let curso = {
        nombre: n,
        descripcion: d,
        contenido_teo: ct,
        contenido_pra: cp,
        precio: p,
        vacantes: v,
        imagen: i
    }
    let url = "https://jualpa.pythonanywhere.com/cursos"
    var options = {
        body: JSON.stringify(curso),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "../templates/crud.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}

