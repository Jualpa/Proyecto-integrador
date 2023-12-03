console.log(location.search) // lee los argumentos pasados a este formulario
var id = location.search.substr(4)
console.log(id)

const { createApp } = Vue

createApp({
    data() {
        return {
            id: 0,
            nombre: "",
            descripcion: "",
            contenido_teo: "",
            contenido_pra: "",
            precio: 0,
            vacantes: 0,
            imagen: "",
            url: 'https://jualpa.pythonanywhere.com/cursos/' + id,
            error: false,
            errorMessage: "",
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.nombre = data.nombre
                    this.descripcion = data.descripcion
                    this.contenido_teo = data.contenido_teo
                    this.contenido_pra = data.contenido_pra
                    this.vacantes = data.vacantes
                    this.precio = data.precio
                    this.imagen = data.imagen
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        validarCampos() {
            if (!this.nombre || !this.descripcion || !this.contenido_teo || !this.contenido_pra || !this.precio || !this.vacantes || !this.imagen) {
                alert("Todos los campos son obligatorios.");
                return false;
            }
            return true;
        },
        modificar() {
            if (!this.validarCampos()) {
                return;
            }

            let producto = {
                nombre: this.nombre,
                descripcion: this.descripcion,
                contenido_teo: this.contenido_teo,
                contenido_pra: this.contenido_pra,
                vacantes: this.vacantes,
                precio: this.precio,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(() => {
                    alert("Registro modificado")
                    window.location.href = "../templates/pp.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
