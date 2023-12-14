<template>
    <div class="container">
    <form>
      <input name="titre" type="text" placeholder="Le titre de votre critique" class="titre" v-model="titre">
      <textarea name="critique" placeholder="A vous de rediger !" class="critique" v-model="critiqueTxt"></textarea>
      <button class="boutton" @click="envoieCritique">Envoyer !</button>
    </form>
    </div>
</template>

<script>
export default{
  data(){
    return{
      critiqueTxt:'',
      titre:''
    }
  },
  methods:{
    envoieCritique(){
      this.emission()
      this.$emit('sendJSON')
    },
    emission(){
      this.$emit('crit',this.critiqueTxt)
      this.$emit('titre',this.titre)
  }}
}
</script>

<style scoped>
.container {
  background-color: #336DBF;
  height:100vh;
  width: 100%;
  z-index: 2;
  position: fixed;
  margin-top: 26%;
}
.titre{
  display: block;
  width: 60%;
  height: 5vh;
  margin-left: 20%;
  text-align: center;
}
.critique{
  height: 35vh;
  display: block;
  width: 60%;
  margin-left: 20%;
  text-align: center;
}
.slide-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 0.3s ease-out backwards;
}
@keyframes slide-in {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}
button {
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  margin: 5% 20%;
}
.boutton{
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 1.5em;
    background: var(--button_color);
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
    background-color: white;
    color:  #336DBF;
    margin: 1% 45%;
    box-shadow:2px 5px 16px 0px #0B325E;
}
button:hover .boutton{
    transform: translateY(-0.33em);
} 
button:active .boutton{
    transform: translateY(0);
}
@media screen and (max-width: 768px) {
  .container {
  background-color: #336DBF;
  height:100vh;
  width: 100vh;
  z-index: 2;
  position: fixed;
  margin-top: 20%;
  top: 0%;
}
.titre{
  display: block;
  width: 40vh;
  height: 5vh;
  margin-top: 35%;
  margin-left: 2.5%;
  text-align: center;
}
.critique{
  height: 35vh;
  display: block;
  width: 40vh;
  margin-top: 3%;
  margin-left: 2.5%;
  text-align: center;
}
.slide-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 0.3s ease-out backwards;
}
@keyframes slide-in {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
button {
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  margin: 5% 20%;
}
.boutton{
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 1.5em;
    background: var(--button_color);
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
    background-color: white;
    color:  #336DBF;
    margin: 3% 15%;
    box-shadow:2px 5px 16px 0px #0B325E;
}
button:hover .boutton{
    transform: translateY(-0.33em);
} 
button:active .boutton{
    transform: translateY(0);
}
}
</style>