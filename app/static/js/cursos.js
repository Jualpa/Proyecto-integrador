const { createApp } = Vue

createApp({
    data() {
        return {
            url: "https://jualpa.pythonanywhere.com/cursos",
            cursos: [],
            error: false,
            cargando: true
        }
    },
    created() {
        this.fetchData(this.url)
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.cursos = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })

        },
        eliminar(curso) {
            const url = 'https://jualpa.pythonanywhere.com/cursos/' + curso;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        },
    },


}).mount('#app')