<template>
    <section id="content">
        <h2 class="subheader">Peliculas</h2>

        <!--Listado articulos-->
        <div id="articles">
            <article class="article-item" v-for="pelicula in  peliculas " v-bind:key="pelicula.title">
                <div class="image-wrap">
                    <img 
                    :src="pelicula.image" 
                    :alt="pelicula.title" 
                    :title="pelicula.title"/>
                </div>

                <h2>{{pelicula.title}}</h2>
                <span class="date" :class="{
                   yeargreen: pelicula.year >= 2015,
                   yearred: pelicula.year < 2015
                }">
                  Año:  {{pelicula.year}}
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
    name: 'PeliculasComponent',
    data() {
        return {
            peliculas: [
                { title: 'Batman vs Superman', year: 2017, image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/02/567660-batman-v-superman-portadas-alternativas-dc-comics.jpg?tf=3840x" },
                { title: "Gran Torino", year: 2015, image: "https://pics.filmaffinity.com/Gran_Torino-380980425-large.jpg" },
                { title: "El señor de los anillos", year: 2003, image: "https://i.blogs.es/535dc3/el-senor-de-los-anillos-y-el-hobbit/840_560.jpeg" },
                {title:"Rapido y Furioso", year: 2009, image:"https://palomaynacho-1f321.kxcdn.com/wp-content/uploads/2023/04/rapido-y-furioso-numero-1.jpg"}
            ]
        }
    }
}
</script>