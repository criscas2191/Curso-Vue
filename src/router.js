import { createRouter, createWebHistory } from "vue-router";
import LastArticles from './components/LastArticles.vue';
import MiComponente from "./components/MiComponente.vue";
import BlogComponente from "./components/BlogComponente.vue";
import FormularioComponente from "./components/FormularioComponente.vue";
import PaginaComponente from "./components/PaginaComponente.vue";
import ErrorComponent from "./components/ErrorComponent.vue";
import PeliculasComponent from "./components/PeliculasComponent.vue";

const routes = [
    {path: '/home', component:LastArticles},
    {path: '/ultimos-articulos', component:LastArticles},
    {path: '/blog', component:BlogComponente},
    {path: '/formulario',  component:FormularioComponente},
    {path: '/pagina/:id?', name: 'pagina',component:PaginaComponente},
    {path: '/peliculas', name: 'peliculas',component:PeliculasComponent},
    {path: '/mi-componente', component:MiComponente},
    {path: '/', component:LastArticles},
    {
        path: '/:pathMatch(.*)*',       
        component: ErrorComponent
    }
]; 

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;