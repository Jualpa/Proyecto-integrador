console.log(location.search)     // lee los argumentos pasados a este formulario
var args = location.search.substr(1).split('&');
//separa el string por los “&” creando una lista [“id=3” , “nombre=’tv50’” , ”precio=1200”,”stock=20”]
console.log(args)
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
// //decodeUriComponent elimina los caracteres especiales que recibe en la URL 
document.getElementById("id").value = decodeURIComponent(parts[0][1])
document.getElementById("nombre").value = decodeURIComponent(parts[1][1])
document.getElementById("descripcion").value = decodeURIComponent(parts[2][1])
document.getElementById("contenido_teo").value = decodeURIComponent(parts[3][1])
document.getElementById("contenido_pra").value = decodeURIComponent(parts[4][1])
document.getElementById("precio").value = decodeURIComponent(parts[5][1])
document.getElementById("vacantes").value = decodeURIComponent(parts[6][1])
document.getElementById("imagen").value = decodeURIComponent(parts[7][1])



function modificar() {
    let id = document.getElementById("id").value
    let n = document.getElementById("nombre").value
    let d = document.getElementById("descripcion").value
    let ct = document.getElementById("contenido_teo").value
    let cp = document.getElementById("contenido_pra").value
    let p = parseFloat(document.getElementById("precio").value)
    let s = parseInt(document.getElementById("vacantes").value)
    let i = document.getElementById("imagen").value

    let producto = {
        id: id,
        nombre: n,
        descripcion: d,
        contenido_teo: ct,
        contenido_pra: cp,
        precio: p,
        stock: s,
        imagen: i,
    }

    let url = "https://jualpa.pythonanywhere.com/productos/" + id
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "../template/producto.html";  
        //NUEVO,  si les da error el fetch  comentar esta linea que puede dar error  
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}