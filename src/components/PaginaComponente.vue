<template>
    <section id="content">
        <h2 class="subheader">Página de prueba</h2>
        <h3>{{ id_desde_url }}</h3>
        <button @click="actualizarNombre()">Actualizar nombre</button>
        <button @click="redirigirAlBlog()">Redirigir al Blog</button>
        <h4>{{ nombre }}</h4>
    </section>
</template>

<script>
export default {
    name: "PaginaComponente",
    created() {
        console.log("Componente creado");
    },
    mounted() {
        this.id_desde_url = this.$route.params.id;
        console.log("Componente montado");
    },
    updated() {
        console.log("Componente actualizado");
    },
    unmounted() {
        console.log("Componente eliminado");
    },
    data() {
        return {
            id_desde_url: null,
            nombre: "Cristhian Castillo"
        }
    },
    methods: {
        actualizarNombre() {
            this.nombre = "CRISTHIAN CASTILLO WEB";
            console.log(this.nombre);
        },
        redirigirAlBlog() {
            this.$router.push('/blog');
        }
    }

}
</script>