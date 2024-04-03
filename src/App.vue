<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <SliderComponent></SliderComponent>
    <div class="center">

      <router-view></router-view>
     <!-- <LastArticles></LastArticles>-->

      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
    <FooterComponent></FooterComponent>    
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import SliderComponent from './components/SliderComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'
//import LastArticles from './components/LastArticles.vue'
import FooterComponent from './components/FooterComponent.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
   // LastArticles,
    FooterComponent
  }
}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

@import './assets/css/styles.css';
</style>
