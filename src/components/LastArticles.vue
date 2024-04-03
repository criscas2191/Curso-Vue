<template>
    <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!--Listado articulos-->
        <div id="articles">
            <article class="article-item" id="article-template">
                <div class="image-wrap">
                    <img src="https://media.istockphoto.com/id/1490879216/es/foto/%C3%A1rbol-de-wanaka-alpes-del-sur-y-hojas-de-oto%C3%B1o-en-el-lago-wanaka-en-nueva-zelanda.jpg?s=1024x1024&w=is&k=20&c=KXJNqCsO9EbbwQvToUsu9FwxB7ovzS0F19ArRBMxQgY="
                        alt="Paisaje" />
                </div>

                <h2>Articulo de prueba</h2>
                <span class="date">
                    Hace 5 minutos
                </span>
                <a href="#">Leer más</a>

                <div class="clearfix"></div>
            </article>

            <!--AÑADIR ARTICULOS VIA JS-->

        </div>

    </section>
</template>

<script>
export default {
    name: 'LastArticles'
}
</script>