<template>
<infoLivre :titre="titre" :image="image" @toggleRoue="toggleRoue"/>
<critique :resume="resume" :auteur="autheur" :date="date" :genre="genre" :data="data" v-show="currentComponent === 'component1'"/>
<roueNotation @toggleEmbranchement="toggleEmbranchement" @note="childNote" v-show="currentComponent === 'component2'"/>
<embranchement @critique="toggleCritique" v-show="currentComponent === 'component3'"/>
<transition name="slide">
<critiqueType @titre="childTitre" @crit="childCritique" @sendJSON="dataAPI" v-show="currentComponent === 'component4'"/>
</transition>
</template>

<script>
import MenuDesktop from './menuDesktop.vue'
import infoLivre from './infoLivre.vue'
import critique from './critique.vue'
import menuMobile from './menuMobile.vue'
import roueNotation from './roueNotation.vue'
import embranchement from './embranchement.vue'
import critiqueType from './critiqueType.vue'

export default {
    components: {
      MenuDesktop,
      infoLivre,
      critique,
      menuMobile,
      roueNotation,
      embranchement,
      critiqueType
  },
  data(){
    return{
      currentComponent: 'component1',
      auteur:"",
      titre:"",
      genre:"",
      date:"",
      resume:"",
      image:"",
      note:0,
      critiqueTxt:"",
      titreCritique:"",
      idCritique:null,
      idAPI:"",
      data:""
    }
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler(newId, oldId) {
        if (newId !== oldId) {
    const livreId = this.$route.params.id 
    fetch("https://www.googleapis.com/books/v1/volumes/"+ encodeURIComponent(livreId))
    .then(async response => {
    const data = await response.json();
    this.auteur = data.volumeInfo.authors
    this.titre = data.volumeInfo.title
    this.genre = data.volumeInfo.categories
    this.date = data.volumeInfo.publishedDate
    this.resume = this.removeTags(data.volumeInfo.description)
    this.image = data.volumeInfo.imageLinks.thumbnail
    this.idAPI = livreId
    })
    .catch(error => {
   console.error("There was an error!", error);
    });
    }
  }}
  },
    mounted(){
    this.getCritique()
  },
  methods:{
    getCritique(){
    const livreId = this.$route.params.id 
    const url = 'https://127.0.0.1:8000/api/note/id/'+encodeURIComponent(livreId)
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',"Accept": "application/json"},
    }
    const getC = async ()=> {
      const getCritique = await fetch(url,requestOptions);
      this.data = await getCritique.json();
      return this.data;
    }
    getC();
  },
    toggleRoue(){
      console.log("ok");
      if(this.currentComponent==='component1'){
      this.currentComponent = 'component2'
      }else{
        this.currentComponent = 'component1'
      }
    },
    toggleEmbranchement(){
      if(this.currentComponent==='component2')
        this.currentComponent = 'component3';
    },
    toggleCritique(){
      if(this.currentComponent==='component3'){
        this.currentComponent = 'component4'
      }
    },
    removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
},
  childNote(value){
    this.note = value
  },
  childCritique(value){
    this.critiqueTxt = value
  },
  childTitre(value){
    this.titreCritique = value
  },
  dataAPI() {
    console.log(this.titreCritique,this.critiqueTxt,this.note)
    event.preventDefault();
     const envoieCritique = async ()=>{ 
      const envoiApi = await fetch('https://127.0.0.1:8000/api/note/add', {
        method: "POST",
        header: { "Content-Type": "application/json","Accept": "application/json",},
        body: JSON.stringify({
          titreCritique:this.titreCritique,
          titre: this.titre,
          note: this.note,
          critique: this.critiqueTxt,
          idApi: this.idAPI,
          dateCritique:"06-01-2023",
          date:this.date,
          auteur:this.auteur
        })
      })
      console.log(envoiApi);
      this.data = await envoiApi.json();
      console.log(data);
      return data
    }
    envoieCritique();
    },
    },
}


</script>

<style scoped></style>