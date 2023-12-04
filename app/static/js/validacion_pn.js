function validarFormulario(guardar) {
    var nombre = document.getElementById('nombre').value;
    var descripcion = document.getElementById('descripcion').value;
    var contenido_teo = document.getElementById('contenido_teo').value;
    var contenido_pra = document.getElementById('contenido_pra').value;
    var precio = document.getElementById('precio').value;
    var vacantes = document.getElementById('vacantes').value;
    var imagen = document.getElementById('imagen').value;

    
    if (nombre === '' || descripcion === '' || contenido_teo === '' || contenido_pra === '' || precio === '' || vacantes === '' || imagen === '') {

            alert('Por favor, complete todos los campos.');
        return false;
    }
    if (precio <0 || vacantes<0) {
        alert("El precio y las vacantes no pueden ser negativos");
        return false;
    }
    if (guardar) {
        guardar();
    }
}

function agregarBr(cadena){
    return cadena.replaceAll(/\n/g,'<br>');
}

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
            descripcion: agregarBr(d),
            contenido_teo: agregarBr(ct),
            contenido_pra: agregarBr(cp),
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
                window.location.href = "../templates/cursos_CRUD.html";  
                // Handle response we get from the API
            })
            .catch(err => {
                //this.errored = true
                alert("Error al grabar" )
                console.error(err);
            })
    
}