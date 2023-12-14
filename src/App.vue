<template>
  <menu-desktop></menu-desktop>
  <RouterView></RouterView>
  <menu-mobile></menu-mobile>
</template>
  
<script>
  import MenuDesktop from './components/menuDesktop.vue'
  import acceuil from './components/Acceuil.vue'
  import pageLivre from "./components/pageLivre.vue"
  import MenuMobile from './components/menuMobile.vue'
  
  export default {
    components: {
    acceuil,
    pageLivre,
    MenuDesktop,
    MenuMobile
},
  data(){
    return{
    }
  },
  methods:{
  },
}
</script>

<style scoped>
</style>


