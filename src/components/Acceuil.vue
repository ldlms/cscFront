<template>
    <Podium></Podium>
    <menu-deroulant></menu-deroulant>
</template>
  
<script>
  import Podium from './podium.vue'
  import MenuDeroulant from './menuDeroulant.vue'

  export default {
    components: {
      MenuDeroulant,
      Podium,
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